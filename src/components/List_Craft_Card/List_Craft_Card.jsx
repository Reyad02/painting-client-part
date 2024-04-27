import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const List_Craft_Card = ({ craft, toatlCrafts, setAllCrafts }) => {
    // const [allCrafts, setAllCrafts] = useState(craft);
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
                fetch(`http://localhost:5000/crafts/${id}`,{
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
                        const filterCraft = toatlCrafts.filter(eachCraft=>eachCraft._id!==id)
                        setAllCrafts(filterCraft);
                    })
            }
        });


    }
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure className=''><img src={photo} alt="Shoes" /></figure>
            <div className="card-body ">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Update</button>
                    <button onClick={() => handleDelete(_id)} className="btn btn-primary">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default List_Craft_Card;