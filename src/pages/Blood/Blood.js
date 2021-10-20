import React from 'react';
import { Link } from 'react-router-dom';
import blood from './istockphoto-1150277164-170667a.jpg'

const Blood = () => {
    return (
        <div className="d-flex p-5">
            <div className="col-lg-6">
                <img src={blood} alt="" />

            </div>
            <div className="col-lg-6">
                <h4>Blood Bank</h4>
                <p>+o</p>
                <p>-o</p>
                <p>-B</p>
                <p>+B</p>
                <p>-A</p>
                <p>+A</p>
                <p>+AB</p>
                <p>-AB</p>
                <Link to="/home"><button type="button" className="btn btn-light" value="">Go Back</button></Link>
            </div>
        </div>
    );
};

export default Blood;