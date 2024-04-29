import { useState } from "react";
import { Navigate, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCraft = () => {
    const lodedCardData = useLoaderData();
    const { _id, photo, item_name, subcategory_Name, description, Price, rating, customization, processing_time, stockStatus, Email, Name } = lodedCardData;
    const [updated, setUpdated] = useState(false);

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
        const newData = { photo, item_name, subcategory_Name, description, Price, rating, customization, processing_time, stockStatus, Email, Name };

        fetch(`http://localhost:5000/crafts/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newData),
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Updated Successfully!",
                        icon: "success"
                    })
                        .then(() => {
                            setUpdated(true);
                        });
                }
            })
    }
    if (updated) {
        return <Navigate to={"/list"} />;
    }
    return (
        <div className="mx-auto max-w-7xl">
            <form onSubmit={handleUpdate} className="space-y-2">
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
    );
};

export default UpdateCraft;