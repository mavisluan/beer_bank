import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Board from './components/Board';
import * as BeersAPI from './BeersAPI';

function App() {
  const [modalShow, setModalShow] = useState(null);
  const [data, setData] = useState({ items: []});

  useEffect(() => {
    const fetchAll = async () => {
      const result = await BeersAPI.getAll();

      setData({ items: result.data});
    };
    fetchAll();
  }, [])

  return (
    <div className="bg-light" style={{ height: "2000px" }}>
      <Header />
      <Board 
        setModalShow={setModalShow} 
        modalShow={modalShow} 
        items={data.items} 
      />
    </div>
  );
}

export default App;
