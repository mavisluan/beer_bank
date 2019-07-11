import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Board from './components/Board';
import * as BeersAPI from './BeersAPI';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  const [modalShow, setModalShow] = useState(null);
  const [data, setData] = useState({ items: [] });
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (query === '') {
      const fetchAll = async () => {
        const results = await BeersAPI.getAll();
        const data = results.data.map(item => {
          const {id, image_url, name, tagline, ibu, abv, ebc, description, food_pairing} = item;
          return ({ id, image_url, name, tagline, ibu, abv, ebc, description, food_pairing, favorite: false})
        })
        setData({ items: data });
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

  const setFavorite = (id) => {
    console.log(`add ${id} to favorite`)
    const newItems = data.items.map(item => {
      if (item.id === id) {
        item.favorite = true;
      }
      return item;
    })
    setData({ items: newItems })
  }

  const favoriteItems = data.items.filter(item => item.favorite);


  return (
    <Router>
      <div className="bg-light" style={{ height: "2000px" }}>
        <Header updateQuery={(e) => setQuery(e.target.value)} query={query} />
        <Route path="/" exact render={() => (
          <Board
            setModalShow={setModalShow}
            setFavorite={setFavorite}
            modalShow={modalShow}
            items={data.items}
          >
          </Board>
        )} />
        <Route path="/favorite" render={() => (
          <Board
            setModalShow={setModalShow}
            setFavorite={setFavorite}
            modalShow={modalShow}
            items={favoriteItems}
          >
          </Board>
        )} />
      </div>
    </Router>
  );
}

export default App;
