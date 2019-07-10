import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Board from './components/Board';
import { ButtonToolbar, Button} from 'react-bootstrap'
import ItemDetails from './components/ItemDetails';

function App() {
  const [modalShow, setModalShow] = useState(false);
  // return (
  //   <div className="bg-light" style={{height: "2000px"}}>
  //     <Header />
  //     <Board />
  //   </div>
  // );
  return (
    <ButtonToolbar>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch modal with grid
      </Button>

      <ItemDetails show={modalShow} onHide={() => setModalShow(false)} />
    </ButtonToolbar>
  );
}

export default App;
