import React from 'react'
import next from '../assets/next.png'
import back from '../assets/back.png'

function Header() {
  return (
    <div>
      <div className='flex flex-row mt-[-90px] mb-[50px] gap-3'>
        <img src={back} alt="" />
        <img src={next} alt="" />
      </div>
    </div>
  )
}

export default Header
