import { useEffect, useState } from "react";
import Home from "./pages/Home";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import About from "./pages/About";
import StartBuilding from "./components/Layout/StartBuilding";
import Contact from "./pages/Contact";
import Documentation from "./pages/Documentation";

function App() {
  return (
    <div>
      <Header />
      {/* <Home /> */}
      {/* <About /> */}
      {/* <Contact /> */}
      <Documentation />
      <StartBuilding />
      <Footer />
    </div>
  );
}

export default App;
