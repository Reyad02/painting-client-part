import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const List_Craft_Card = ({ craft, toatlCrafts, setAllCrafts }) => {
    // const [allCrafts, setAllCrafts] = useState(craft);
    const { _id, photo, item_name, subcategory_Name, description, Price, rating, customization, processing_time, stockStatus, Email, Name } = craft;

    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const photo = form.photo.value;
        const item_name = form.item_name.value;
        const subcategory_Name = form.subcategory_Name.value;
        const description = form.description.value;
        const Price = form.Price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const processing_time = form.processing_time.value;
        const stockStatus = form.stockStatus.value;
        const Email = form.Email.value;
        const Name = form.Name.value;
        console.log(photo, item_name, subcategory_Name, description, Price, rating, customization, processing_time, stockStatus, Email, Name);
        const newData = { photo, item_name, subcategory_Name, description, Price, rating, customization, processing_time, stockStatus, Email, Name };
        console.log("   Id Tets",_id)

        fetch(`http://localhost:5000/crafts/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newData),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                document.getElementById('my_modal_5').style.display = "none";
                // console.log(x);
        // if (data.deletedCount > 0) {
        //     Swal.fire({
        //         title: "Deleted!",
        //         text: "Your file has been deleted.",
        //         icon: "success"
        //     });
        // }
        // const filterCraft = toatlCrafts.filter(eachCraft => eachCraft._id !== id)
        // setAllCrafts(filterCraft);
        })

    }

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
                fetch(`http://localhost:5000/crafts/${id}`, {
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
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure className=''><img src={photo} alt="Shoes" /></figure>
                <div className="card-body ">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button onClick={() => document.getElementById('my_modal_5').showModal()} className="btn btn-primary">Update</button>
                        <button onClick={() => handleDelete(_id)} className="btn btn-primary">Delete</button>
                    </div>
                </div>
            </div>

            {/* Open the modal using document.getElementById('ID').showModal() method */}
            {/* <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>open modal</button> */}
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <form onSubmit={handleUpdate}>
                        <div className=" flex flex-col ">
                            <label htmlFor="photoURL">Photo URL: </label>
                            <input defaultValue={photo} className="w-full md:w-11/12 lg:w-5/6" type="text" name="photo" id="photoURL" />
                        </div>
                        <div className=" flex flex-col ">
                            <label htmlFor="item_name">Name: </label>
                            <input defaultValue={item_name} className="w-full md:w-11/12 lg:w-5/6" type="text" name="item_name" id="item_name" />
                        </div>
                        <div className=" flex flex-col ">
                            <label htmlFor="subcategory_Name">Subcategory Name: </label>
                            <input defaultValue={subcategory_Name} className="w-full md:w-11/12 lg:w-5/6" type="text" name="subcategory_Name" id="subcategory_Name" />
                        </div>
                        <div className=" flex flex-col ">
                            <label htmlFor="description">Description: </label>
                            <input defaultValue={description} className="w-full md:w-11/12 lg:w-5/6" type="text" name="description" id="description" />
                        </div>
                        <div className=" flex flex-col ">
                            <label htmlFor="Price">Price: </label>
                            <input defaultValue={Price} className="w-full md:w-11/12 lg:w-5/6" type="text" name="Price" id="Price" />
                        </div>
                        <div className=" flex flex-col ">
                            <label htmlFor="rating">Rating: </label>
                            <input defaultValue={rating} className="w-full md:w-11/12 lg:w-5/6" type="text" name="rating" id="rating" />
                        </div>
                        <div className=" flex flex-col ">
                            <label htmlFor="customization">Customization: </label>
                            <input defaultValue={customization} className="w-full md:w-11/12 lg:w-5/6" type="text" name="customization" id="customization" />
                        </div>
                        <div className=" flex flex-col ">
                            <label htmlFor="processing_time">Processing Time: </label>
                            <input defaultValue={processing_time} className="w-full md:w-11/12 lg:w-5/6" type="text" name="processing_time" id="processing_time" />
                        </div>
                        <div className=" flex flex-col ">
                            <label htmlFor="stockStatus">Stock Status: </label>
                            <input defaultValue={stockStatus} className="w-full md:w-11/12 lg:w-5/6" type="text" name="stockStatus" id="stockStatus" />
                        </div>
                        <div className=" flex flex-col ">
                            <label htmlFor="Email">Email: </label>
                            <input defaultValue={Email} className="w-full md:w-11/12 lg:w-5/6" type="text" name="Email" id="Email" />
                        </div>
                        <div className=" flex flex-col ">
                            <label htmlFor="Name">Name: </label>
                            <input defaultValue={Name} className="w-full md:w-11/12 lg:w-5/6" type="text" name="Name" id="Name" />
                        </div>
                        <div>
                            <input className="btn" type="submit" value="Update" />
                        </div>
                    </form>
                </div>
            </dialog>
        </>
    );
};

export default List_Craft_Card;