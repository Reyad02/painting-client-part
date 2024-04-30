import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const List_Craft_Card = ({ craft, toatlCrafts, setAllCrafts }) => {
    const { _id, photo, item_name, subcategory_Name, description, Price, rating, customization, processing_time, stockStatus, Email, Name } = craft;

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://art-and-craft-server-five.vercel.app/crafts/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                        const filterCraft = toatlCrafts.filter(eachCraft => eachCraft._id !== id)
                        setAllCrafts(filterCraft);
                    })
            }
        });
    }

    return (
        <>
            <div className="card card-compact w-full md:w-96 bg-base-100 shadow-xl">
                <figure className='md:h-80'><img src={photo} className='object-cover md:h-full md:w-full' alt="Shoes" /></figure>
                <div className="card-body ">
                    <div className="badge badge-primary">{subcategory_Name}</div>
                    <h2 className="card-title">{item_name}</h2>
                    <p className="text-lg">${Price}</p>
                    <p>{description.length > 50 ? description.slice(0, 50) + "..." : description}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/update/${_id}`}><button className="btn btn-primary">Update</button></Link>
                        <button onClick={() => handleDelete(_id)} className="btn btn-primary">Delete</button>
                    </div>
                </div>
            </div >
        </>
    );
};

export default List_Craft_Card;