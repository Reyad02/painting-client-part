import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CraftDetails = () => {
    const loadCraft = useLoaderData();
    const { photo, item_name, subcategory_Name, description, Price, rating, customization, processing_time, stockStatus, Email, Name } = loadCraft;
    // console.log(loadCraft);
    // con st ratingSystem =
    let ratingSystem = [];
    for (let index = 1; index < 6; index++) {
        if (index === rating) {
            ratingSystem.push(<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />)

        }
        else {
            ratingSystem.push(<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />)
        }
    }
    return (
        <div>
            <div className="hero  bg-base-200">
                <div className="hero-content flex-col lg:flex-row gap-10">
                    <div className="flex-1 text-center lg:text-left ">
                        <img src={photo} className='rounded-xl' alt="" />
                    </div>
                    <div className="card flex-1 space-y-2">
                        <div className="badge badge-primary">{subcategory_Name}</div>
                        <p className='text-2xl font-semibold'>{item_name}</p>
                        <p className='text-2xl font-semibold'><span>Price: </span>${Price}</p>
                        <div className="rating">
                            {ratingSystem}
                        </div>
                        <p><span>Description: </span>{description}</p>
                        <p><span>Process Time: </span>{processing_time}</p>
                        <p><span>Stock: </span>{stockStatus}</p>
                        <p><span>Artist: </span>{Name}</p>
                        <p><span>Email: </span>{Email}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CraftDetails;