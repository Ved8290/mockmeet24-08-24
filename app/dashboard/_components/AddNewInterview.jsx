"use client"
import React  , {useState}from 'react' 
import { Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
   } from '../../../components/ui/dialog'
import { Button } from '../../../components/ui/button'
import { Input } from '../../../components/ui/input'
import { Textarea } from '../../../components/ui/textarea'
import { chatSession } from '../../../utils/GeminiAIModel'
import {  LoaderCircleIcon } from 'lucide-react'
import { useUser } from '@clerk/nextjs'
import moment from 'moment'
import {db } from '../../../utils/db'
import {aiInterview} from '../../../utils/schema'
import { v4 as uuidv4 } from 'uuid'
import { useRouter } from 'next/navigation'


function AddNewInterview() {
   const [openDialog,setOpenDialog]= useState(false)
   const [jobPosition,setJobPositioin]=useState()
   const [jobDes,setJobDes]=useState()
   const [jobExpirience,setJobExpirience]=useState()
   const [loading,setLoading]=useState(false)
   const [JsonResponse,setJsonResponse]=useState([]);
   const router=useRouter();
   const {user}=useUser();

  const onSubmit=async(e)=>{
  setLoading(true)
  e.preventDefault();
   
  const InputPrompt="Job Position:"+jobPosition +", Job Description :"+jobDes+" , Years of Expirence :"+jobExpirience+", Depends on Job Position , job description , years of expirience give us "+ process.env.NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT +" Interview question along with Answer in JSON form (please give all information in JSON form only . do not give any text outside json form ) : ";
  console.log(InputPrompt)
  const result=await chatSession.sendMessage(InputPrompt);
  
   const MockJsonResp=(result.response.text()).replace('```json','').replace('```','')
   console.log(MockJsonResp)
   setJsonResponse(MockJsonResp);

    if (MockJsonResp)
      {
    const resp=await db.insert(aiInterview)
    .values({
      mockID:uuidv4(),
      jsonAIResp:MockJsonResp,
      jobPosition:jobPosition,
      jobDesc:jobDes,
      jobExperience:jobExpirience,
      createdBy:user?.primaryEmailAddress?.emailAddress,
      createdAt:moment().format('DD-MM-YYYY')
    }).returning({mockId:aiInterview.mockID});

    
    if(resp){
        setOpenDialog(false);
        router.push('/dashboard/interview/'+resp[0]?.mockId)
    }
    }
    else{
      console.log(".......ERRRORRRR.......");
    }
    setLoading(false);
    
   }

  return (
    <div>
     <div className='p-10 border rounded-10 bg-secondary hover:scale-105 hover:shadow-md transition-all' onClick={()=>setOpenDialog(true)}>
        <h2 className=' text-lg'>+Add New</h2>
     </div>

     <Dialog open={openDialog}>
  
  <DialogContent>
    <DialogHeader>
      <DialogTitle className="text-2xl">Tell us more about your job interview</DialogTitle>
      <DialogDescription>
        <form onSubmit={onSubmit}>
        <div>

        <h2> Add Details about your job possition / role </h2>
        <div className='m-7 my-4'>
          <label>Job role/Job Possition</label>
          <Input placeholder='Ex. Web Devloper' required  onChange={(e)=>setJobPositioin(e.target.value)} />

        </div>

        <div className='m-7 my-3'>
          <label>Job Description</label>
          <Textarea placeholder='Ex. Tech Stack- React , Angular ,NodeJS'  required onChange={(e)=>setJobDes(e.target.value)} />

        </div>

        <div className='m-7 my-3'>
          <label>Years of Experience</label>
          <Input placeholder='EX.2'  type='number' required max='40' onChange={(e)=>setJobExpirience(e.target.value)} />

        </div>


        </div>
        <div className='flex gap-5 justify-end'>
        <Button type='button' variant='ghost' onClick={()=>setOpenDialog(false)}> Cancel </Button>
        <Button type='submit' disabled={loading}> 
        {loading? 
        <>
        <LoaderCircleIcon className='animate-spin' />'Generating from AI'
        </>
        :'Start Interview'
        }
         </Button>

        </div>
        </form>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>


    </div>
  )
}

export default AddNewInterview
