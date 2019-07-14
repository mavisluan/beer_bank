/* eslint-disable react/prop-types */
import React from 'react';
import { Modal, Container, Row, Col } from 'react-bootstrap';
import Item from './Item.js';
import ItemInfo from './ItemInfo.js';
import { ItemsContext } from './ItemsStore.js';

const DetailsModal = () => (
    <ItemsContext.Consumer>
        {({ modalItem, setModalItem, similarItems }) => (
            <Modal
                show={modalItem !== null}
                onHide={() => setModalItem(null)}
                aria-labelledby="contained-modal-title-vcenter"
                size="lg"
            >
                <Modal.Header closeButton className="border border-0" />
                <Modal.Body>
                    <Container>
                        <Row className="item-info">
                            <ItemInfo />
                        </Row>
                        <div className="text-bold-orange">You might also like:</div>
                        <Row className="similar-items">
                            {similarItems.map(item => (
                                <Col md="6" sm="12" lg="4" key={item.id} className="text-center">
                                    <Item item={item} />
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </Modal.Body>
            </Modal>
        )}
    </ItemsContext.Consumer>
);

export default DetailsModal;
