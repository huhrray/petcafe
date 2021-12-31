import Card from 'react-bootstrap/Card';
import { useState } from 'react';

export const DogCounter = () => {
    const date = new Date();
    const time = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;
    const [small, setSmall] = useState(0);
    const [medium, setMedium] = useState(0);
    const [big, setBig] = useState(0);

    return (
        <Card className="text-center">
            <Card.Header as="h5">
                How many pets are playing in the rooftop?
            </Card.Header>
            <Card.Body className="d-flex flex-row justify-content-around">
                <div>
                    <Card.Title>Small🐕 </Card.Title>
                    <Card.Text>{small}</Card.Text>
                </div>
                <div>
                    <Card.Title>Medium🐩 </Card.Title>
                    <Card.Text>{medium}</Card.Text>
                </div>
                <div>
                    <Card.Title>Big🐕‍🦺</Card.Title>
                    <Card.Text>{big}</Card.Text>
                </div>
            </Card.Body>
            <Card.Footer className="text-muted">⏰ {time}</Card.Footer>
        </Card>
    );
};
