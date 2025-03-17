import { IoMdMenu } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import "../App.css";

export const Navbackground = ({opacity}) => {
  return <div id="nav-bg" className={opacity ? "opacity-0" : "opacity-100"} />;
}

const Navbar = () => {
  return (
    <nav  className="w-full justify-center px-4 py-4 h-[70px] fixed z-70 flex items-center">
      <div  className="w-full max-w-5xl mx-auto flex justify-between items-center">
      <img src="/assets/creativetim-white-slim.png" width={180} height="auto" alt="creative tim logo" />  
      <div className="lg:hidden flex">
        <IoMdMenu size={25} color="#fff" />
      </div>
      <div className="hidden lg:flex items-center gap-4">
        <FaFacebookSquare size={25} color="#fff" />
        <FaSquareTwitter size={25} color="#fff" />
        <FaGithub size={25} color="#fff" />
        <button type="button" className="mx-7 py-3 px-5 text-md text-[#7795f8] bg-white font-bold uppercase rounded-sm">
          Try Demo
        </button>
      </div>
      <div className="hidden lg:flex items-center gap-6">
        <button type="button" className="py-3 px-5 text-md font-bold text-white uppercase">
          Documentation
        </button>
        <button type="button" className="py-3 px-5 text-md font-bold text-white uppercase bg-[#11cdef] rounded-sm">
          Upgrade to Pro
        </button>
      </div>
      </div>
    </nav>
  )
}

export default Navbar