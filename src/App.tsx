import React, { useState, useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate content loading
    const timeout = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <ThemeProvider>
      <div className={`min-h-screen flex flex-col transition-colors duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <Header />
        <main className="flex-grow">
          <Hero />
          <About />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;