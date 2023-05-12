import React from 'react';

const Card = ({appointment}) => {
    const {id,disease_name,img,symptoms}=appointment;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{disease_name}</h2>
                <p>Symptoms: {symptoms}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Take Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default Card;