import Accordion from 'react-bootstrap/Accordion';
import { Community } from './Community';
import { DogCounter } from '../Components/DogCounter';
import Row from 'react-bootstrap/Row';

export const Home = () => {
    const tabs = [
        {
            id: '1',
            label: 'Welcome to Daneemom π¨π»βπ³',
            description:
                'Handmade organic pet food store/cafe located in Seoul. We have a wide rooftop area where your pets can enjoy outdoor activities in the middle of the busy city. More importantly pets and owners can enjoy healthy food together while playing!',
        },
        { id: '2', label: 'Rooftop LiveπΊ', description: <DogCounter /> },
        { id: '3', label: 'Community π₯', description: <Community /> },
    ];
    return (
        <Row>
            {tabs.map((tab) => (
                <Accordion key={tab.id} defaultActiveKey={tab.id} flush>
                    <Accordion.Item eventKey={tab.id}>
                        <Accordion.Header> {tab.label}</Accordion.Header>
                        <Accordion.Body>{tab.description}</Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            ))}
        </Row>
    );
};
