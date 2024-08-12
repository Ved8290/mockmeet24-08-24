"use client";
import React, { useEffect, useState } from 'react';
import { db } from '../../../../../utils/db';
import { UserAnswer } from '../../../../../utils/schema';
import { eq } from 'drizzle-orm';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../../../../../components/ui/collapsible';
import { jsPDF } from 'jspdf';

function Feedback({ params }) {
  const [feedbackList, setFeedbackList] = useState([]);
  useEffect(() => {
    GetFeedback();
  }, []);

  const GetFeedback = async () => {
    try {
      const result = await db
        .select()
        .from(UserAnswer)
        .where(eq(UserAnswer.mockIDRef, params.interviewId))
        .orderBy(UserAnswer.id);
      setFeedbackList(result);
    } catch (error) {
      console.error('Error fetching feedback:', error);
    }
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    const pageHeight = doc.internal.pageSize.height;
    let y = 20; // Initial vertical position
  
    // Add title "MockMeet" at the top
    doc.setFontSize(22);
    doc.setTextColor(0, 0, 0); // Black color
    doc.text('MockMeet', 105, y, { align: 'center' }); // Center the title
    y += 20;
  
    // Add "Interview Feedback" heading
    doc.setFontSize(16);
    doc.text('Interview Feedback', 10, y);
    y += 10;
  
    feedbackList.forEach((item, index) => {
      doc.setFontSize(12);
  
      // Handle text wrapping for long questions and answers
      const question = doc.splitTextToSize(`Question ${index + 1}: ${item.question}`, 180);
      const userAnswer = doc.splitTextToSize(`Your Answer: ${item.userAns}`, 180);
      const correctAnswer = doc.splitTextToSize(`Correct Answer: ${item.correctAns}`, 180);
      const feedback = doc.splitTextToSize(`Feedback: ${item.feedback}`, 180);
  
      // Add content and handle page overflow
      if (y + question.length * 10 > pageHeight) {
        doc.addPage();
        y = 20; // Reset y position for new page
      }
  
      // Question in bold black color
      doc.setFontSize(12);
      doc.setFont("helvetica", "bold");
      doc.setTextColor(0, 0, 0);
      doc.text(question, 10, y);
      y += question.length * 10;
  
      // Rating in green color
      doc.setFont("helvetica", "normal");
      doc.setTextColor(0, 128, 0); // Green color
      doc.text(`Rating: ${item.rating}`, 10, y);
      y += 10;
  
      // Your Answer in normal black color
      doc.setTextColor(0, 0, 0); // Black color
      doc.text(userAnswer, 10, y);
      y += userAnswer.length * 10;
  
      // Correct Answer in green color
      doc.setTextColor(0, 128, 0); // Green color
      doc.text(correctAnswer, 10, y);
      y += correctAnswer.length * 10;
  
      // Feedback in orange color
      doc.setTextColor(255, 165, 0); // Orange color
      doc.text(feedback, 10, y);
      y += feedback.length * 10;
  
      y += 5; // Space before separator line
  
      // Draw separator line after each question
      doc.setDrawColor(150); // Light gray color for the line
      doc.line(10, y, 200, y);
      y += 10; // Extra space after separator line
    });
  
    doc.save('feedback.pdf');
  };
  
  

  return (
    <div className='p-8 md:p-12 min-h-screen bg-gray-50'>
      <header className='text-center mb-12'>
        <h2 className='text-3xl font-extrabold text-green-600 mb-4'>Congratulations!</h2>
        <h3 className='text-2xl font-semibold text-gray-800 mb-2'>Here is Your Result:</h3>
        <p className='text-gray-600'>
          Below are the interview questions along with the correct answers, your answers, and feedback for improvement.
        </p>
      </header>

      <div className='space-y-4 mb-12'>
        {feedbackList.length > 0 ? (
          feedbackList.map((item, index) => (
            <Collapsible key={index} className='border border-gray-300 rounded-lg bg-white shadow-md'>
              <CollapsibleTrigger className='p-4 text-lg font-medium text-blue-600 bg-gray-200  hover:bg-gray-300 rounded-t-lg'>
                {item.question}
              </CollapsibleTrigger>
              <CollapsibleContent className='p-4'>
                <div className='space-y-4'>
                  <div className='flex flex-row  space-x-2'>
                    <span className='text-gray-700 font-semibold'>Rating:</span>
                    <span className='text-green-600 text-lg font-semibold'>{item.rating}</span>
                  </div>
                  <div className='flex flex-col space-y-1'>
                    <span className='text-gray-700 font-semibold'>Your Answer:</span>
                    <p className='text-red-600'>{item.userAns}</p>
                  </div>
                  <div className='flex flex-col space-y-1'>
                    <span className='text-gray-700 font-semibold'>Correct Answer:</span>
                    <p className='text-green-600'>{item.correctAns}</p>
                  </div>
                  <div className='flex flex-col space-y-1'>
                    <span className='text-gray-700 font-semibold'>Feedback:</span>
                    <p className='text-pink-600'>{item.feedback}</p>
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
          ))
        ) : (
          <p className='text-center text-gray-500'>No feedback available.</p>
        )}
      </div>

      <div className='flex justify-center'>
        { /* <button
          onClick={generatePDF}
          className='px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition-colors duration-300'
        >
          Download Feedback as PDF
        </button>
        */}
      </div>
    </div>
  );
}

export default Feedback;
