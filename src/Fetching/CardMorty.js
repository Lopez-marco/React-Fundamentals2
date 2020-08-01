import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

const CardMorty = (props) => {
    const { name, gender, image } = props.character

    return (
        <div>
            <Card>
                <CardImg top width="100%" src={image} alt="Card image cap" />
                <CardBody>
                    <CardTitle>{name}</CardTitle>
                    <CardSubtitle>{gender}</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Button>Button</Button>
                </CardBody>
            </Card>
        </div>);
}

export default CardMorty;