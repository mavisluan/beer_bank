/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React from 'react';
// import PropTypes from 'prop-types'
import { Card, Button } from 'react-bootstrap';
import { ItemsContext } from './ItemsStore';

const Item = ({ item: { id, image_url, name, tagline, favorite } }) => (
    <ItemsContext.Consumer>
        {({ modalItem, toggleFavorite, fetchModalItem }) => (
            <Card className="my-2 beer-card" style={{ height: '22rem' }}>
                <Button
                    style={{ visibility: modalItem === null ? 'visible' : 'hidden' }}
                    variant="link"
                    className="ml-auto text-dark"
                    onClick={() => toggleFavorite(id)}
                >
                    {favorite ? <i className="fas fa-star text-warning"></i> : <i className="far fa-star"></i>}
                </Button>
                <Card.Img
                    variant="top"
                    src={image_url}
                    className="p-3 mx-auto card-image"
                    onClick={() => fetchModalItem(id)}
                />
                <Card.Body>
                    <Card.Title className={modalItem === null ? 'text-bold-orange' : 'text-dark'}>{name}</Card.Title>
                    <Card.Subtitle
                        className="small text-muted"
                        style={{ visibility: modalItem === null ? 'visible' : 'hidden' }}
                    >
                        {tagline}
                    </Card.Subtitle>
                </Card.Body>
            </Card>
        )}
    </ItemsContext.Consumer>
);

Item.propTypes = {};

export default Item;
