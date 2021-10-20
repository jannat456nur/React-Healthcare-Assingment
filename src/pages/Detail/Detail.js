import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Det from '../Det/Det';

const Detail = () => {
    const { Id } = useParams()
    const [detail, setDetail] = useState([])
    useEffect(() => {
        fetch('/detail.json')
            .then(res => res.json())
            // .then(data => setDetail(data))
            .then(data => {
                const services = detail.filter((detail) => detail.id == id);
            }






            // .catch((error) => {
            //     // Handle Errors here.

            //     const errorMessage = error.message;


            // });
        // .then(data => setDetail(data))
    }, [])
    return (
        <div>
            <h4>ygfydg{Id}</h4>
            <Link to="/home"><button type="button" className="btn btn-light" value="" >Go back</button></Link>
            {
                detail.map(detail => <Det
                    detail={detail}


                ></Det>)
            }

        </div>
    );
};

export default Detail;