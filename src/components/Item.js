import React from 'react'
// import PropTypes from 'prop-types'
import { Card, Button } from 'react-bootstrap'

const Item = ({ item: { id, image_url, name, tagline, favorite }, modalShow, setModalShow, setFavorite }) => {
    return (
        <Card className="my-2 beer-card" style={{ height: "22rem" }} >
            <Button 
                style={{visibility: modalShow === null ? "visible" : "hidden"}}
                variant="link" 
                className="ml-auto text-dark" 
                onClick={() => setFavorite(id)} >
                {favorite 
                    ? <i className="fas fa-star text-warning"></i>
                    : <i className="far fa-star"></i>
                }  
            </Button>          
            <Card.Img variant="top" src={image_url} className="p-3 mx-auto card-image" onClick={() => setModalShow(id)}/>
            <Card.Body>
                <Card.Title className={  modalShow === null ? "text-bold-orange" : "text-dark"}>{name}</Card.Title>
                <Card.Subtitle 
                    className="small text-muted" 
                    style={{visibility:  modalShow === null ? "visible" : "hidden"}}>
                    {tagline}
                </Card.Subtitle>
            </Card.Body>
        </Card>
    )
}

Item.propTypes = {

}

export default Item
