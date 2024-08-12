"use client";
import React, { useEffect, useState } from 'react';
import Webcam from 'react-webcam';
import { Button } from '../../../../../../components/ui/button';
import useSpeechToText from 'react-hook-speech-to-text';
import { Mic, Volume2, StopCircle } from 'lucide-react';
import { toast } from 'sonner';
import { chatSession } from '../../../../../../utils/GeminiAIModel';
import { UserAnswer } from '../../../../../../utils/schema';
import moment from 'moment';
import { useUser } from '@clerk/nextjs';
import { db } from '../../../../../../utils/db';
import { Textarea } from '../../../../../../components/ui/textarea';
import { Label } from '../../../../../../components/ui/label';

function InterviewComponent({ mockInterviewQuestion = [], activeQuestionIndex = 0, interviewData }) {
  const [currentIndex, setCurrentIndex] = useState(activeQuestionIndex);
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
    results.forEach((result) => {
      setUserAnswer((prevAns) => prevAns + result?.transcript);
    });
  }, [results]);

  const handleNext = () => {
    if (currentIndex < mockInterviewQuestion.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleEndInterview = () => {
    alert('The interview has ended.');
    // Add any additional logic for ending the interview if necessary
  };

  const startStopRecording = async () => {
    if (isRecording) {
      stopSpeechToText();
    } else {
      startSpeechToText();
    }
  };

  const updateUserAnswer = async () => {
    setLoading(true);

    const questionNumber = currentIndex + 1;
    const feedbackPrompt = `Question ${questionNumber}: ${mockInterviewQuestion[currentIndex]?.question}, User Answer: ${userAnswer}, Depend on question and user answer for the given interview question, please give us a rating for the answer and feedback as an area of improvement if any, in just 3 to 5 lines to improve it in JSON format. With rating field and feedback field: (Please give all text inside JSON form only. Wrap all things in {[]} only)`;

    const result = await chatSession.sendMessage(feedbackPrompt);
    const mockJsonResp = (result.response.text()).replace('```json', '').replace('```', '');
    const jsonFeedbackResp = JSON.parse(mockJsonResp);

    await db.insert(UserAnswer).values({
      mockIDRef: interviewData?.mockID,
      question: mockInterviewQuestion[currentIndex]?.question,
      correctAns: mockInterviewQuestion[currentIndex]?.answer,
      userAns: userAnswer,
      feedback: jsonFeedbackResp?.feedback,
      rating: jsonFeedbackResp?.rating,
      userEmail: user?.primaryEmailAddress?.emailAddress,
      createdAt: moment().format('DD-MM-YYYY')
    });

    toast(`User Answer for Question #${questionNumber} recorded successfully`);
    setUserAnswer('');
    setResults([]);
    setLoading(false);
  };

  const questions = Array.isArray(mockInterviewQuestion) ? mockInterviewQuestion : mockInterviewQuestion.interviewQuestions || [];
  const currentQuestion = questions[currentIndex]?.question || 'No question available';

  const textToSpeach = (text) => {
    if ('speechSynthesis' in window) {
      const speech = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(speech);
    } else {
      alert('Sorry, your system browser does not support speech synthesis...');
    }
  };

  const stopSpeech = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  };

  return (
    <div className='p-6 max-w-2xl mx-auto bg-white shadow-lg rounded-lg'>
      <div className='flex justify-center mb-6'>
        <div className='w-full max-w-md'>
          <Webcam mirrored={true} className='rounded-lg shadow-md'/>
        </div>
      </div>

      <div className='p-4 border border-gray-200 rounded-lg'>
        {/* Question Navigation */}
        <div className='flex flex-wrap gap-3 mb-5'>
          {questions.map((question, index) => (
            <div
              key={question.id || index} // Use question.id if available, else index
              className={`flex items-center justify-center px-4 py-2 rounded-full cursor-pointer transition-transform transform ${currentIndex === index ? 'bg-indigo-500 text-white border-2 border-indigo-600' : 'bg-gray-200 text-black hover:bg-indigo-200 hover:text-white border border-gray-300'} `}
              onClick={() => setCurrentIndex(index)} // Select question on click
            >
              <span className='text-sm font-semibold'>Question #{index + 1}</span>
            </div>
          ))}
        </div>

        {/* Display Current Question */}
        <h2 className='mb-5 text-lg font-semibold'>{currentQuestion}</h2>

        {/* Action Buttons */}
        <div className='flex gap-4 mb-5'>
          <Volume2
            className='cursor-pointer'
            onClick={() => textToSpeach(currentQuestion)}
          />
          <StopCircle
            className='cursor-pointer'
            onClick={stopSpeech}
          />
        </div>

        <div className='flex justify-between items-center mb-5'>
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className='px-4 py-2 bg-blue-500 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed'
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex === questions.length - 1}
            className='px-4 py-2 bg-blue-500 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed'
          >
            Next
          </button>
        </div>

        {/* End Interview Button */}
        {currentIndex === questions.length - 1 && questions.length > 0 && (
          <button
            onClick={handleEndInterview}
            className='px-4 py-2 bg-red-500 text-white rounded-lg'
          >
            End Interview
          </button>
        )}

        {/* Note Section */}
        <div className='mt-10'>
          <h2 className='flex gap-2 items-center text-primary mb-2'>
            <Lightbulb />
            <strong>Note:</strong>
          </h2>
          <p className='text-sm text-primary'>
            {process.env.NEXT_PUBLIC_QUESTION_NOTE || 'No note available'}
          </p>
        </div>
      </div>

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
          {loading ? 'Saving...' : `Save Answer for Question #${currentIndex + 1}`}
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

export default InterviewComponent;
