import { useState, createRef, useEffect } from "react";
import Navbar, { Navbackground } from "./components/Navbar";
import "./App.css";

const headerRef = createRef();

function App() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const headerHeight = headerRef.current.clientHeight;
    const range = 200;
    const offset = headerHeight / 2;

    const didScrollPage = e => {
      let calc = 1 - (window.scrollY - offset + range) / range;

      if (calc > 1) {
        calc = 1;
      } else if (calc < 0) {
        calc = 0;
      }

      setOpacity(calc);
    };

    window.addEventListener("scroll", didScrollPage);

    return () => {
      window.removeEventListener("keydown", didScrollPage);
    };
  }, []);

  return (
   <div className="relative flex flex-col">
    <Navbar />
    <Navbackground opacity={opacity} />
    <header ref={headerRef} className="relative w-full h-screen -mt-[40px]">
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
    </section>
   </header>
   </div>
  )
}

export default App;
