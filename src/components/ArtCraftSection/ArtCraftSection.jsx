import { useEffect, useState } from "react";
import CategoryCard from "../CategoryCard/CategoryCard";

const ArtCraftSection = () => {
    const [subCategories, setSubCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/subCategory')
            .then(res => res.json())
            .then(data => {
                setSubCategories(data)
            })
    }, [])
    return (
        <div className="grid grid-cols-3">
            {
                subCategories.map(category=><CategoryCard key={category._id} category={category}></CategoryCard>)
            }
        </div>
    );
};

export default ArtCraftSection;