import React, { useState, useEffect } from 'react';
import { Lightbulb, Volume2, StopCircle } from 'lucide-react';

function QuestionSection({ mockInterviewQuestion = {}, activeQuestionIndex = 0 , mockID}) {
  const [currentIndex, setCurrentIndex] = useState(activeQuestionIndex);

  // Normalize the questions array
  const questions = Array.isArray(mockInterviewQuestion) ? mockInterviewQuestion : mockInterviewQuestion.interviewQuestions || [];

  // Sync internal state with activeQuestionIndex prop
  useEffect(() => {
    setCurrentIndex(activeQuestionIndex);
  }, [activeQuestionIndex]);

  // Function to handle text-to-speech
  const textToSpeech = (text) => {
    if ('speechSynthesis' in window) {
      const speech = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(speech);
    } else {
      alert('Sorry, your browser does not support speech synthesis.');
    }
  };

  // Function to stop any ongoing speech synthesis
  const stopSpeech = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  };

  // Handle case where activeQuestionIndex is out of bounds
  const currentQuestion = questions[currentIndex]?.question || 'No question available';

  // Move to the next question
  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Move to the previous question
  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Handle end of interview
  const handleEndInterview = () => {
    alert('The interview has ended.');
    window.location.href = `/dashboard/interview/${mockID}/feedback`;
  };

  return (
    <div className='p-4 border border-gray-200 rounded-lg'>
      {/* Question Navigation */}
    
      {/* Display Current Question */}
      <h2 className='mb-5 text-lg font-semibold'>{currentQuestion}</h2>

      {/* Action Buttons */}
      <div className='flex gap-4 mb-5'>
        <Volume2
          className='cursor-pointer'
          onClick={() => textToSpeech(currentQuestion)}
        />
        <StopCircle
          className='cursor-pointer'
          onClick={stopSpeech}
        />
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
  );
}

export default QuestionSection;
