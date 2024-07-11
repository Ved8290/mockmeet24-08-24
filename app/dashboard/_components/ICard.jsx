import React from 'react'

function ICard({interview}) {
  return (
    <div className='border shadow-sm p-3'>
        <h2 className='font-bold'>{interview?.jobPosition}</h2>
        <h2 className='text-sm'>{interview?.jobExperience } Years of Experience</h2>
      
    </div>
  )
}

export default ICard
