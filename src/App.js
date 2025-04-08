import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Train from "./pages/Train";

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/meet-the-squad" element={<Train />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
