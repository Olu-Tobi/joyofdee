import { useState } from "react";
import PreShow2 from "../components/Preshow2";
import Navbar from "../components/Navbar";
import PreIntro from "../components/PreIntro";
import Footer from "../components/Footer";

export default function Gallery() {
  const [option, setOption] = useState("Gallery");
  return (
    <>
      <Navbar />
      <PreIntro />
      <PreShow2 />
      <Footer />
    </>
  );
}
