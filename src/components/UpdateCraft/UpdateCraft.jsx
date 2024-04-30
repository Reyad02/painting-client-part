import { useContext, useEffect, useState } from "react";
import { Navigate, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthProvider";

const UpdateCraft = () => {
    const lodedCardData = useLoaderData();
    const { user } = useContext(AuthContext);
    const { _id, photo, item_name, subcategory_Name, description, Price, rating, customization, processing_time, stockStatus, Email, Name } = lodedCardData;
    const [updated, setUpdated] = useState(false);
    const [allSubCategories, setAllSubCategories] = useState([]);
    const [emailLink, setEmailLink] = useState("");


    useEffect(() => {
        if (user) {
            setEmailLink(`/list/email/${user.email}`);
        } else {
            setEmailLink("/");
        }
        fetch('http://localhost:5000/subCategory/')
            .then(res => res.json())
            .then(data => setAllSubCategories(data));
    }, [user])

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
        return <Navigate to={emailLink} />;
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
                <div className="flex flex-col">
                    <select className="select select-bordered w-full max-w-xs select-sm" name="subcategory_Name" defaultValue={subcategory_Name}>
                        {allSubCategories.map(subcategory => (
                            <option key={subcategory._id} value={subcategory.sub_category} selected={subcategory.sub_category === subcategory_Name}>
                                {subcategory.sub_category}
                            </option>
                        ))}
                    </select>
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
                    <select className="select select-bordered w-full max-w-xs select-sm" name="rating" defaultValue={rating}>
                        <option value={5}>5</option>
                        <option value={4}>4</option>
                        <option value={3}>3</option>
                        <option value={2}>2</option>
                        <option value={1}>1</option>
                    </select>
                </div>
                <div className="flex gap-10 items-center">
                    <label>Customization:</label>
                    <div className="flex items-center gap-2">
                        <input type="radio" id="customizationYes" name="customization" value="Yes" defaultChecked={customization === "Yes"} />
                        <label htmlFor="customizationYes">Yes</label>
                    </div>
                    <div className="flex items-center gap-2">
                        <input type="radio" id="customizationNo" name="customization" value="No" defaultChecked={customization === "No"} />
                        <label htmlFor="customizationNo">No</label>
                    </div>
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