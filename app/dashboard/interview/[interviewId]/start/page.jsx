"use client";
import React, { useEffect, useState } from "react";
import { aiInterview } from "../../../../../utils/schema";
import { db } from "../../../../../utils/db.js";
import { eq } from "drizzle-orm";
import QuestionSection from '../start/_components/QuestionSection';
import RecordAnswerSection from '../start/_components/RecordAnswerSection';
import { Button } from "../../../../../components/ui/button";

function StartInterview({ params }) {
  const [interviewData, setInterviewData] = useState();
  const [jobPosition, setJobPosition] = useState();
  const [jobDesc, setJobDesc] = useState();
  const [jobExperience, setJobExperience] = useState();
  const [mockInterviewQuestion, setMockInterviewQuestion] = useState([]);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [mockID,setMockID] =useState('');

  useEffect(() => {
    GetInterviewDetails();
  }, []);

  const GetInterviewDetails = async () => {
    // Fetch interview details from database
    const result = await db
      .select()
      .from(aiInterview)
      .where(eq(aiInterview.mockID, params.interviewId));
    setInterviewData(result[0]);
    setJobDesc(result[0].jobDesc);
    setJobPosition(result[0].jobPosition);
    setJobExperience(result[0].jobExperience);
    const json = result[0].jsonAIResp;
    const jsonMockResp = JSON.parse(json);
    setMockInterviewQuestion(jsonMockResp);
     setMockID(result[0].mockID);
     console.log(result[0]);
  };

  const handlePrevious = () => {
    if (activeQuestionIndex > 0) {
      setActiveQuestionIndex(activeQuestionIndex - 1);
    }
  };

  const handleNext = () => {
    if (activeQuestionIndex < mockInterviewQuestion.length - 1) {
      setActiveQuestionIndex(activeQuestionIndex + 1);
    }
  };

  const handleEndInterview = () => {
    alert('The interview has ended.');
    // Add any additional logic for ending the interview if necessary
  };

  return (
    <div className="p-4">
      {/* Navigation Indicators */}
      <div className="mb-4">
        {mockInterviewQuestion.map((_, index) => (
          <Button
            key={index}
            onClick={() => setActiveQuestionIndex(index)}
            className={`mr-2 px-3 py-1 rounded-lg hover:bg-indigo-200 ${activeQuestionIndex === index ? 'bg-blue-500 text-white ' : 'bg-gray-300 text-black'}`}
          >
            {index + 1}
          </Button>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center mb-6">
        <Button
          onClick={handlePrevious}
          disabled={activeQuestionIndex === 0}
          className='bg-blue-500 text-white rounded-lg px-4 py-2 disabled:opacity-50'
        >
          Previous
        </Button>
        <Button
          onClick={handleNext}
          disabled={activeQuestionIndex === mockInterviewQuestion.length - 1}
          className='bg-blue-500 text-white rounded-lg px-4 py-2 disabled:opacity-50'
        >
          Next
        </Button>
      </div>

      {/* Question and Answer Sections */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        <QuestionSection 
          mockInterviewQuestion={mockInterviewQuestion} 
          activeQuestionIndex={activeQuestionIndex} mockID={mockID}
        />
        <RecordAnswerSection 
          mockInterviewQuestion={mockInterviewQuestion} 
          activeQuestionIndex={activeQuestionIndex} 
          interviewData={interviewData} 
        />
      </div>

    
    </div>
  );
}

export default StartInterview;
