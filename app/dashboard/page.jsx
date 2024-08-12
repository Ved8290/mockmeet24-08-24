import { UserButton } from "@clerk/nextjs";
import React from "react";
import AddNewInterview from "../dashboard/_components/AddNewInterview";
import InterviewList from "../dashboard/_components/InterviewList.jsx";

function Dashboard() {
    return (
        <div className="p-10">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className='font-bold text-2xl'>Dashboard</h2>
                    <h2 className="text-gray-500">Create And Start Your AI Mock Interview</h2>
                </div>
              
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 my-5">
                <AddNewInterview />
            </div>

            <InterviewList />
        </div>
    )
}

export default Dashboard;
