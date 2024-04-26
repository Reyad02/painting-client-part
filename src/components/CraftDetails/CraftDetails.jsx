import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CraftDetails = () => {
    const loadCraft = useLoaderData();
    const {photo, item_name, subcategory_Name, description, Price, rating, customization, processing_time, stockStatus, Email, Name } = loadCraft;
    // console.log(loadCraft);
    return (
        <div>
            {item_name}
        </div>
    );
};

export default CraftDetails;