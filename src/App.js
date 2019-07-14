/* eslint-disable no-shadow */
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Board from './components/Board';
import { ItemsContext } from './components/ItemsStore';

const App = () => (
    <ItemsContext.Consumer>
        {({ items, favoriteItems }) => (
            <Router>
                <div className="bg-light" style={{ height: '1000px' }}>
                    <Header />
                    <Route path="/" exact render={() => <Board items={items}></Board>} />
                    <Route path="/favorite" render={() => <Board items={favoriteItems}></Board>} />
                </div>
            </Router>
        )}
    </ItemsContext.Consumer>
);

export default App;
