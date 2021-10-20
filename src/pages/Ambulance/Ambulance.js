import React from 'react';
import { Link } from 'react-router-dom';
import ambulance from './istockphoto-168448137-170667a.jpg'

const Ambulance = () => {
    return (
        <div className="d-flex p-5">
            <div className="col-lg-6">
                <img src={ambulance} alt="" />
            </div>
            <div className="col-lg-6">
                <h5>Ambulance Services</h5>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque explicabo fugit inventore veniam aliquid a facere doloremque in, non deleniti nam saepe neque nulla, iure nisi eius tempora magni dicta?</p>
                <Link to="/home"><button type="button" className="btn btn-light" value="">Go Back</button></Link>
            </div>
        </div>
    );
};

export default Ambulance;