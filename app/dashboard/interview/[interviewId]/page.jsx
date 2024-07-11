"use client";
import React, { useEffect, useState } from "react";
import { aiInterview, mockID } from "../../../../utils/schema";
import { db } from "../../../../utils/db.js";
import { eq } from "drizzle-orm";
import Webcam from "react-webcam";
import { Lightbulb, WebcamIcon } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import Link from "next/link";

function Interview({ params }) {
  const [interviewData, setInterviewData] = useState();
  const [webCamEnabled, setWebCamEnabled] = useState(false);
  const [jobposition, setJobPosition] = useState();
  const [jobDesc, setJobDesc] = useState();
  const [jobExperience, setJobExpirience] = useState();
  useEffect(() => {
    GetInterviewDetails();
  }, []);

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
  };

  return (
    <div className="my-10 flex justify-center flex-col items-center">
      <h2 className="font-bold text-2xl">Let's Get Started</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

      <div className="flex flex-col my-5 gap-5 ">
            <div className=" flex flex-col p-5 rounded-lg border">
              <h2 className="text-lg">
                <strong> Job Role/Position:</strong>
                {jobposition}
              </h2>
              <h2 className="text-lg">
                <strong> Job Description:</strong>
                {jobDesc}
              </h2>
              <h2 className="text-lg">
                <strong> Years of Experience:</strong>
                {jobExperience}
              </h2>
            </div>
          


         <div className='p-5 border rounded-lg border-yellow-300 bg-yellow-100'>

          <h2 className='flex gap-2 item-center text-yellow-300'><Lightbulb /> <span> Information</span></h2>
          <p>{process.env.NEXT_PUBLIC_INFO}</p>
         </div>


         </div>
        <div>
          {webCamEnabled ? (
            <>
              <Webcam
                onUserMedia={() => setWebCamEnabled(true)}
                onUserMediaError={() => setWebCamEnabled(false)}
                mirrored={true}
              />
              <Button onClick={() => setWebCamEnabled(false)}>
                {" "}
                Disable WebCam and mic{" "}
              </Button>
            </>
          ) : (
            <>
              <WebcamIcon className="h-78 w-full p-20  rounded-lg border " />
              <Button variant="ghost" className="w-full" onClick={() => setWebCamEnabled(true)}>
                {" "}
                Enable WebCam and mic{" "}
              </Button>
            </>
          )}
        </div>
        
      </div>
      <Link href={'/dashboard/interview/'+params.interviewId+'/start'}>
            <Button>Start Interview</Button>
        </Link>
    </div>
  );
}

export default Interview;
