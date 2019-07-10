import React from 'react'
// import PropTypes from 'prop-types'
import seed from '../seed.json';
import { Container, Row, Col } from 'react-bootstrap'
import Item from './Item.js';
import ItemDetails from './ItemDetails.js';

const Board = ({ modalShow, setModalShow }) => {
    return (
        <Container className="mt-4">
            <Row>
                {seed.map(beer => (
                    <Col md="6" sm="12" lg="4" key={beer.id} className="text-center">
                        <Item item={beer} setModalShow={setModalShow}/>
                    </Col>
                ))}
            </Row>
            <ItemDetails 
                show={modalShow} 
                onHide={() => setModalShow(false)} 
                setModalShow={setModalShow}
            />
        </Container>
    )
}

Board.propTypes = {

}

export default Board
