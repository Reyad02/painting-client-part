import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
    const { sub_category } = category;
    return (
        <div>
            <p>{sub_category}</p>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure className=''><img src="" alt="Shoes" /></figure>
                <div className="card-body ">
                    <h2 className="card-title">{sub_category}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <Link className="btn btn-primary" to={`/${sub_category}`}>View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;