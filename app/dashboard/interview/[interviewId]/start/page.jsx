"use client";
import React, { useEffect, useState } from "react";
import { aiInterview, mockID } from "../../../../../utils/schema";
import { db } from "../../../../../utils/db.js";
import { eq } from "drizzle-orm";
import Link from "next/link";
import QuestionSection from '../start/_components/QuestionSection'
import RecordAnswerSection from '../start/_components/RecordAnswerSection'
import { Button } from "../../../../../components/ui/button";

function StartInterview({params}) {
  const [interviewData, setInterviewData] = useState();
  const [webCamEnabled, setWebCamEnabled] = useState(false);
  const [jobposition, setJobPosition] = useState();
  const [jobDesc, setJobDesc] = useState();
  const [jobExperience, setJobExpirience] = useState();
  const [mockInterviewQuestion,setMockInterviewQuestion]=useState();
  const [activeQuestionIndex,setACtiveQuestionIndex]=useState(0);
  const [questionwithindex,setQuestionwithindex]=useState();
        useEffect(()=>{
            GetInterviewDetails();
        },[])
    const GetInterviewDetails = async () => {
        
        // calling interview details from database
        const result = await db
          .select()
          .from(aiInterview)
          .where(eq(aiInterview.mockID, params.interviewId));
        setInterviewData(result[0]);
        setJobDesc(result[0].jobDesc);
        setJobPosition(result[0].jobPosition);
        setJobExpirience(result[0].jobExperience);
        const json=(result[0].jsonAIResp)
       const jsonMockResp=JSON.parse(json);
        setMockInterviewQuestion(jsonMockResp);
        console.log(jsonMockResp);
        setQuestionwithindex(jsonMockResp[activeQuestionIndex]);

      };
      const prev=()=>{
        setACtiveQuestionIndex(activeQuestionIndex-1)
       
      }
      const next=()=>{
       setACtiveQuestionIndex(activeQuestionIndex+1)
      }
  return (
    <div>
    {activeQuestionIndex>0&&<Button onClick={prev}> previous Question </Button>
  }
     {activeQuestionIndex!=mockInterviewQuestion?.length-1&&<Button  onClick={next}> Next Question </Button>}
    {activeQuestionIndex==mockInterviewQuestion?.length-1&&
    <Link href={'/dashboard/interview/'+interviewData?.mockID+'/feedback'}>
      <Button>End Interview</Button> </Link>
    }
      <div className='grid grid-colzs-1 md:grid-cols-2 gap-10'>
    {/* Questions  */}   

  
    <QuestionSection mockInterviewQuestion={mockInterviewQuestion} 
        activeQuestionIndex={activeQuestionIndex} />
    {/* video / audio recording */}
    <RecordAnswerSection  mockInterviewQuestion={mockInterviewQuestion} 
   
        activeQuestionIndex={activeQuestionIndex}  interviewData={interviewData} questionwithindex={questionwithindex} />
     </div>
    
    </div>
    
  )
}

export default StartInterview
