import React from 'react';
import { Link } from 'react-router-dom';

const CardCraft = ({ craft }) => {
    const { _id, photo, item_name, subcategory_Name, description, Price, rating, customization, processing_time, stockStatus, Email, Name } = craft;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure className='h-80'><img src={photo} className='object-cover h-full w-full' alt="Shoes" /></figure>
            <div className="card-body ">
                <div className="badge badge-primary">{subcategory_Name}</div>
                <h2 className="card-title">{item_name}</h2>
                <p>{description.length > 50 ? description.slice(0, 50) + "..." : description}</p>
                <p>${Price}</p>
                <div className="card-actions ">
                    <Link className="btn btn-primary w-full " to={`/${_id}`}>View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default CardCraft;