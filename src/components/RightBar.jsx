import React from 'react'

import userBlue from '../assets/userBlue.png'
import skeleton from '../assets/skeleton.png'

function RightBar() {
  return (
    <div className='px-5 py-[30px]'>
      <header className='flex flex-row justify-between '>
        <h1 className='text-[#CCCCCC] text-xl'>Friend Activity</h1>
        <div className='flex flex-row gap-5'>
           
            <p className='cursor-pointer '>👤</p>
            <p className='cursor-pointer'>✖️</p>

        </div>
      </header>
      <h1 className='text-[#CCCCCC] mt-[39px]'>
      Let friends and followers on Spotify see what you’re listening to.
      </h1>
      <div className='mt-5'>
        <div className='flex gap-2 mb-5'>
            <img src={userBlue} width={62} height={62} alt="" />
            <img src={skeleton} width={102} height={42} alt="" />
        </div>
        <div className='flex gap-2 mb-5'>
            <img src={userBlue} width={62} height={62} alt="" />
            <img src={skeleton} width={102} height={42} alt="" />
        </div>
        <div className='flex gap-2 mb-5'>
            <img src={userBlue} width={62} height={62} alt="" />
            <img src={skeleton} width={102} height={42} alt="" />
        </div>
      </div>
      <h1 className='text-[#CCCCCC] text-lg mb-5'>Go to Settings  Social and enable “Share my listening activity on Spotify.’ You can turn this off at any time.</h1>
      <button className='bg-white w-[233px] h-[62px0] rounded-[40px] py-[12px] px-8 text-lg'>Settings</button>
    </div>
  )
}

export default RightBar
