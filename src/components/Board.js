import React from 'react'
// import PropTypes from 'prop-types'
import { Container, Row, Col } from 'react-bootstrap'
import Item from './Item.js';
import DetailsModal from './DetailsModal.js';

const Board = ({ modalShow, setModalShow, children, setFavorite }) => {
    const modalItem =children.find(item => item.id === modalShow);

    return (
        <Container className="mt-4">
            <Row>
                {children.map(item => (
                    <Col md="6" sm="12" lg="4" key={item.id} className="text-center">
                        <Item 
                            item={item} 
                            setModalShow={setModalShow} setFavorite={setFavorite}
                        />
                    </Col>
                ))}
            </Row>
            {modalItem &&
                <DetailsModal
                    modalItem={modalItem}
                    onHide={() => setModalShow(null)}
                />
            }
        </Container>
    )
}

Board.propTypes = {

}

export default Board
