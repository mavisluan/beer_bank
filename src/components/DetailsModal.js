import React from 'react';
import { Modal, Container, Row, Col } from 'react-bootstrap';
import seed from '../seed.json';
import Item from './Item.js';
import ItemInfo from './ItemInfo.js';

const DetailsModal = ({ modalItem, onHide, setModalShow }) => {

    return (
        <Modal
        show={true}
        onHide={onHide}  
        aria-labelledby="contained-modal-title-vcenter" size="lg">
            <Modal.Header closeButton className="border border-0" />
            <Modal.Body>
                <Container>
                    <Row className="item-info">
                        <ItemInfo modalItem={modalItem}/>
                    </Row>
                    <div className="text-bold-orange">You might also like:</div>
                    <Row className="similar-items">
                        {seed.map(item => (
                            <Col md="6" sm="12" lg="4" key={item.id} className="text-center">
                                <Item 
                                    item={item} 
                                    setModalShow={setModalShow}
                                    />  
                            </Col>
                        ))}
                    </Row>
                </Container>
            </Modal.Body>
        </Modal>
    );
}

export default DetailsModal