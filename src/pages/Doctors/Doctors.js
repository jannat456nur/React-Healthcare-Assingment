import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctor, setDoctor] = useState([])
    useEffect(() => {
        fetch('./doctors.json')
            .then(res => res.json())
            .then(data => setDoctor(data))
    }, [])
    return (
        <div className="row">
            {
                doctor.map(doctor => <Doctor
                    key={doctor.id}
                    doctor={doctor}


                >


                </Doctor>)
            }

        </div>
    );
};

export default Doctors;