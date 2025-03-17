import { useState, createRef, useEffect } from "react";
import Navbar, { Navbackground } from "./Navbar";
import "../App.css";
import Header from "./Header"; 
import Features from "./Features";
import UnconventionalCards from "./UnconventionalCards";

const headerRef = createRef();

function Home() {
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
   <div className="relative flex flex-col w-screen">
    <Navbar />
    <Navbackground opacity={opacity} />
    <Header headerRef={headerRef} />
    <Features />
    <UnconventionalCards />
   </div>
  )
}

export default Home;