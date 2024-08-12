import React, { useEffect, useState } from 'react';
import { Button } from '../../../../../../components/ui/button';
import useSpeechToText from 'react-hook-speech-to-text';
import { Mic } from 'lucide-react';
import { toast } from 'sonner';
import { chatSession } from '../../../../../../utils/GeminiAIModel';
import { UserAnswer } from '../../../../../../utils/schema';
import moment from 'moment';
import { useUser } from '@clerk/nextjs';
import { db } from '../../../../../../utils/db';
import { Textarea } from '../../../../../../components/ui/textarea';
import { Label } from '../../../../../../components/ui/label';
import { XCircle } from 'lucide-react';

function RecordAnswerSection({ mockInterviewQuestion, activeQuestionIndex, interviewData }) {
  const [userAnswer, setUserAnswer] = useState('');
  const { user } = useUser();
  const [loading, setLoading] = useState(false);

  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
    setResults
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false
  });

  useEffect(() => {
    if (results.length > 0) {
      setUserAnswer(results.map(result => result.transcript).join(' '));
    }
  }, [results]);

  const startStopRecording = () => {
    if (isRecording) {
      stopSpeechToText();
    } else {
      setUserAnswer('');
      setResults([]);
      startSpeechToText();
    }
  };

  const updateUserAnswer = async () => {
    setLoading(true);

    const questionNumber = activeQuestionIndex + 1;
    const feedbackPrompt = `Question ${questionNumber}: ${mockInterviewQuestion[activeQuestionIndex]?.question}, User Answer: ${userAnswer}, Depend on question and user answer for the given interview question, please give us a rating for the answer and feedback as an area of improvement if any, in just 3 to 5 lines to improve it in JSON format. With rating field and feedback field: (Please give all text inside JSON form only. Wrap all things in {[]} only)`;

    try {
      const result = await chatSession.sendMessage(feedbackPrompt);

      // Strip out any unnecessary code blocks or formatting
      const rawJson = result.response.text().replace(/```json|```/g, '').trim();
      
      // Parse the JSON response
      const jsonFeedbackResp = JSON.parse(rawJson);

      await db.insert(UserAnswer).values({
        mockIDRef: interviewData?.mockID,
        question: mockInterviewQuestion[activeQuestionIndex]?.question,
        correctAns: mockInterviewQuestion[activeQuestionIndex]?.answer,
        userAns: userAnswer,
        feedback: jsonFeedbackResp?.feedback || 'No feedback provided',
        rating: jsonFeedbackResp?.rating || 0,
        userEmail: user?.primaryEmailAddress?.emailAddress,
        createdAt: moment().format('DD-MM-YYYY')
      });

      toast(`User Answer for Question #${questionNumber} recorded successfully`);
    } catch (err) {
      console.error('Error saving user answer:', err);
      toast.error('Failed to save user answer. Please try again.');
    } finally {
      setUserAnswer('');
      setResults([]);
      setLoading(false);
    }
  };

  return (
    <div className='p-6 max-w-2xl mx-auto bg-white shadow-lg rounded-lg'>
      <div className='mb-6'>
        <div className='mb-2'>
          <Label htmlFor="userAnswer">Your Answer</Label>
        </div>
        <Textarea
          placeholder="Edit or re-write your answer"
          id="userAnswer"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          rows={6}
          className='border-gray-300'
        />
      </div>

      <div className='flex gap-4 mb-6'>
        <Button
          variant="outline"
          className={`w-full ${isRecording ? 'bg-red-600 text-white' : 'bg-indigo-700 text-white'}`}
          onClick={startStopRecording}
          disabled={loading}
        >
          {isRecording ? (
            <div className='flex items-center justify-center'>
              <Mic className='mr-2' />
              <span>Stop Recording</span>
            </div>
          ) : (
            <div className='flex items-center justify-center'>
              <Mic className='mr-2' />
              <span>Record Answer</span>
            </div>
          )}
        </Button>

        <Button
          onClick={updateUserAnswer}
          className='w-full bg-green-600 text-white'
          disabled={loading}
        >
          {loading ? 'Saving...' : `Save Answer for Question #${activeQuestionIndex + 1}`}
        </Button>
      </div>

      {error && (
        <div className='text-red-600 text-center'>
          <XCircle className='inline mr-2' />
          {error}
        </div>
      )}
    </div>
  );
}

export default RecordAnswerSection;
