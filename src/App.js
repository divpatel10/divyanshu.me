import './App.css';
import React, { useState, useEffect } from "react"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import AboutMe from "./components/AboutMe"
import Frameworks from "./components/Frameworks"
import Experience from "./components/Experience"

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-black overflow-x-hidden relative">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/5 via-purple-900/5 to-blue-900/5 animate-gradient-shift"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-cyan-400/3 rounded-full blur-3xl animate-float-reverse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-purple-400/3 rounded-full blur-3xl animate-float-reverse-delayed"></div>
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 animate-grid-shift opacity-5"></div>
        {/* Floating Particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-400/20 rounded-full animate-particle-1"></div>
        <div className="absolute top-40 right-40 w-1.5 h-1.5 bg-purple-400/20 rounded-full animate-particle-2"></div>
        <div className="absolute bottom-32 left-1/3 w-2 h-2 bg-blue-400/20 rounded-full animate-particle-3"></div>
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-cyan-400/20 rounded-full animate-particle-4"></div>
      </div>
      <div className="relative w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20 flex flex-col justify-center z-10">
        {/* Main Content - Single Column Layout */}
        <div className="space-y-4 sm:space-y-6 md:space-y-8">
          <div className={`transition-all duration-500 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <AboutMe />
          </div>
          <div className={`transition-all duration-500 ease-out delay-75 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <Experience />
          </div>
          <div className={`transition-all duration-500 ease-out delay-150 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <Projects />
          </div>
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 transition-all duration-500 ease-out delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <Skills />
            <Frameworks />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
