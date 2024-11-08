import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Herosection/Hero";
import Herosecondsection from "../Herosecondsection/Herosecondsection";
import Herothirdsection from "../Herothirdsection/Herothirdsection";
import Herofourthsection from "../Herofouthsection/Herofourthsection";
import Herofifthsection from "../Herofifthsection/Herofifthsection";
import Herosixthsection from "../Herosixthsection/Herosixthsection";
import Heroseventhsection from "../Heroseventhsection/Heroseventhsection";
import Footer from "../Footer/Footer";

const Home = () => {
  useEffect(() => {
    // Save current scroll position
    const scrollPosition = window.scrollY;

    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    // Restore scroll position on component unmount
    return () => {
      window.scrollTo(0, scrollPosition);
    };
  }, []);
  return (
    <>
      <Navbar />
      <Hero />
      {/* <Herosecondsection /> */}
      {/* <Herothirdsection /> */}
      <Herofourthsection />
      <Herofifthsection />
      {/* <Herosixthsection /> */}
      {/* <Heroseventhsection /> */}
      <Footer />
    </>
  );
};

export default Home;
