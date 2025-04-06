import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Foundation from "./components/Foundation/Foundation";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import AboutUs from "./pages/about-us/AboutUs";
import Gallery from "./pages/gallery/Gallery";
import ContactUs from "./pages/contact-us/ContactUs";
import Donate from "./pages/donate/Donate";
import NotFound from "./pages/NotFound";
// import AboutUs from "./pages/about-us/AboutUs";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Foundation />
              <Body />
            </>
          } />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
