import React from 'react'
import { BarLoader, BeatLoader } from 'react-spinners'

const Loading = () => {
  return (
    <div className='flex items-center justify-center min-h-screen bg-[#0b0b0c]'>
        <BeatLoader color='#fff' />
    </div>
  )
}

export default Loading