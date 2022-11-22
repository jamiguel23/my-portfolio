import './App.css';
import Navbar from './components/Navbar';
import About from './components/About'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <main className="text-gray-400 bg-gray-900 body-font">
        <Navbar />
        <About />
        <Projects />
        <Testimonials />
        <Contact />

      </main>
    </div>
  );
}

export default App;
