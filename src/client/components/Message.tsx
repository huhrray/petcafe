import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';

export const Message = () => {
    const MessageList = [
        {
            heading: 'Parking?',
            body: 'Is it possible to park around the shop?, If can, how long and how many cars are able to park? ',
            badgeNum: '3',
        },
        {
            heading: 'Sweetpotato Cheese balls',
            body: 'Sando loves them! They are really cute and healthy. Momo is drueling over them wheneve I open the package',
            badgeNum: '2',
        },
        {
            heading: 'Looking for a pet leash',
            body: 'Is there anyone selling a second hand leash? I would like to buy a leash that I can use when I jog with Doris',
            badgeNum: '5',
        },
        {
            heading: 'Quick meet up at 20 tmr in Daneemom rooftop?',
            body: 'Anyone up for a quick meet yp at 20 tomorrow? I just started raising a puppy. Wanna hang out with other dog owners and get some tips!',
            badgeNum: '0',
        },
        {
            heading: 'Entrance fee',
            body: 'Was the entrance fee only for the pets or also for the people? Is there a time limit once entered ?',
            badgeNum: '1',
        },
    ];

    return (
        <ListGroup as="ol" numbered>
            {MessageList.map((item, index) => {
                return (
                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                        id={`message_${index}`}
                    >
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">{item.heading}</div>
                            {item.body}
                        </div>
                        <Badge bg="success" pill>
                            {item.badgeNum}
                        </Badge>
                    </ListGroup.Item>
                );
            })}
        </ListGroup>
    );
};
