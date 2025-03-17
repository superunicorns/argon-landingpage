import { PiCheckBold } from "react-icons/pi";
import { GiJupiter } from "react-icons/gi";
import { FaTools } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa6";

const Features = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="my-20 px-10 text-center w-full md:w-2xl text-md md:text-lg text-slate-400">
      Argon React Native is a fully coded app template built over <span className="text-[#6772e5] font-semibold">Galio.io, React Native</span> and <span className="text-[#6772e5] font-semibold">Expo</span> to allow you to create powerful and beautiful mobile applications. You will save a lot of time going from prototyping to full-functional code, because all elements are implemented over Galio and every element has multiple states for colors, styles, hover, focus, that you can easily access and use.
      </p>
      <div className="grid px-0 md:px-10 lg:px-20 mx-auto w-full mb-30 grid-rows-1 grid-cols-1 lg:grid-rows-2 lg:grid-cols-2">
        <div className="px-4 lg:px-10 py-10 w-full flex-col text-center flex items-center justify-center lg:border-r-2 border-r-0 border-b-2 border-slate-300">
          <span className="relative p-7 my-8 size-[30px] flex items-center justify-center">
            <div className="bg-[#6772e5] absolute top-0 right-0 left-0 bottom-0 opacity-35 w-full h-full rounded-full z-10" />
            <PiCheckBold color="#6772e5" className="absolute z-20" />
          </span>
          <h3 className="text-3xl text-slate-700 mb-4">Open Source Fonts</h3>
          <p className="text-md md:text-lg text-slate-400">
            We used Google Fonts (Open Sans) for the beautiful typography inside Argon React Native.
          </p>
        </div>
        <div className="px-4 lg:px-10 py-10 w-full flex-col text-center flex items-center justify-center border-b-2 border-slate-300">
          <span className="relative p-7 my-8 size-[30px] flex items-center justify-center">
            <div className="bg-[#1aae6f] absolute top-0 right-0 left-0 bottom-0 opacity-35 w-full h-full rounded-full z-10" />
            <GiJupiter color="#1aae6f" className="absolute z-20" />
          </span>
          <h3 className="text-3xl text-slate-700 mb-4">Argon Design</h3>
          <p className="text-md md:text-lg text-slate-400">
            Argon React Native has a fresh design inspired by Argon Design System.
          </p>
        </div>
        <div className="px-4 lg:px-10 py-10 w-full flex-col text-center flex items-center justify-center lg:border-r-2 border-r-0 lg:border-b-0 border-b-2 border-slate-300">
          <span className="relative p-7 my-8 size-[30px] flex items-center justify-center">
            <div className="bg-[#ff3709] absolute top-0 right-0 left-0 bottom-0 opacity-35 w-full h-full rounded-full z-10" />
            <FaTools color="#ff3709" className="absolute z-20" />
          </span>
          <h3 className="text-3xl text-slate-700 mb-4">expo.io + iOS/Android</h3>
          <p className="text-md md:text-lg text-slate-400">
            Save time writing the code one time and it will be automatically converted to native iOS and Android code.
          </p>
        </div>
        <div className="px-4 lg:px-10 py-10 w-full flex-col text-center flex items-center justify-center">
          <span className="relative p-7 my-8 size-[30px] flex items-center justify-center">
            <div className="bg-[#03acca] absolute top-0 right-0 left-0 bottom-0 opacity-35 w-full h-full rounded-full z-10" />
            <FaDatabase color="#03acca" className="absolute z-20" />
          </span>
          <h3 className="text-3xl text-slate-700 mb-4">Documentation</h3>
          <p className="text-md md:text-lg text-slate-400">
            All components come with their own description and examples of how to use them. Please check the <span className="text-[#6772e5] font-semibold">full documentation here.</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Features;