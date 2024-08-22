"use client"
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '../../../components/ui/dialog';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { Textarea } from '../../../components/ui/textarea';
import { chatSession } from '../../../utils/GeminiAIModel';
import { LoaderCircleIcon } from 'lucide-react';
import { useUser } from '@clerk/nextjs';
import moment from 'moment';
import { db } from '../../../utils/db';
import { aiInterview } from '../../../utils/schema';
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/navigation';

function AddNewInterview() {
  const [openDialog, setOpenDialog] = useState(false);
  const [jobPosition, setJobPosition] = useState('');
  const [jobDes, setJobDes] = useState('');
  const [jobExperience, setJobExperience] = useState('');
  const [numQuestions, setNumQuestions] = useState(process.env.NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT);
  const [loading, setLoading] = useState(false);
  const [jsonResponse, setJsonResponse] = useState([]);
  const router = useRouter();
  const { user } = useUser();

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const inputPrompt = `
      You are an AI specialized in generating interview questions.
      Based on the following details, generate a list of interview questions and answers in JSON format:
      - Job Position: ${jobPosition}
      - Job Description: ${jobDes}
      - Years of Experience: ${jobExperience}
      - Number of Questions: ${numQuestions}

      Provide the output in JSON format only. Do not include any text outside the JSON.
    `;
  

    try {
      const result = await chatSession.sendMessage(inputPrompt);
      const mockJsonResp = (result.response.text()).replace('```json', '').replace('```', '');
      console.log(mockJsonResp);
      setJsonResponse(mockJsonResp);

      if (mockJsonResp) {
        const resp = await db.insert(aiInterview).values({
          mockID: uuidv4(),
          jsonAIResp: mockJsonResp,
          jobPosition: jobPosition,
          jobDesc: jobDes,
          jobExperience: jobExperience,
          createdBy: user?.primaryEmailAddress?.emailAddress,
          createdAt: moment().format('DD-MM-YYYY')
        }).returning({ mockId: aiInterview.mockID });

        if (resp) {
          setOpenDialog(false);
          router.push('/dashboard/interview/' + resp[0]?.mockId);
        }
      } else {
        
      }
    } catch (error) {
      
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className='p-10 border rounded-lg bg-secondary hover:scale-105 hover:shadow-md transition-all cursor-pointer' onClick={() => setOpenDialog(true)}>
        <h2 className='text-lg font-semibold'>+ Add New</h2>
      </div>

      <Dialog open={openDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-2xl">Tell us more about your job interview</DialogTitle>
            <DialogDescription>
              <form onSubmit={onSubmit} className='space-y-6'>
                <div>
                  <h3 className='text-lg font-medium'>Add Details about the Job Position / Role</h3>
                  <div className='mt-4'>
                    <label className='block text-sm font-medium'>Job Role / Job Position</label>
                    <Input placeholder='e.g., Web Developer' required onChange={(e) => setJobPosition(e.target.value)} />
                  </div>

                  <div className='mt-4'>
                    <label className='block text-sm font-medium'>Job Description</label>
                    <Textarea placeholder='e.g., Tech Stack - React, Angular, NodeJS' required onChange={(e) => setJobDes(e.target.value)} />
                  </div>

                  <div className='mt-4'>
                    <label className='block text-sm font-medium'>Years of Experience</label>
                    <Input placeholder='e.g., 2' type='number' required max='40' onChange={(e) => setJobExperience(e.target.value)} />
                  </div>

                  <div className='mt-4'>
                    <label className='block text-sm font-medium'>Number of Questions</label>
                    <Input placeholder='e.g., 5' type='number' min='1' required value={numQuestions} onChange={(e) => setNumQuestions(e.target.value)} />
                  </div>
                </div>

                <div className='flex gap-4 justify-end'>
                  <Button type='button' variant='ghost' onClick={() => setOpenDialog(false)}>Cancel</Button>
                  <Button type='submit' disabled={loading}>
                    {loading ? (
                      <>
                        <LoaderCircleIcon className='animate-spin' /> Generating...
                      </>
                    ) : (
                      'Start Interview'
                    )}
                  </Button>
                </div>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddNewInterview;
