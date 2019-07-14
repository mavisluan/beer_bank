/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React, { Fragment } from 'react';
import { Col, Image } from 'react-bootstrap';
import { ItemsContext } from './ItemsStore';
// import PropTypes from 'prop-types'

const ItemInfo = () => (
    <ItemsContext.Consumer>
        {({ modalItem: { image_url, name, tagline, ibu, abv, ebc, description, food_pairing } }) => (
            <Fragment>
                <Col s={0} md={4} lg={3}>
                    <Image
                        src={image_url}
                        fluid
                        className="mx-auto d-none d-md-block"
                        style={{ maxWidth: '70%', height: 'auto' }}
                    />
                </Col>
                <Col s={10} md={8} lg={9}>
                    <div className="info-header">
                        <div className="text-bold-orange h4">{name}</div>
                        <div className="text-muted small">{tagline}</div>
                        <hr />
                    </div>
                    <div className="info-body mt-2">
                        <div className="d-inline-block">
                            <span className="font-weight-bolder">IBU: </span>
                            {ibu}
                        </div>
                        <div className="d-inline-block ml-3">
                            <span className="font-weight-bolder">ABV: </span>
                            {abv}%
                        </div>
                        <div className="d-inline-block ml-3">
                            <span className="font-weight-bolder">EBC: </span>
                            {ebc}
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
            </Fragment>
        )}
    </ItemsContext.Consumer>
);

ItemInfo.propTypes = {};

export default ItemInfo;
