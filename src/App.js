import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Board from './components/Board';
import * as BeersAPI from './BeersAPI';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  const [data, setData] = useState({ items: [] });
  const [query, setQuery] = useState('');
  const [similarData, setSimilarData] = useState([]);
  const [modalItem, setModalItem] = useState(null);

  const formatData = (results) => (results.map(item => {
    const { id, image_url, name, tagline, ibu, abv, ebc, description, food_pairing } = item;
    return ({ id, image_url, name, tagline, ibu, abv, ebc, description, food_pairing, favorite: false })
  }))

  useEffect(() => {
    if (query === '') {
      const fetchAll = async () => {
        const results = await BeersAPI.getAll();
        setData({ items: formatData(results.data) });
      };
      fetchAll();
    } else {
      const searchData = async () => {
        const results = await BeersAPI.search(query);
        setData({ items: results.data });
      };
      searchData();
    }
  }, [query, modalItem])

  const fetchSimilars = async (abv) => {
    const results = await BeersAPI.findSimilars(abv);
    setSimilarData(formatData(results.data));
  };

  const fetchModalItem = async (id) => {
    await BeersAPI
      .getById(id)
      .then((results) => results.data[0])
      .then((modalItem) => {
        setModalItem(modalItem);
        fetchSimilars(modalItem.abv)
      })
  }

  const toggleFavorite = (id) => {
    const newItems = data.items.map(item => {
      if (item.id === id) {
        item.favorite = !item.favorite;
      }
      return item;
    })
    setData({ items: newItems })
  }
  
  const favoriteItems = data.items.filter(item => item.favorite);

  return (
    <Router>
      <div className="bg-light" style={{ height: "1000px" }}>
        <Header updateQuery={(e) => setQuery(e.target.value)} query={query} />
        <Route path="/" exact render={() => (
          <Board
            setModalItem={setModalItem}
            toggleFavorite={toggleFavorite}
            setSimilarData={setSimilarData}
            similarItems={similarData}
            items={data.items}
            modalItem={modalItem}
            fetchModalItem={fetchModalItem}
          >
          </Board>
        )} />
        <Route path="/favorite" render={() => (
          <Board
            setModalItem={setModalItem}
            toggleFavorite={toggleFavorite}
            items={favoriteItems}
            modalItem={modalItem}
            fetchModalItem={fetchModalItem}
            similarItems={similarData}
          >
          </Board>
        )} />
      </div>
    </Router>
  );
}

export default App;
