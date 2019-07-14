import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import Item from './Item.js';
import DetailsModal from './DetailsModal.js';
import { ItemsContext } from './ItemsStore.js';

// eslint-disable-next-line react/prop-types
const Board = ({ items }) => (
    <ItemsContext.Consumer>
        {({ modalItem }) => (
            <Container className="mt-4">
                <Row>
                    {items.map(item => (
                        <Col md="6" sm="12" lg="4" key={item.id} className="text-center">
                            <Item item={item} />
                        </Col>
                    ))}
                </Row>
                {modalItem && <DetailsModal />}
            </Container>
        )}
    </ItemsContext.Consumer>
);

Board.propTypes = {
    items: PropTypes.array,
};

export default Board;
