import React from "react";
import likedSong from "../assets/likedSong.png";

import Header from "../components/Header";

import time from "../assets/time.png"
function Like() {
  return (
    <div className=" min-h-screen flex flex-col bg-gradient-to-b px-[41px] py-[108px] from-blue-900 to-black">
      <Header></Header>
      <div className="mx-auto">
        <div className="likeMusic gap-[32px] flex flex-row items-center">
          <img src={likedSong} width={550} height={297} alt="" />
          <div className="info mt-[90px]">
            <h1 className="text-lg text-white font-medium">
              PUBLIC
              <br />
              PLAYLIST
            </h1>
            <h1 className="text-[72px] font-black text-white">Liked Songs</h1>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row gap-[50px] mt-[31px]">
          
          </div>
          <div>
            
          </div>
        </div>
        <table className="table-auto w-full">
          <thead>
            <tr className="border-b border-gray-700 text-left text-gray-400">
              <th className="py-2">#</th>
              <th className="py-2">TITLE</th>
              <th className="py-2">ALBUM</th>
              <th className="py-2">DATE ADDED</th>
              <th className="py-2">
                <img src={time} alt="" />
              </th>
            </tr>
          </thead>
         
        </table>
       
      </div>
    </div>
  );
}

export default Like;
