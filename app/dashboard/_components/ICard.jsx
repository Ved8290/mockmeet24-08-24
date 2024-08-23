import React from 'react';

function ICard({ interview }) {
  return (
    <div className='border shadow-sm p-4 rounded-md'>
      <h2 className='font-bold text-lg'>{interview?.jobPosition}</h2>
      <h2 className='text-sm text-gray-600'>{interview?.jobExperience} Years of Experience</h2>
      
      <div className='mt-4 flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0'>
        <a href={`dashboard/interview/${interview?.mockID}/start`} className='w-full sm:w-auto'>
          <button
            className='w-full sm:w-auto px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300'
          >
            Reinterview
          </button>
        </a>

        <a href={`dashboard/interview/${interview?.mockID}/feedback`} className='w-full sm:w-auto'>
          <button
            className='w-full sm:w-auto px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-300'
          >
            Feedback
          </button>
        </a>
      </div>
    </div>
  );
}

export default ICard;
