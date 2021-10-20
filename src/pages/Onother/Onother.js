import React from 'react';
import logo from '../Header/logo.png'

const Onother = () => {
    return (
        <div className="row p-5">
            <div className="col-lg-4">
                <img src={logo} alt="" />
                <p><i className="fas fa-map-marker-alt"></i>Nehar Market(Level 4),East Zindabazar,sylhet</p>
                <p><i className="fas fa-phone-alt"></i>+6532436573486</p>
                <p><i className="fas fa-envelope"></i>daktars.bd@gmail.com</p>
            </div>
            <div className="col-lg-4">
                <h5>Top Doctors</h5>
                <p>Prof. Dr. Mahjuba Umme Salam</p>
                <p>Dr. Shishir Basak</p>
                <p>Prof. Dr. K M Akhtaruzzaman</p>
                <p>Prof. Dr. Faisal Ahmed</p>
                <p>Prof. Dr. Mohammad Abdus Salam</p>
                <p>Dr. Shahed Ahmad</p>
            </div>
            <div className="col-lg-4">
                <h5>Top Facilities</h5>
                <p>Mount Adora Hospital, Akhalia, Sylhet</p>
                <p>Mount Adora Hospital, Nayasarak, Sylhet</p>
                <p>Popular Medical Center Ltd, Sylhet</p>
                <p>Medinova Medical Services Ltd, Sylhet Branch, Sylhet</p>
                <p>
                    Jalalabad Ragib-Rabeya Medical College & Hospital, Sylhet</p>
                <p>Parkview Medical College Hospital, Sylhet</p>
                <p>Trust Medical Services, Sylhet</p>

            </div>
        </div>
    );
};

export default Onother;