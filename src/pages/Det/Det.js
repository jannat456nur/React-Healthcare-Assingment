import React from 'react';

const Det = (props) => {
    const { name, id, degree, p2, p3, phn } = props.detail;
    return (
        <div>
            <h5>{id}</h5>
            <h5>{name}</h5>

        </div>
    );
};

export default Det;