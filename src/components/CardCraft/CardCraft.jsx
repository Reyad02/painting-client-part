import React from 'react';
import { Link } from 'react-router-dom';

const CardCraft = ({ craft }) => {
    const {_id , photo, item_name, subcategory_Name, description, Price, rating, customization, processing_time, stockStatus, Email, Name } = craft;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure className=''><img src={photo} alt="Shoes" /></figure>
            <div className="card-body ">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <Link className="btn btn-primary" to={`/${_id}`}>View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default CardCraft;