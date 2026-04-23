import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import RepoGrid from './components/RepoGrid';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <main>
        <About />
        <Skills />
        <Experience />
        <RepoGrid />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
