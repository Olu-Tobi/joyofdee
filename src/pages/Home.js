import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import FontFaceObserver from "fontfaceobserver";
import Hero from "../components/Hero";
import TimerEle from "../components/TimerEle";
import Info from "../components/Info";
import Invites from "../components/Invites";
import Reservations from "../components/Reservations";
import Proposal from "../components/Proposal";
import PreShow from "../components/PreShow";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    const font = new FontFaceObserver("Cormorant Garamond");

    font
      .load()
      .then(() => {
        setFontLoaded(true);
        console.log("Font loaded successfully!");
      })
      .catch(() => {
        console.error("Font failed to load.");
      });
  }, []); // Empty dependency array ensures this runs once on mount
  return (
    <>
      {fontLoaded && (
        <div>
          <Navbar />
          <Hero />
          <TimerEle />
          <Info />
          <Invites />
          <Reservations />
          <Proposal />
          <PreShow />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
};

export default Home;
