import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';

function SearchBox() {
    const [keyword, setKeyword] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (keyword) {
            navigate(`/?keyword=${keyword}`);
        } else {
            navigate(location.pathname);
        }
    }, [keyword, navigate, location.pathname]);

    const submitHandler = (e) => {
        e.preventDefault();
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
