import { Link, NavLink, useLoaderData } from "react-router-dom";

const All_Craft = () => {
    const allCrafts = useLoaderData();
    const { _id, photo, item_name, subcategory_Name, description, Price, rating, customization, processing_time, stockStatus, Email, Name } = allCrafts;

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Subcategory Name</th>
                            <th>Price</th>
                            <th>Raing</th>
                            <th>View</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            allCrafts.map(craft => 
                            <tr key={craft._id}>
                                <th>{craft.item_name}</th>
                                <td>{craft.subcategory_Name}</td>
                                <td>{craft.Price}</td>
                                <td>{craft.rating}</td>
                                <Link  to={`/${craft._id}`}><td className="btn">View</td></Link>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default All_Craft;