import React from 'react'
// import PropTypes from 'prop-types'
// import seed from '../seed.json';
import { Container, Row, Col } from 'react-bootstrap'
import Item from './Item.js';
import ItemDetails from './ItemDetails.js';

const Board = ({ modalShow, setModalShow, items }) => {
    const item =items.find(item => item.id === modalShow);
    console.log('chosen item', item)
    return (
        <Container className="mt-4">
            <Row>
                {items.map(beer => (
                    <Col md="6" sm="12" lg="4" key={beer.id} className="text-center">
                        <Item item={beer} setModalShow={setModalShow}/>
                    </Col>
                ))}
            </Row>
            {item &&
                <ItemDetails 
                    item={item}
                    show={true} 
                    onHide={() => setModalShow(null)}
            />
            }
        </Container>
    )
}

Board.propTypes = {

}

export default Board
