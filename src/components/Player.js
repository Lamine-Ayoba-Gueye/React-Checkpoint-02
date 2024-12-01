import React from 'react';
import { Card } from 'react-bootstrap';
import { PropTypes } from 'prop-types';

const Player = ({ name, team, nationality, numero, age, imageUrl }) => {
    return (
        <Card style={{ width: '18rem', margin: '10px' }}>
            <Card.Img variant="top" src={imageUrl} alt={`${name}'s image`} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    <strong>Équipe :</strong> {team} <br />
                    <strong>Nationalité :</strong> {nationality} <br />
                    <strong>Numéro de maillot :</strong> {numero} <br />
                    <strong>Âge :</strong> {age}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};
Player.defaultProps = {
    name: "Joueur inconnu",
    team: "Équipe inconnue",
    nationality: "Nationalité inconnue",
    jerseyNumber: 0,
    age: 0,
    imageUrl: "https://via.placeholder.com/150"
};

Player.propTypes = {
    name: PropTypes.string.isRequired,
    team: PropTypes.string.isRequired,
    nationality: PropTypes.string.isRequired,
    jerseyNumber: PropTypes.number.isRequired,
    age: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired
};

export default Player;