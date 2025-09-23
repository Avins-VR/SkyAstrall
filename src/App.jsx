import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from "./Loading";
import Home from "./Home/Home";
import Navbar from "./Navbar";
import About from "./About/About";
import Background from "./Background";
import Achievements from "./Achievement/Achievements";
import Service from "./Service";
import Contact from "./Contact/Contact";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <Loading onFinish={() => setLoading(false)} />
      ) : (
        <>
        <Background />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Achievements" element={<Achievements />} />
	          <Route path="/Service" element={<Service />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </>
      )}
    </>
  );
}


export default App;
