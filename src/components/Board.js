import React from 'react'
// import PropTypes from 'prop-types'
import seed from '../seed.json';
import { Container, Row, Col } from 'react-bootstrap'
import Item from './Item.js';

const Board = props => {
    return (
        <Container className="mt-4">
            <Row>
                {seed.map(beer => (
                    <Col md="6" sm="12" lg="4" key={beer.id} className="text-center">
                        <Item item={beer} />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

Board.propTypes = {

}

export default Board
