import './App.css';
import Navbar from './components/Navbar';
import About from './components/About'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <main className="text-gray-400 bg-gray-900 body-font">
        <Navbar />
        <About />
        <Projects />
        <Skills />
        <Testimonials />
        <Contact />

      </main>
    </div>
  );
}

export default App;
