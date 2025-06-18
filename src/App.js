import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './portfolio/Home';
import Skills from './portfolio/Skills';
import About from './portfolio/About';
import Contact from './portfolio/Contact';
import Projects from './portfolio/Projects';



function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/projects' element={<Projects />} />

      </Routes>
    </div>
  );
}

export default App;
