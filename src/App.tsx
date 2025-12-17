import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingShapes from "./components/FloatingShapes";
import "./App.css";
import Chatbot from "./components/Chatbot";

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="gradient-bg"></div>
      <FloatingShapes />
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Contact />
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;
