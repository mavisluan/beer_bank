import React from 'react';
import { Modal, Container, Row, Col, Button, Image } from 'react-bootstrap';
import seed from '../seed.json';
import Item from './Item.js';

const ItemDetails = (props) => {
    const beer = seed[1];
    const { image_url, name, tagline, ibu, abv, ebc, description, food_pairing } = beer;
    return (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter" size="lg">
            <Modal.Header closeButton className="border border-0" />
            <Modal.Body>
                <Container>
                    <Row className="item-info">
                        <Col s={0} md={4} lg={3}>
                            <Image src={image_url} fluid className="mx-auto d-none d-md-block" style={{ maxWidth: "70%", height: "auto" }} />
                        </Col>
                        <Col s={10} md={8} lg={9}>
                            <div className="info-header">
                                <div className="text-bold-orange h4">{name}</div>
                                <div className="text-muted small">{tagline}</div>
                                <hr />
                            </div>
                            <div className="info-body mt-2">
                                <div className="d-inline-block">
                                    <span className="font-weight-bolder">IBU: </span>{ibu}
                                </div>
                                <div className="d-inline-block ml-3">
                                    <span className="font-weight-bolder">ABV: </span>{abv}%
                                </div>
                                <div className="d-inline-block ml-3">
                                    <span className="font-weight-bolder">EBC: </span>{ebc}
                                </div>
                                <p className="lead">{description}</p>
                            </div>
                            <div className="font-weight-bolder">Best served with:</div>
                            <ul>
                                {food_pairing.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </Col>
                    </Row>
                    <div className="text-bold-orange">You might also like:</div>
                    <Row className="similar-items">
                        {seed.map(beer => (
                            <Col md="6" sm="12" lg="4" key={beer.id} className="text-center">
                                <Item item={beer} />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </Modal.Body>
        </Modal>
    );
}

export default ItemDetails