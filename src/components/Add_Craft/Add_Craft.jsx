import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useLoaderData } from "react-router-dom";

const Add_Craft = () => {
    const { user } = useContext(AuthContext);
    const subCategories = useLoaderData();

    console.log(subCategories);
    const handleSubmit = e => {
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
        const Email = user.email;
        const Name = user.displayName;
        console.log(photo, item_name, subcategory_Name, description, Price, rating, customization, processing_time, stockStatus, Email, Name);
        const newData = { photo, item_name, subcategory_Name, description, Price, rating, customization, processing_time, stockStatus, Email, Name };

        fetch("http://localhost:5000/crafts", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(newData),
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                form.reset();
            })
    }
    return (
        <div className="mx-auto max-w-7xl ">
            <form onSubmit={handleSubmit} className="mx-auto pl-10">
                <div className=" flex flex-col gap-1 ">
                    <label htmlFor="photoURL">Photo URL: </label>
                    <input className="w-full md:w-11/12 lg:w-5/6 rounded-full " type="text" name="photo" id="photoURL" />
                </div>
                <div className=" flex flex-col gap-1">
                    <label htmlFor="item_name">Name: </label>
                    <input className="w-full md:w-11/12 lg:w-5/6 rounded-full" type="text" name="item_name" id="item_name" />
                </div>
                <div className=" flex flex-col gap-1 ">
                    <label htmlFor="subcategory_Name">Subcategory Name: </label>
                    <select className="select select-bordered w-full max-w-xs select-sm " name="subcategory_Name">
                        <option disabled selected>Choose a subcategory</option>
                        {subCategories.map(subcategory => (
                            <option key={subcategory._id} value={subcategory.sub_category}>{subcategory.sub_category}</option>
                        ))}
                    </select>
                </div>
                <div className=" flex flex-col gap-1 ">
                    <label htmlFor="description">Description: </label>
                    <input className="w-full md:w-11/12 lg:w-5/6 rounded-full" type="text" name="description" id="description" />
                </div>
                <div className=" flex flex-col gap-1 ">
                    <label htmlFor="Price">Price: </label>
                    <input className="w-full md:w-11/12 lg:w-5/6 rounded-full" type="text" name="Price" id="Price" />
                </div>
                <div className=" flex flex-col gap-1 ">
                    <label htmlFor="rating">Rating: </label>
                    <select className="select select-bordered w-full max-w-xs select-sm " name="rating" defaultValue={5}>
                        <option value={5}>5</option>
                        <option value={4}>4</option>
                        <option value={3}>3</option>
                        <option value={2}>2</option>
                        <option value={1}>1</option>
                    </select>
                </div>
                <div className="flex gap-10 items-center ">
                    <label>Customization:</label>
                    <div className="flex items-center gap-2">
                        <input type="radio" id="customizationYes" name="customization" value="Yes" />
                        <label htmlFor="customizationYes">Yes</label>
                    </div>
                    <div className="flex items-center gap-2">
                        <input type="radio" id="customizationNo" name="customization" value="No" />
                        <label htmlFor="customizationNo">No</label>
                    </div>
                </div>

                <div className=" flex flex-col gap-1 ">
                    <label htmlFor="processing_time">Processing Time: </label>
                    <input className="w-full md:w-11/12 lg:w-5/6 rounded-full" type="text" name="processing_time" id="processing_time" />
                </div>
                <div className=" flex flex-col gap-1 ">
                    <label htmlFor="stockStatus">Stock Status: </label>
                    <input className="w-full md:w-11/12 lg:w-5/6 rounded-full" type="text" name="stockStatus" id="stockStatus" />
                </div>
                <div className=" flex flex-col gap-1 ">
                    <label htmlFor="Email">Email: </label>
                    <input placeholder={user.email} className="w-full md:w-11/12 lg:w-5/6 rounded-full" type="text" name="Email" id="Email" disabled />
                </div>
                <div className=" flex flex-col gap-1 ">
                    <label htmlFor="Name">Name: </label>
                    <input placeholder={user.displayName} className="w-full md:w-11/12 lg:w-5/6 rounded-full" type="text" name="Name" id="Name" disabled />
                </div>
                <div className="mt-4 flex items-center justify-center">
                    <input className="btn" type="submit" value="Add" />
                </div>
            </form>
        </div>
    );
};

export default Add_Craft;