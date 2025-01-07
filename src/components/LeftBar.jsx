import React from "react";
import home from '../assets/home.png'
import libarary from '../assets/libarary.png'
import substrack from '../assets/Subtract.png'
import LikedSong from '../assets/Liked_Songs_S.png'
import Search from '../assets/Search_S.png'
import { useNavigate } from "react-router-dom";


function LightBar() {
  const navigate = useNavigate()
  function handleHome(){
    navigate('/')
  }
  function handleLike (){
    navigate('/like')
  }
  return (
    <div className="px-[30px]">
      <div className="">
        <div className="flex flex-row gap-6 mt-[50px] items-center ">
          <img className=" mt-10"  src={home} width={25} height={25} alt="" />
          <h1 className="text-lg font-bold text-gray-400  mt-10 cursor-pointer" onClick={handleHome}>Home</h1>
        </div>
        <div className="flex flex-row gap-6 items-center">
          <img  className=" mt-10" src={Search} width={25} height={25} alt="" />
          <h1 className="text-lg font-bold text-gray-400 mt-10">Search</h1>
        </div>
        <div className="flex flex-row gap-6 items-center">
          <img  className=" mt-10" src={libarary} width={25} height={25} alt="" />
          <h1 className="text-lg font-bold text-gray-400 mt-10">Your Library</h1>
        </div>
      </div>
      <div className="mt-[25px] mb-[15px]">
        <div className="flex flex-row gap-6 items-center">
          <img className="mt-10" src={substrack} alt="" />
          <h1 className="text-lg font-bold text-gray-400 mt-10">Creat Playlist</h1>
        </div>
        <div className="flex flex-row gap-6 items-center">
          <img className="mt-10" src={LikedSong} alt="" />
          <h1 className="text-lg font-bold text-gray-400 mt-10 cursor-pointer" onClick={handleLike}>Liked Songs</h1>
        </div>
      </div>
      <hr className="text-[#282828]" />
      <div className="playlist mt-[20px]">
        <h1 className="text-lg text-[#B3B3B3] cursor-pointe mt-3 hover:text-white cursor-pointer">Chill Mix</h1>
        <h1 className="text-lg text-[#B3B3B3] cursor-pointe mt-3 hover:text-white cursor-pointer">Insta Hits</h1>
        <h1 className="text-lg text-[#B3B3B3] cursor-pointe mt-3 hover:text-white cursor-pointer">Your Top Songs 2021</h1>
        <h1 className="text-lg text-[#B3B3B3] cursor-pointe mt-3 hover:text-white cursor-pointer">Mellow Songs</h1>
        <h1 className="text-lg text-[#B3B3B3] cursor-pointe mt-3 hover:text-white cursor-pointer">Anime Lofi & Chilhop Music</h1>
        <h1 className="text-lg text-[#B3B3B3] cursor-pointe mt-3 hover:text-white cursor-pointer">BG Afro “Select” Vibes</h1>
        <h1 className="text-lg text-[#B3B3B3] cursor-pointe mt-3 hover:text-white cursor-pointer">Afro “Select” Vibes</h1>
        <h1 className="text-lg text-[#B3B3B3] cursor-pointe mt-3 hover:text-white cursor-pointer">Happy Hits!</h1>
        <h1 className="text-lg text-[#B3B3B3] cursor-pointe mt-3 hover:text-white cursor-pointer">Deep Focus</h1>
        <h1 className="text-lg text-[#B3B3B3] cursor-pointe mt-3 hover:text-white cursor-pointer">Instrumental Study</h1>
        <h1 className="text-lg text-[#B3B3B3] cursor-pointe mt-3 hover:text-white cursor-pointer">OST Compilations</h1>
        <h1 className="text-lg text-[#B3B3B3] cursor-pointe mt-3 hover:text-white cursor-pointer">Nostalgia for old souled mill...</h1>
        <h1 className="text-lg text-[#B3B3B3] cursor-pointe mt-3 hover:text-white cursor-pointer">Mixed Feelings</h1>
      </div>
     
    </div>
  );
}

export default LightBar;
