import React from 'react'
// import PropTypes from 'prop-types'
import { Navbar, Nav, Form } from 'react-bootstrap'

const Header = props => {
    return (
        <div style={{ background: "#ff8000" }} className="text-white text-center p-4">
            <Navbar fixed="top" variant="dark" >
                <Nav className="ml-auto small font-weight-bolder">
                    <Nav.Link href="/">HOME</Nav.Link>
                    <Nav.Link href="/favorite">FAVORITE</Nav.Link>
                </Nav>
            </Navbar>
            <div className="title">The Beer Bank</div>
            <div className="small mb-3">Find your favorite beer here</div>
            <Form className="col-8 mx-auto">
                <Form.Control placeholder="Search for beer name" />
            </Form>
        </div>
    )
}

Header.propTypes = {

}

export default Header
