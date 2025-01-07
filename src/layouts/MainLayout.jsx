import React from 'react'
import LeftBar from '../components/LeftBar'
import RightBar from '../components/RightBar'


function MainLayout({children}) {
  return (
    <div>
      <div className="left-bar fixed w-[310px] h-[100vh] bg-[#121212] top-0">
        <LeftBar></LeftBar>
      </div>
      <main className="main" style={{width:"calc(100vw - 620px)", margin:('0 auto')}}>
        {children}
      </main>
      <div className="right-bar fixed w-[310px] h-[100vh] bg-[#121212] top-0 right-0">
        <RightBar></RightBar>
      </div>
      
    </div>
  )
}

export default MainLayout
