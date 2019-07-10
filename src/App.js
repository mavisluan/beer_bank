import React from 'react';
import './App.css';
import Header from './components/Header';
import Board from './components/Board';

function App() {
  return (
    <div className="bg-light" style={{height: "2000px"}}>
      <Header />
      <Board />
    </div>
  );
}

export default App;
