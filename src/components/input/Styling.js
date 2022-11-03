import React from "react";
import {useContext} from "react";
import ThemeContext from "../../store/theme-context";
import {motion} from "framer-motion";

const Styling = () => {
  const ctx = useContext(ThemeContext);

  return (
    <div className="w-full h-full max-w-[700px] ">
      <h1 className="text-3xl text-sky-500 font-bold px-10 py-2">Theme:</h1>
      <div className="px-10 h-fit gap-2 flex flex-wrap ">
        <div className="relative flex  group h-12 sm:w-full">
          <div className="bg-[#372948] w-[50%] px-8  rounded-l-lg py-4"></div>
          <div className="bg-pink-400 w-[50%] px-8 rounded-r-lg py-4"></div>
          <button
            className="absolute left-[50%] translate-x-[-50%] translate-y-[-50%] text-md top-[50%] rounded hover:text-xl font-bold  text-white "
            onClick={() => ctx.onChangeTheme("marshmallo")}
            type="button"
          >
            Marshmallo
          </button>
        </div>
        <div className="relative flex h-12 sm:w-full">
          <div className="bg-slate-800 w-[50%] px-8 rounded-l-lg"></div>
          <div className="bg-sky-500 w-[50%] px-8 rounded-r-lg"></div>
          <button
            className="absolute left-[50%] translate-x-[-50%] translate-y-[-50%]  top-[50%] rounded font-bold hover:text-xl text-white "
            onClick={() => ctx.onChangeTheme("sky")}
            type="button"
          >
            Sky
          </button>
        </div>
        <div className="relative flex h-12 sm:w-full">
          <div className="bg-[#395144] w-[50%] px-8 rounded-l-lg"></div>
          <div className="bg-[#EABC7F] w-[50%] px-8 rounded-r-lg"></div>
          <button
            className="absolute left-[50%] translate-x-[-50%] translate-y-[-50%]  top-[50%] rounded font-bold hover:text-xl text-white "
            onClick={() => ctx.onChangeTheme("earth")}
            type="button"
          >
            Earth
          </button>
        </div>
        <div className="relative flex h-12 sm:w-full">
          <div className="bg-[#181818] w-[50%] px-8 rounded-l-lg"></div>
          <div className="bg-[#9759FF] w-[50%] px-8 rounded-r-lg"></div>
          <button
            className="absolute left-[50%] translate-x-[-50%] translate-y-[-50%]  top-[50%] rounded font-bold hover:text-xl  text-white "
            onClick={() => ctx.onChangeTheme("space")}
            type="button"
          >
            Space
          </button>
        </div>
        <div className="relative flex h-12 sm:w-full">
          <div className="bg-[#493323] w-[50%] px-8 rounded-l-lg"></div>
          <div className="bg-[#FFC996] w-[50%] px-8 rounded-r-lg"></div>
          <button
            className="absolute left-[50%] translate-x-[-50%] translate-y-[-50%]  top-[50%] rounded font-bold hover:text-xl  text-white "
            onClick={() => ctx.onChangeTheme("sunset")}
            type="button"
          >
            Desert Sunset
          </button>
        </div>
        <div className="relative flex h-12 sm:w-full">
          <div className="bg-[#203E5F]  w-[50%] px-8 rounded-l-lg"></div>
          <div className="bg-[#FFCC00] w-[50%] px-8 rounded-r-lg"></div>
          <button
            className="absolute left-[50%] translate-x-[-50%] translate-y-[-50%]  top-[50%] rounded font-bold hover:text-xl  text-white "
            onClick={() => ctx.onChangeTheme("maccabi")}
            type="button"
          >
            Maccabi
          </button>
        </div>

        <div className="relative flex h-12 sm:w-full">
          <div className="bg-[#323232] w-[50%] px-8 rounded-l-lg"></div>
          <div className="bg-[#FA5EAB] w-[50%] px-8 rounded-r-lg"></div>
          <button
            className="absolute left-[50%] translate-x-[-50%] translate-y-[-50%]  top-[50%] rounded font-bold hover:text-xl  text-white "
            onClick={() => ctx.onChangeTheme("mastik")}
            type="button"
          >
            Mastik
          </button>
        </div>
        <div className="relative flex h-12 sm:w-full">
          <div className="bg-[#DFB160] w-[50%] px-8 rounded-l-lg"></div>
          <div className="bg-[#5F093D] w-[50%] px-8 rounded-r-lg"></div>
          <button
            className="absolute left-[50%] translate-x-[-50%] translate-y-[-50%]  top-[50%] rounded font-bold hover:text-xl  text-white "
            onClick={() => ctx.onChangeTheme("royal")}
            type="button"
          >
            Lanister
          </button>
        </div>
      </div>
    </div>
  );
};
export default Styling;
