import { Message } from '../components/Message';
import Button from 'react-bootstrap/Button';
import { PaginationBar } from '../components/PaginationBar';

export const Community = () => {
    return (
        <div className="d-flex flex-column">
            <div className="d-flex mb-3 justify-content-end">
                <Button variant="outline-dark" size="sm">
                    Write
                </Button>
            </div>
            <Message />
            <PaginationBar />
        </div>
    );
};
