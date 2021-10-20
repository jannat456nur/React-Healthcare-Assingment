import React from 'react';
import { Link } from 'react-router-dom';
import './MiniHead.css'

const MiniHead = () => {
    return (
        <div>
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 left">
                    <p>Get a quick advice:+0181312387416</p>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12  right">
                    <p>   <Link>daktars.bd@gmail.com</Link></p>
                </div>
            </div>
        </div>
    );
};

export default MiniHead;