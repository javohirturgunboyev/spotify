import React from "react";
import album from "../assets/album.png";
import folk from "../assets/folk.png"
import chilmix from "../assets/chilmix.png";
import next from "../assets/next.png";
import back from "../assets/back.png";
import pheelzmix from "../assets/Pheelzmix.png"
import indie from "../assets/Indie.png"
import popmix from "../assets/Popmix.png"
function Home() {
  return (
    <div
      className="min-h-screen bg-gradient-to-b from-blue-900 to-black"
      style={{
        background: "linear-gradient(to bottom, #1E3A8A, #000000)",
      }}
    >
      <div className="flex gap-3 pt-[50px] mb-[-30px] mx-auto ml-20">
        <img src={back} alt="" />
        <img src={next} alt="" />
      </div>
      <div className="flex px-[41px] py-[110px] flex-col">
        <div className="flex flex-col mx-auto">
          <h1 className="text-[50px] text-white">Good afternoon</h1>
          <div className="flex flex-row gap-[100px] mt-5">
            <div className="folk gap-4">
              <div className="flex bg-[#3E3E83] items-center rounded-md h-[82px] mb-[20px] w-[250px] gap-[20px]">
                <img src={folk} alt="Folk cover" />
                <h1 className="text-xl text-white">Folk & Acoustic Mix </h1>
              </div>
              <div className="flex bg-[#3E3E83] items-center rounded-md h-[82px] mb-[20px] gap-[20px]">
                <img src={album} alt="Album cover" />
                <h1 className="text-xl text-white">Daily Mix 1</h1>
              </div>
              <div className="flex bg-[#3E3E83] items-center rounded-md h-[82px] mb-[20px] w-[250px] gap-[20px]">
              <img src={folk} alt="Folk cover" />
                <h1 className="text-xl text-white">Chill Mix</h1>
              </div>
            </div>

            <div className="album">
              <div className="flex bg-[#3E3E83] items-center rounded-md h-[82px] mb-[20px] pr-[103px] gap-[20px]">
                <img src={album} alt="Album cover" />
                <h1 className="text-xl text-white">Pop Mix</h1>
              </div>
              <div className="flex bg-[#3E3E83] items-center rounded-md h-[82px] mb-[20px] pr-[103px] gap-[20px]">
              <img src={folk} alt="Folk cover" />
                <h1 className="text-xl text-white">Daily Mix 5</h1>
              </div>
              <div className="flex bg-[#3E3E83] items-center rounded-md h-[82px] mb-[20px] gap-[20px]">
                <img src={album} alt="Album cover" />
                <h1 className="text-xl text-white">Daily Mix 4</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="topMix flex flex-col mt-10">
          <div className="flex flex-row  items-center justify-between">
            <h1 className="text-3xl text-white">Your top mixes</h1>
            <button className="text-lg text-[#ADADAD]">SEE ALL</button>
          </div>
          <div className="cards flex flex-wrap mx-auto gap-5 mt-5 ">
            <div className="w-[230px] p-5 bg-[#1B1B1B] rounded-lg cursor-pointer">
              <img src={chilmix} alt="Chill Mix cover" className="rounded-lg" />
              <h1 className="text-lg font-semibold text-white mt-3">
                Chill Mix
              </h1>
              <h5 className="text-lg text-[#B3B3B3] mt-1">
                Julia Wolf, Khalid, <br /> ayokay and more
              </h5>
            </div>
            <div className="w-[230px] p-5 bg-[#1B1B1B] rounded-lg cursor-pointer">
              <img src={pheelzmix} alt="Chill Mix cover" className="rounded-lg" />
              <h1 className="text-lg font-semibold text-white mt-3">
              Pheelz Mix
              </h1>
              <h5 className="text-lg text-[#B3B3B3] mt-1">
              WizKid, Asake, Tiwa <br /> Savage and more
              </h5>
            </div>
            <div className="w-[230px] p-5 bg-[#1B1B1B] rounded-lg cursor-pointer">
              <img src={popmix} alt="Chill Mix cover" className="rounded-lg" />
              <h1 className="text-lg font-semibold text-white mt-3">
              Pop Mix
              </h1>
              <h5 className="text-lg text-[#B3B3B3] mt-1">
              Hey Violet, VÉRITÉ, <br /> Timeflies and more
              </h5>
            </div>
            <div className="w-[230px] p-5 bg-[#1B1B1B] rounded-lg cursor-pointer">
              <img src={indie} alt="Chill Mix cover" className="rounded-lg" />
              <h1 className="text-lg font-semibold text-white mt-3">
              Indie Mix
              </h1>
              <h5 className="text-lg text-[#B3B3B3] mt-1">
              Joywave, The xx, The <br /> Neighbourhood and...
              </h5>
            </div>
          </div>
        </div>
        <div className="topMix flex flex-col mt-10">
          <div className="flex flex-row  items-center justify-between">
            <h1 className="text-3xl text-white">Made for you</h1>
            <button className="text-lg text-[#ADADAD]">SEE ALL</button>
          </div>
          <div className="cards flex flex-wrap mx-auto gap-5 mt-5">
          <div className="w-[230px] p-5 bg-[#1B1B1B] rounded-lg cursor-pointer">
              <img src={indie} alt="Chill Mix cover" className="rounded-lg" />
              <h1 className="text-lg font-semibold text-white mt-3">
              Indie Mix
              </h1>
              <h5 className="text-lg text-[#B3B3B3] mt-1">
              Joywave, The xx, The <br /> Neighbourhood and...
              </h5>
            </div>
           <div className="w-[230px] p-5 bg-[#1B1B1B] rounded-lg cursor-pointer">
              <img src={popmix} alt="Chill Mix cover" className="rounded-lg" />
              <h1 className="text-lg font-semibold text-white mt-3">
              Pop Mix
              </h1>
              <h5 className="text-lg text-[#B3B3B3] mt-1">
              Hey Violet, VÉRITÉ, <br /> Timeflies and more
              </h5>
            </div>
           <div className="w-[230px] p-5 bg-[#1B1B1B] rounded-lg cursor-pointer">
              <img src={pheelzmix} alt="Chill Mix cover" className="rounded-lg" />
              <h1 className="text-lg font-semibold text-white mt-3">
              Pheelz Mix
              </h1>
              <h5 className="text-lg text-[#B3B3B3] mt-1">
              WizKid, Asake, Tiwa <br /> Savage and more
              </h5>
            </div>
            <div className="w-[230px] p-5 bg-[#1B1B1B] rounded-lg cursor-pointer">
              <img src={chilmix} alt="Chill Mix cover" className="rounded-lg" />
              <h1 className="text-lg font-semibold text-white mt-3">
                Chill Mix
              </h1>
              <h5 className="text-lg text-[#B3B3B3] mt-1">
                Julia Wolf, Khalid, <br /> ayokay and more
              </h5>
            </div>
          </div>
        </div>
        <div className="topMix flex flex-col mt-10">
          <div className="flex flex-row  items-center justify-between">
            <h1 className="text-3xl text-white">Recently played</h1>
            <button className="text-lg text-[#ADADAD]">SEE ALL</button>
          </div>
          <div className="cards flex flex-wrap mx-auto gap-5 mt-5 ">
            <div className="w-[230px] p-5 bg-[#1B1B1B] rounded-lg cursor-pointer">
              <img src={chilmix} alt="Chill Mix cover" className="rounded-lg" />
              <h1 className="text-lg font-semibold text-white mt-3">
                Chill Mix
              </h1>
              <h5 className="text-lg text-[#B3B3B3] mt-1">
                Julia Wolf, Khalid, <br /> ayokay and more
              </h5>
            </div>
            <div className="w-[230px] p-5 bg-[#1B1B1B] rounded-lg cursor-pointer">
              <img src={pheelzmix} alt="Chill Mix cover" className="rounded-lg" />
              <h1 className="text-lg font-semibold text-white mt-3">
              Pheelz Mix
              </h1>
              <h5 className="text-lg text-[#B3B3B3] mt-1">
              WizKid, Asake, Tiwa <br /> Savage and more
              </h5>
            </div>
            <div className="w-[230px] p-5 bg-[#1B1B1B] rounded-lg cursor-pointer">
              <img src={popmix} alt="Chill Mix cover" className="rounded-lg" />
              <h1 className="text-lg font-semibold text-white mt-3">
              Pop Mix
              </h1>
              <h5 className="text-lg text-[#B3B3B3] mt-1">
              Hey Violet, VÉRITÉ, <br /> Timeflies and more
              </h5>
            </div>
            <div className="w-[230px] p-5 bg-[#1B1B1B] rounded-lg cursor-pointer">
              <img src={indie} alt="Chill Mix cover" className="rounded-lg" />
              <h1 className="text-lg font-semibold text-white mt-3">
              Indie Mix
              </h1>
              <h5 className="text-lg text-[#B3B3B3] mt-1">
              Joywave, The xx, The <br /> Neighbourhood and...
              </h5>
            </div>
          </div>
        </div>
        <div className="topMix flex flex-col mt-10">
          <div className="flex flex-row  items-center justify-between">
            <h1 className="text-3xl text-white">Jump back in</h1>
            <button className="text-lg text-[#ADADAD]">SEE ALL</button>
          </div>
          <div className="cards flex flex-wrap mx-auto gap-5 mt-5">
          <div className="w-[230px] p-5 bg-[#1B1B1B] rounded-lg cursor-pointer">
              <img src={indie} alt="Chill Mix cover" className="rounded-lg" />
              <h1 className="text-lg font-semibold text-white mt-3">
              Indie Mix
              </h1>
              <h5 className="text-lg text-[#B3B3B3] mt-1">
              Joywave, The xx, The <br /> Neighbourhood and...
              </h5>
            </div>
           <div className="w-[230px] p-5 bg-[#1B1B1B] rounded-lg cursor-pointer">
              <img src={popmix} alt="Chill Mix cover" className="rounded-lg" />
              <h1 className="text-lg font-semibold text-white mt-3">
              Pop Mix
              </h1>
              <h5 className="text-lg text-[#B3B3B3] mt-1">
              Hey Violet, VÉRITÉ, <br /> Timeflies and more
              </h5>
            </div>
           <div className="w-[230px] p-5 bg-[#1B1B1B] rounded-lg cursor-pointer">
              <img src={pheelzmix} alt="Chill Mix cover" className="rounded-lg" />
              <h1 className="text-lg font-semibold text-white mt-3">
              Pheelz Mix
              </h1>
              <h5 className="text-lg text-[#B3B3B3] mt-1">
              WizKid, Asake, Tiwa <br /> Savage and more
              </h5>
            </div>
            <div className="w-[230px] p-5 bg-[#1B1B1B] rounded-lg cursor-pointer">
              <img src={chilmix} alt="Chill Mix cover" className="rounded-lg" />
              <h1 className="text-lg font-semibold text-white mt-3">
                Chill Mix
              </h1>
              <h5 className="text-lg text-[#B3B3B3] mt-1">
                Julia Wolf, Khalid, <br /> ayokay and more
              </h5>
            </div>
          </div>
        </div>
        <div className="topMix flex flex-col mt-10">
          <div className="flex flex-row  items-center justify-between">
            <h1 className="text-3xl text-white">Uniquely yours</h1>
            <button className="text-lg text-[#ADADAD]">SEE ALL</button>
          </div>
          <div className="cards flex flex-wrap mx-auto gap-5 mt-5 ">
            <div className="w-[230px] p-5 bg-[#1B1B1B] rounded-lg cursor-pointer">
              <img src={chilmix} alt="Chill Mix cover" className="rounded-lg" />
              <h1 className="text-lg font-semibold text-white mt-3">
                Chill Mix
              </h1>
              <h5 className="text-lg text-[#B3B3B3] mt-1">
                Julia Wolf, Khalid, <br /> ayokay and more
              </h5>
            </div>
            <div className="w-[230px] p-5 bg-[#1B1B1B] rounded-lg cursor-pointer">
              <img src={pheelzmix} alt="Chill Mix cover" className="rounded-lg" />
              <h1 className="text-lg font-semibold text-white mt-3">
              Pheelz Mix
              </h1>
              <h5 className="text-lg text-[#B3B3B3] mt-1">
              WizKid, Asake, Tiwa <br /> Savage and more
              </h5>
            </div>
            <div className="w-[230px] p-5 bg-[#1B1B1B] rounded-lg cursor-pointer">
              <img src={popmix} alt="Chill Mix cover" className="rounded-lg" />
              <h1 className="text-lg font-semibold text-white mt-3">
              Pop Mix
              </h1>
              <h5 className="text-lg text-[#B3B3B3] mt-1">
              Hey Violet, VÉRITÉ, <br /> Timeflies and more
              </h5>
            </div>
            <div className="w-[230px] p-5 bg-[#1B1B1B] rounded-lg cursor-pointer">
              <img src={indie} alt="Chill Mix cover" className="rounded-lg" />
              <h1 className="text-lg font-semibold text-white mt-3">
              Indie Mix
              </h1>
              <h5 className="text-lg text-[#B3B3B3] mt-1">
              Joywave, The xx, The <br /> Neighbourhood and...
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
