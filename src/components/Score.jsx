import React from 'react'

const Score = ({score}) => {
  return (
    <div className='flex flex-col p-5'>
      <h1 className='text-[50px] mx-5'>{score}</h1>
      <h4>Total Score</h4>
    </div>
  )
}

export default Score
