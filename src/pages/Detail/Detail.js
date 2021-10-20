import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Det from '../Det/Det';

const Detail = () => {
    const { Id } = useParams()
    const [detail, setDetail] = useState([])
    useEffect(() => {
        fetch('/detail.json')
            .then(res => res.json())
            .then(data => setDetail(data))
            .catch((error) => {
                // Handle Errors here.

                const errorMessage = error.message;


            });
        // .then(data => setDetail(data))
    }, [])
    const details = detail.filter((td) => td.id == Id);
    console.log(details[0])
    return (



        <div className="g-3 ">
            <h4>Detail{Id}</h4>
            <div className="card container ">
                <div className="card-body d-flex ">
                    <img className="image" src={details[0]?.img} alt="" />
                    <div>
                        <h5>{details[0]?.name}</h5>
                        <p>{details[0]?.p}</p>
                        <p>{details[0]?.degree}</p>
                        <p>{details[0]?.p2}</p>
                        <p>{details[0]?.p3}</p>
                        <p>{details[0]?.phn}</p>
                        <Link to="/home"><button type="button" className="btn btn-light" value="" >Go back</button></Link>

                    </div>
                </div>
            </div>
        </div>

        // </div>
    );
};

export default Detail;