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
        <>
            <h1 className="text-center font-semibold text-5xl mt-16 ">Art &Craft Categories</h1>
            <div className="grid grid-cols-3 gap-4 mx-auto max-w-7xl mt-8">
                {
                    subCategories.map(category => <CategoryCard key={category._id} category={category}></CategoryCard>)
                }
            </div>
        </>
    );
};

export default ArtCraftSection;