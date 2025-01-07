import React from "react";
import likedSong from "../assets/likedSong.png";
// import MusicList from "../components/MusicList";
import Header from "../components/Header";
import search from "../assets/Search_S.png"
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
            {/* <img src={playGreen} alt="" className="object-cover" />
            <img src={heart} width={80} alt="" className="object-cover" />
            <img src={download} alt="" width={80} className="object-cover" />
            <img src={options} alt="" width={80} className="object-cover" /> */}
          </div>
          <div>
            {/* <div className="flex gap-[30px]">
              <img
                src={search}
                alt=""
                className="object-cover w-[50px] h-[50px]"
              />
              <select
                name=""
                id=""
                className="border-none text-2xl items-center bg-transparent text-white"
              >
                <option value="custom">Custom order</option>
              </select>
            </div> */}
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
          <tbody>
          {/* {songs.map((song, index) => (
            <tr
              key={song.id}
              className="hover:bg-gray-800 transition-colors cursor-pointer"
            >
              <td className="py-3 text-gray-50">{index + 1}</td>
              <td className="py-3">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-700 rounded mr-4"></div>
                  <div>
                    <p className="text-white">{song.title}</p>
                    <p className="text-sm text-gray-400">{song.artist}</p>
                  </div>
                </div>
              </td>
              <td className="py-3 text-gray-400">{song.album}</td>
              <td className="py-3">{song.duration}</td>
            </tr>
          ))} */}
        </tbody>
        </table>
        {/* <MusicList></MusicList> */}
      </div>
    </div>
  );
}

export default Like;
