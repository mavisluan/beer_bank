import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import Item from './Item.js';
import DetailsModal from './DetailsModal.js';
import { ItemsContext } from './ItemsStore.js';

// eslint-disable-next-line react/prop-types
const Board = ({ items }) => (
    <ItemsContext.Consumer>
        {({ modalItem, query }) => {
            const pattern = new RegExp(query.toLowerCase());
            const searchData = items.filter(item => pattern.exec(item.name.toLowerCase()));
            const displayItems = query === '' ? items : searchData;
            return (
                <Container className="mt-4">
                    <Row>
                        {displayItems.map(item => (
                            <Col md="6" sm="12" lg="4" key={item.id} className="text-center">
                                <Item item={item} />
                            </Col>
                        ))}
                    </Row>
                    {modalItem && <DetailsModal />}
                </Container>
            );
        }}
    </ItemsContext.Consumer>
);

Board.propTypes = {
    items: PropTypes.array,
};

export default Board;
