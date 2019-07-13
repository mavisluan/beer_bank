/* eslint-disable react/prop-types */
import React from 'react';
import { Modal, Container, Row, Col } from 'react-bootstrap';
import Item from './Item.js';
import ItemInfo from './ItemInfo.js';

const DetailsModal = ({ modalItem, onHide, setModalItem, similarItems, fetchModalItem }) => (
    <Modal show={modalItem !== null} onHide={onHide} aria-labelledby="contained-modal-title-vcenter" size="lg">
        <Modal.Header closeButton className="border border-0" />
        <Modal.Body>
            <Container>
                <Row className="item-info">
                    <ItemInfo modalItem={modalItem} />
                </Row>
                <div className="text-bold-orange">You might also like:</div>
                <Row className="similar-items">
                    {similarItems.map(item => (
                        <Col md="6" sm="12" lg="4" key={item.id} className="text-center">
                            <Item item={item} setModalItem={setModalItem} fetchModalItem={fetchModalItem} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </Modal.Body>
    </Modal>
);

export default DetailsModal;
