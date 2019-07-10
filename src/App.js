import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Board from './components/Board';
import seed from './seed.json';


function App() {
  const [modalShow, setModalShow] = useState(null);
  return (
    <div className="bg-light" style={{ height: "2000px" }}>
      <Header />
      <Board 
        setModalShow={setModalShow} 
        modalShow={modalShow} 
        items={seed} 
      />
    </div>
  );
}

export default App;
