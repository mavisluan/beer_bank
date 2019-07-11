import React from 'react'
// import PropTypes from 'prop-types'
import { Container, Row, Col } from 'react-bootstrap'
import Item from './Item.js';
import DetailsModal from './DetailsModal.js';

const Board = ({ modalShow, setModalShow, setFavorite, setSimilarItems, items, similarItems, modalItem }) => {
    // const modalItem =items.find(item => item.id === modalShow);
    console.log('modalItem', modalItem)

    return (
        <Container className="mt-4">
            <Row>
                {items.map(item => (
                    <Col md="6" sm="12" lg="4" key={item.id} className="text-center">
                        <Item 
                            item={item} 
                            setModalShow={setModalShow} 
                            setFavorite={setFavorite}
                            setSimilarItems={setSimilarItems}
                            modalShow={modalShow}
                        />
                    </Col>
                ))}
            </Row>
            {modalShow && 
            <DetailsModal
                modalItem={modalItem}
                onHide={() => setModalShow(null)}
                setModalShow={setModalShow}
                modalShow={modalShow}
                similarItems={similarItems}
            />
            }
        </Container>
    )
}

Board.propTypes = {

}

export default Board
