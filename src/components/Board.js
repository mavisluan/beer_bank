import React from 'react'
// import PropTypes from 'prop-types'
import { Container, Row, Col } from 'react-bootstrap'
import Item from './Item.js';
import DetailsModal from './DetailsModal.js';

const Board = ({ setModalItem, toggleFavorite, setSimilarItems, items, similarItems, modalItem, fetchModalItem }) => {
    return (
        <Container className="mt-4">
            <Row>
                {items.map(item => (
                    <Col md="6" sm="12" lg="4" key={item.id} className="text-center">
                        <Item 
                            item={item} 
                            setModalItem={setModalItem} 
                            toggleFavorite={toggleFavorite}
                            setSimilarItems={setSimilarItems}
                            modalItem={modalItem}
                            fetchModalItem={fetchModalItem}
                        />
                    </Col>
                ))}
            </Row> 
            {modalItem &&
            <DetailsModal
                modalItem={modalItem}
                onHide={() => setModalItem(null)}
                setModalItem={setModalItem}
                similarItems={similarItems}
                fetchModalItem={fetchModalItem}
            />
            }
        </Container>
    )
}

Board.propTypes = {

}

export default Board
