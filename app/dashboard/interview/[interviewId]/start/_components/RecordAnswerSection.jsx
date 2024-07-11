"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Webcam from "react-webcam";
import { Button } from '../../../../../../components/ui/button';
import useSpeechToText from 'react-hook-speech-to-text';
import { Mic } from 'lucide-react';
import { toast } from 'sonner';
import { chatSession } from '../../../../../../utils/GeminiAIModel';
import { UserAnswer } from '../../../../../../utils/schema';
import moment from 'moment';
import { useUser } from '@clerk/nextjs';
import { db } from '../../../../../../utils/db';
import mockInterviewQuestion from '../page'
import activeQuestionIndex from '../page'
import interviewData from '../page'
import questionwithindex from '../page'
import { Textarea } from '../../../../../../components/ui/textarea';
import { Label } from '../../../../../../components/ui/label';



function RecordAnswerSection({mockInterviewQuestion,activeQuestionIndex , interviewData , questionwithindex , prev}) {
    const [userAnswer,setUserAnswer]=useState();
    const {user}=useUser();
    const [loading,setLoading]=useState(false)
   
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

      useEffect(()=>{
        results.map((result)=>(
            setUserAnswer(prevAns=>prevAns+result?.transcript)
        ))

      },[results])

      // useEffect(()=>{
       
      //   UpadateUserAnswer();
          
      // },[userAnswer])

      const StartStopRecording=async()=>{
        if(isRecording){
          
          stopSpeechToText()
         
        }else{
          startSpeechToText()
        }

      }

    const UpadateUserAnswer=async()=>{
      console.log(userAnswer);
      setLoading(true);
    
      const feedbackPromt="Question :"+mockInterviewQuestion[activeQuestionIndex]?.question+" , User Answer :"+userAnswer+" ,Depend onquestion and user answer for  given interview question "+
      " please give us rating for answer and feedback as area of improment if any "+
       " in just 3 to 5 lines to improve it in JSON format. with rating field and feedback filed :(please give all text inside json form only . wrrap all text in json form only)";

       console.log(feedbackPromt);
       console.log("question"+questionwithindex);

      const result=await chatSession.sendMessage(feedbackPromt);
     

      const mockJsonResp=(result.response.text()).replace('```json','').replace('```','')
      console.log(mockJsonResp)
      const JsonFeedbackResp=JSON.parse(mockJsonResp);
      const feedbackvar=JsonFeedbackResp?.feedback;
      console.log(feedbackvar);

      const resp=await db.insert(UserAnswer)
      .values({
        mockIDRef:interviewData?.mockID,
        question:mockInterviewQuestion[activeQuestionIndex]?.question,
        correctAns:mockInterviewQuestion[activeQuestionIndex]?.answer,
        userAns:userAnswer,
        feedback:JsonFeedbackResp?.feedback,
        rating:JsonFeedbackResp?.rating,
        userEmail:user?.primaryEmailAddress?.emailAddress,
        creadtedAt:moment().format('DD-MM-YYYY')
      })

      if(resp){
        toast('User Answer recorded Successfully')
        setUserAnswer('');
        setResults([]);
      }
      setResults([]);
      
      setLoading(false);
    } 

  return(
    <div className='flex item-center justify-center flex-col'>
    <div className='flex flex-col justify-center item-center rounded-lg p-5 my-20'>
        
        
          <Webcam 
      mirrored={true}/>

    </div>
      <div> 
      <div className="grid w-full gap-1.5">
      <Label htmlFor="userAnswer">Your Answer</Label>
      <Textarea placeholder="Edit Or Re-Write your Answer" id="userAnswer" onChange={(e)=>{setUserAnswer(e.target.value)}} />
    </div>
     </div>
        <Button 
      //disabled={loading}
        variant="outline" className='my-10 bg-indigo-700'  onClick={StartStopRecording}  >
    
        {isRecording?
       <h2 className='text-red-600 flex gap-2'>
       <Mic /> Stop Recording.....
       </h2>

        :
         'Record Answer' }
         </Button>
      <Button onClick={UpadateUserAnswer}>  Save Answer </Button>
      
    </div>
  
        
)
}

export default RecordAnswerSection
