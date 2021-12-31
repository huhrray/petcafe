import Pagination from 'react-bootstrap/Pagination';

export const PaginationBar = () => {
    return (
        <Pagination className="mt-3 justify-content-center">
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item active>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Item>{4}</Pagination.Item>
            <Pagination.Item>{5}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
        </Pagination>
    );
};
