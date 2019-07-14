import React from 'react';
// import PropTypes from 'prop-types'
import { Navbar, Nav, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ItemsContext } from './ItemsStore';

// eslint-disable-next-line react/prop-types
const Header = () => (
    <ItemsContext.Consumer>
        {({ setQuery, query }) => (
            <div style={{ background: '#ff8000' }} className="text-white text-center p-4">
                <Navbar fixed="top" variant="dark">
                    <Nav className="ml-auto small font-weight-bolder">
                        <Link to="/" className="mr-3 whiteLink">
                            HOME
                        </Link>
                        <Link to="/favorite" className="whiteLink">
                            FAVORITE
                        </Link>
                    </Nav>
                </Navbar>
                <div className="title">The Beer Bank</div>
                <div className="small mb-3">Find your favorite beer here</div>
                <Form className="col-8 mx-auto">
                    <Form.Control
                        placeholder="Search for beer name"
                        name="query"
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                    />
                </Form>
            </div>
        )}
    </ItemsContext.Consumer>
);

// Header.propTypes = {};

export default Header;
