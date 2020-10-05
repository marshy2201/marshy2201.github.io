import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Navbar from './components/Navbar';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <>  
      <Navbar />
      <Container fluid>
      </Container>
    </>
  );
}

export default App;
