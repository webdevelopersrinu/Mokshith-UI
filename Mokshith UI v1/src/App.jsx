import { useEffect, useState } from "react";
import Home from "./pages/Home";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import About from "./pages/About";
import StartBuilding from "./components/Layout/StartBuilding";
import Contact from "./pages/Contact";
import Documentation from "./pages/Documentation";
import { Route, Routes } from "react-router";

function App() {
  return (
    <div>
      <div className="sticky top-0 left-0 z-30">
        <Header />
      </div>
      <Routes>
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* <Home /> */}
      {/* <About /> */}
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default App;
