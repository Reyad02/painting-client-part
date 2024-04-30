import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
    const { sub_category, photo } = category;
    return (
        <Link  to={`/sub-category/${sub_category}`}>
            <div className="card card-compact w-full md:w-96 bg-base-100 shadow-xl">
                <figure className='md:h-80'><img src={photo} className='object-cover md:h-full md:w-full' alt="Shoes" /></figure>
                <div className="card-body ">
                    <h2 className="card-title">{sub_category}</h2>
                    {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
                    {/* <div className="card-actions justify-end">
                        <Link className="btn btn-primary" to={`/${sub_category}`}>View Details</Link>
                    </div> */}
                </div>
            </div>
        </Link>
    );
};

export default CategoryCard;