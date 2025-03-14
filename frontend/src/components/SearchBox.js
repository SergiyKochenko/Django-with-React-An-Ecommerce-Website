import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';

function SearchBox() {
    const [keyword, setKeyword] = useState('');
    let navigate = useNavigate();
    let location = useLocation();

    const submitHandler = (e) => {
        e.preventDefault();
        if (keyword) {
            navigate(`/?keyword=${keyword}`);
        } else {
            navigate(location.pathname);
        }
    };

    return (
        <Form onSubmit={submitHandler} className="d-flex align-items-center">
            <Form.Control
                type="text"
                name="q"
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="Search Products..."
                className="me-2"
            />
            <Button type="submit" variant="outline-success">
                Search
            </Button>
        </Form>
    );
}

export default SearchBox;
