import React from "react";
import styles from "./App.module.css";
import { Navbar } from "./components/NavBar/NavBar";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Biography } from "./components/Biography/Biography";

function App() {
  return (
    <>
      <div className={styles.App}>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Biography />
        <Contact />
      </div>
    </>
  );
}

export default App;
