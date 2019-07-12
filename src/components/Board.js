import React from 'react'
// import PropTypes from 'prop-types'
import { Container, Row, Col } from 'react-bootstrap'
import Item from './Item.js';
import DetailsModal from './DetailsModal.js';

const Board = ({ modalShow, setModalItem, setFavorite, setSimilarItems, items, similarItems, modalItem, fetchModalItem }) => {
    return (
        <Container className="mt-4">
            <Row>
                {items.map(item => (
                    <Col md="6" sm="12" lg="4" key={item.id} className="text-center">
                        <Item 
                            item={item} 
                            setModalItem={setModalItem} 
                            setFavorite={setFavorite}
                            setSimilarItems={setSimilarItems}
                            modalShow={modalShow}
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
                modalShow={modalShow}
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
