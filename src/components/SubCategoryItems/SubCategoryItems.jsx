import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CardCraft from '../CardCraft/CardCraft';

const SubCategoryItems = () => {
    const lodedSubCategory = useLoaderData();
    // console.log(lodedSubCategory);
    const { sub_category } = lodedSubCategory;
    const [subCategoriesCard, setSubCategoriesCard] = useState([]);

    useEffect(() => {
        fetch(`https://art-and-craft-server-five.vercel.app/crafts/sub_category/${sub_category}`)
            .then(res => res.json())
            .then(data => setSubCategoriesCard(data));
    }, [sub_category])
    return (
        // <>
        //     {subCategoriesCard.length}
        // </>
        <div className="grid grid-cols-3 gap-4 mx-auto max-w-7xl mt-8">
            {
                subCategoriesCard.map(craft => <CardCraft key={craft._id} craft={craft}></CardCraft>)
            }
        </div>

    );
};

export default SubCategoryItems;