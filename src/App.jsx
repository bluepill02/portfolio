import React from 'react';
import Hero from './components/Hero';
import RepoGrid from './components/RepoGrid';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Hero />
      <main className="container">
        <About />
        <Services />
        <RepoGrid />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
