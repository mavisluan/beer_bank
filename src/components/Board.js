import React from 'react'
// import PropTypes from 'prop-types'
import { Container, Row, Col } from 'react-bootstrap'
import Item from './Item.js';
import DetailsModal from './DetailsModal.js';

const Board = ({ modalShow, setModalShow, items }) => {
    const modalItem =items.find(item => item.id === modalShow);

    return (
        <Container className="mt-4">
            <Row>
                {items.map(beer => (
                    <Col md="6" sm="12" lg="4" key={beer.id} className="text-center">
                        <Item item={beer} setModalShow={setModalShow}/>
                    </Col>
                ))}
            </Row>
            {modalItem &&
                <DetailsModal
                    modalItem={modalItem}
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
