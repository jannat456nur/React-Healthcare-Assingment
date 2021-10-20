import React from 'react';
import { Link } from 'react-router-dom';
import pharmacy from './istockphoto-1280979682-170667a.jpg'

const Pharmacy = () => {
    return (
        <div className="d-flex p-5">
            <div className="col-lg-6">
                <img src={pharmacy} alt="" />
            </div>
            <div className="col-lg-6">
                <h5>Farmacy</h5>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque explicabo fugit inventore veniam aliquid a facere doloremque in, non deleniti nam saepe neque nulla, iure nisi eius tempora magni dicta?</p>
                <Link to="/home"><button type="button" className="btn btn-light">Go Back</button></Link>
            </div>
        </div>
    );
};

export default Pharmacy;