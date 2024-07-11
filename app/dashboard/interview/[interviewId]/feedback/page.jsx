"use client"
import React, { useEffect, useState } from 'react';
import { db } from '../../../../../utils/db';
import { UserAnswer } from '../../../../../utils/schema';
import { eq } from 'drizzle-orm';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '../../../../../components/ui/collapsible';

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
      console.log(result); // Check the fetched data in console
    } catch (error) {
      console.error('Error fetching feedback:', error);
    }
  };

  return (
    <div className='p-10'>

      <h2 className='text-3xl font-bold text-green-500'>Congratulation...!</h2>
      <h2 className='font-bold text-2xl'>Here is your Result :</h2>
     
      <h2 className='text-sm text-gray-500'>
        Find Below interview question with correct answer, your answer and feedback for improvement
      </h2>

      {feedbackList.length > 0 &&
        feedbackList.map((item, index) => (
          <Collapsible key={index}>
            <CollapsibleTrigger>{item.question}</CollapsibleTrigger>
            <CollapsibleContent>
              <div>
                <h2>
                  <strong>Rating:</strong> {item.rating}
                </h2>
                <h2 className='text-red-400'><strong>Your Answer:</strong>{item.userAns}</h2>
                <h2 className='text-green-600'><strong>Correct Answer:</strong> {item.correctAns}</h2>
                <h2 className='text-pink-600'><strong>FeedBack:</strong> {item.feedback}</h2>
              </div>
            </CollapsibleContent>
          </Collapsible>
        ))}


    </div>
  );
}

export default Feedback;
