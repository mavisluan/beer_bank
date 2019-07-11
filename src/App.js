import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Board from './components/Board';
import * as BeersAPI from './BeersAPI';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Favorite from './components/Favorite';

function App() {
  const [modalShow, setModalShow] = useState(null);
  const [data, setData] = useState({ items: [] });
  const [query, setQuery] = useState('');
  // const [likes, setLikes] = useState({ likes: []})

  useEffect(() => {
    if (query === '') {
      const fetchAll = async () => {
        const results = await BeersAPI.getAll();

        setData({ items: results.data });
      };
      fetchAll();
    } else {

      const searchData = async () => {
        const results = await BeersAPI.search(query);
        setData({ items: results.data });
      };
      searchData();
    }
  }, [query])


  return (
    <Router>
      <div className="bg-light" style={{ height: "2000px" }}>
        <Header updateQuery={(e) => setQuery(e.target.value)} query={query} />
        <Route path="/" exact render={() => (
          <Board
            setModalShow={setModalShow}
            modalShow={modalShow}
            items={data.items}
          />
        )} />
        <Route path="/favorite" render={() => (
          <Favorite />
        )} />
      </div>
    </Router>
  );
}

export default App;
