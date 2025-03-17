import { BiSolidLike } from "react-icons/bi";
import { RiChatFollowUpFill } from "react-icons/ri";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router";
import "../App.css";

const Header = ({ headerRef }) => {
  return (
    <header ref={headerRef} className="relative w-screen h-screen -mt-[40px]">
    <section className="section h-full w-full py-4 lg:py-6 section-shaped pb-[100px]">
      <div className="shape section-shaped shape-style-1 shape-default">
        <span id="span-opacity-1"></span>
        <span id="span-opacity-1"></span>
        <span id="span-opacity-3"></span>
        <span id="span-opacity-2"></span>
        <span id="span-opacity-0"></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="max-w-5xl mt-10 px-4 py-6 mx-auto flex w-full h-full flex items-center justify-between">
        <div className="flex flex-col flex-1">
          <div className="flex w-full flex-col justify-center items-start">
          <img src="/assets/white.png" className="mb-4" width={200} height="auto" alt="argon logo"  />
          <div className="flex justify-center items-center h-[110px] w-full bg-black py-1 px-2 rounded-sm">
            <Link to="/" id="bg-clip" className="text-4xl sm:text-5xl md:text-7xl text-center text-white font-black inline-block text-gradient"><span>React Native</span></Link> 
          </div>  
          <div className="mt-10">
            <p className="text-xl md:text-3xl text-white">
              Start your development with a beautiful open source Design System for React Native.
            </p>
          </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 mt-10 md:mt-20">
            <button type="button" className="mx-auto md:mx-0 flex py-1 px-4 bg-[#4267b2] gap-2 items-center text-white text-sm font-bold rounded-sm bg-cyan-500 shadow-lg shadow-[#555abf]/50">
            <BiSolidLike size={25} color="#fff" />
              Me gusta
            </button>
            <button type="button" className="mx-auto md:mx-0 flex py-1 px-4 bg-black gap-2 items-center text-white text-sm font-semibold rounded-full shadow-lg shadow-[#555abf]/50">
            <RiChatFollowUpFill size={25} color="#fff" />
              Follow
            </button>
            <button type="button" className="mx-auto md:mx-0 flex bg-gray-200 inset-shadow-sm inset-shadow-black/50 gap-2 items-center text-black font-semibold rounded-sm shadow-lg shadow-[#555abf]/50">
            <span className="flex items-center py-1 px-4 gap-2 h-full w-full text-sm">
              <FaRegStar size={25} color="#000" />
              Star
            <span class="h-full bg-gray-400 w-[2px] mx-1" />
            </span>
            <span className="text-sm py-1 pr-4 text-black font-black -ml-4">638</span>
            </button>
          </div>
        </div>
        <div className="hidden lg:flex justify-center items-center flex-1">
          <div className="flex justify-center items-center ml-20 relative w-full h-[500px]">
            <img src="./assets/mobile-1.png" width="auto" height={500} className="absolute right-0 translate-x-[30%]" alt="phone first"  />
            <img src="./assets/mobile-2.png" width="auto" height={500} className="absolute z-30 right-0 -translate-x-[40%]" alt="phone second" />
          </div>
        </div>
      </div>
    </section>
   </header>
  )
}

export default Header