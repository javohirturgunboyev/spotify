import React from 'react'

import chilMix from '../assets/chilmix.png'
import Header from '../components/Header'

function Playlist() {
  return (
    <div className='min-h-screen bg-gradient-to-b px-[41px] py-[108px] from-[#DDF628] to-black'>
      <Header/>
      <div className='flex gap-[32px] flex-row'>
        <img src={chilMix} alt="" width={297}height={297} className='object-cover'/>
        <div className='info mt-[30px]'>
          <h1 className='text-[16px] font-medium text-white'>PUBLIC PLAYLIST</h1>
          <h1 className='text-[122px] font-black text-white'>Chill Mix</h1>
          <p className='text-xl font-[450] text-white'>Julia Wolf, ayokay, Khalid <span className='text-gray-400'>and more</span></p>
          <p className='text-xl font-[450] text-gray-400'>Made for <span className='text-white'>davedirect3</span> 34 songs, 2hr 01 min</p>
        </div>
      </div>

    </div>
  )
}

export default Playlist
