import Navbar from "./components/NavBar";
import Projects from "./components/Projects";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Layout from "./components/Layout";
import './styles/NavBar.css';
import React from "react"
import {Routes, Route} from "react-router-dom";

function App() {
  return (
      <>
        <Layout/>
        <div className="bg-white">
            <Routes>
                <Route path="/" element={<Layout />} />
                    <Route index element={<Home />} />
                    <Route path="home" element={<Home />} />
                    <Route path="projects" element={<Projects />} />
                    <Route path="contact" element={<Contact />} />
            </Routes>
        </div>
      </>
  );
}

export default App;
