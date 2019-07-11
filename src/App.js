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

    if (modalShow !== null) {
      const modalItem = data.items.find(item => item.id === modalShow);
      console.log(`find item`, modalItem)
      if (modalItem) {
        console.log('modal item in pageData', modalItem)
        setModalItem(modalItem);
      } else {
        console.log('modal item not in page data', modalItem)
        const fetchModalItem = async() => {
        const results = await BeersAPI.getById(modalShow);
        setModalItem(results.data[0])
        }
        fetchModalItem();
      }     

      if (modalItem) {
        console.log('get similar data')
        const fetchSimilars = async () => {
          const results = await BeersAPI.findSimilars(modalItem.abv)
          setSimilarData(formatData(results.data));
        };
        fetchSimilars(); 
      }
    }
  }, [query, modalShow])


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

  console.log('modalId', modalShow)
  console.log('app modalItem', modalItem)
  console.log('similar', similarData)
  return (
    <Router>
      <div className="bg-light" style={{ height: "2000px" }}>
        <Header updateQuery={(e) => setQuery(e.target.value)} query={query} />
        <Route path="/" exact render={() => (
          <Board
            setModalShow={setModalShow}
            setFavorite={setFavorite}
            setSimilarData={setSimilarData}
            modalShow={modalShow}
            similarItems={similarData}
            items={data.items}
            modalItem={modalItem}
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
