import Home from "./components/Home/Home";
import "./App.module.css";
import SocialNetworks from "./components/SocialNetworks/SocialNetworks";
import Skills from "./components/Skills/Skills";
import { Route, Routes } from "react-router-dom";
import Projects from "./components/Proyects.jsx/Projects";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import React from "react";
import styles from "./App.module.css"

function App() {
  return (
    <div className="w-100  bg-transparent min-vh-100">
      <div className="mb-3">
        <Navbar />
        <Routes className="w-100">
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <SocialNetworks />
      </div>
      <Footer />
      <div className={styles.firefly}></div>
      <div className={styles.firefly}></div>
      <div className={styles.firefly}></div>
      <div className={styles.firefly}></div>
      <div className={styles.firefly}></div>
      <div className={styles.firefly}></div>
      <div className={styles.firefly}></div>
      <div className={styles.firefly}></div>
      <div className={styles.firefly}></div>
      <div className={styles.firefly}></div>
      <div className={styles.firefly}></div>
      <div className={styles.firefly}></div>
      <div className={styles.firefly}></div>
      <div className={styles.firefly}></div>
    </div>
  );
}

export default App;
