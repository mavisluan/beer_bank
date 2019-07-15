import React from 'react';
// import PropTypes from 'prop-types'
import { Navbar, Nav, Form, Image, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { ItemsContext } from './ItemsStore';
// import logo from '../icons/logo.png';
import beerLogo from '../icons/beerLogo.png';
import nameLogo from '../icons/nameLogo.png';

// eslint-disable-next-line react/prop-types
const Header = () => (
    <ItemsContext.Consumer>
        {({ setQuery, query, setActiveTab, activeTab }) => (
            <div style={{ backgroundColor: 'orange' }} className="text-black text-center p-4">
                <Navbar fixed="top" variant="dark">
                    <Nav className="ml-auto font-weight-bolder">
                        <NavLink to="/" className="mr-3 text-dark" onClick={() => setActiveTab('home')}>
                            <span className={activeTab === 'home' && 'selected'}>HOME</span>
                        </NavLink>
                        <NavLink to="/favorite" className="mr-3 text-dark" onClick={() => setActiveTab('favorite')}>
                            <span className={activeTab === 'favorite' && 'selected'}>FAVORITE</span>
                        </NavLink>
                        <NavLink to="/about" className="mr-3 text-dark" onClick={() => setActiveTab('about')}>
                            <span className={activeTab === 'about' && 'selected'}>ABOUT</span>
                        </NavLink>
                        <NavLink to="/contact" className="mr-3 text-dark" onClick={() => setActiveTab('contact')}>
                            <span className={activeTab === 'contact' && 'selected'}>CONTACT</span>
                        </NavLink>
                    </Nav>
                </Navbar>
                <Row className="justify-content-center">
                    <Col xs={0} md={4} lg={3}>
                        <Image src={beerLogo} fluid height="auto" className="d-none d-sm-block" />
                    </Col>
                    <Col sx={12} md={8} lg={6} mx="auto">
                        <Image src={nameLogo} fluid />
                        <div className="mb-3 h3">Find your favorite beer here</div>
                        <Form className="mx-auto">
                            <Form.Control
                                placeholder="Search for beer name"
                                name="query"
                                value={query}
                                size="lg"
                                onChange={e => setQuery(e.target.value)}
                            />
                        </Form>
                    </Col>
                </Row>
            </div>
        )}
    </ItemsContext.Consumer>
);

// Header.propTypes = {};

export default Header;
