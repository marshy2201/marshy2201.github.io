import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Navbar from './components/Navbar';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <>  
      <div class="grey-clip-path-background"></div>
      <div class="dark-grey-clip-path-background"></div>
      <Navbar />
      <Container fluid className="p-lg-0">
        <About />
        <Experience />
        <Education />
        <Skills />
      </Container>
    </>
  );
}

export default App;
