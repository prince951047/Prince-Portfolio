import React, { useState } from "react";
import AnimatedBackground from "./components/AnimatedBackground";
import SplashScreen from "./components/SplashScreen";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Footer from "./components/Footer";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-emerald-500/30 selection:text-emerald-200">
      {showSplash ? (
        <SplashScreen onComplete={() => setShowSplash(false)} />
      ) : (
        <>
          <AnimatedBackground />
          <main className="relative z-10 flex flex-col">
            <Hero />
            <Experience />
            <Projects />
            <Skills />
            <Education />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}
