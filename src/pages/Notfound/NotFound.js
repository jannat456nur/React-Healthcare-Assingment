import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h2>404 Not Found!</h2>
            <Link to="/home"><button type="button" className="btn btn-light">Go Back</button></Link>
        </div>
    );
};

export default NotFound;