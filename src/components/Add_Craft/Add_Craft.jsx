
const Add_Craft = () => {
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
        const Email = form.Email.value;
        const Name = form.Name.value;
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
        <div className="">
            <form onSubmit={handleSubmit}>
                <div className=" flex flex-col ">
                    <label htmlFor="photoURL">Photo URL: </label>
                    <input className="w-full md:w-11/12 lg:w-5/6" type="text" name="photo" id="photoURL" />
                </div>
                <div className=" flex flex-col ">
                    <label htmlFor="item_name">Name: </label>
                    <input className="w-full md:w-11/12 lg:w-5/6" type="text" name="item_name" id="item_name" />
                </div>
                <div className=" flex flex-col ">
                    <label htmlFor="subcategory_Name">Subcategory Name: </label>
                    <input className="w-full md:w-11/12 lg:w-5/6" type="text" name="subcategory_Name" id="subcategory_Name" />
                </div>
                <div className=" flex flex-col ">
                    <label htmlFor="description">Description: </label>
                    <input className="w-full md:w-11/12 lg:w-5/6" type="text" name="description" id="description" />
                </div>
                <div className=" flex flex-col ">
                    <label htmlFor="Price">Price: </label>
                    <input className="w-full md:w-11/12 lg:w-5/6" type="text" name="Price" id="Price" />
                </div>
                <div className=" flex flex-col ">
                    <label htmlFor="rating">Rating: </label>
                    <input className="w-full md:w-11/12 lg:w-5/6" type="text" name="rating" id="rating" />
                </div>
                <div className=" flex flex-col ">
                    <label htmlFor="customization">Customization: </label>
                    <input className="w-full md:w-11/12 lg:w-5/6" type="text" name="customization" id="customization" />
                </div>
                <div className=" flex flex-col ">
                    <label htmlFor="processing_time">Processing Time: </label>
                    <input className="w-full md:w-11/12 lg:w-5/6" type="text" name="processing_time" id="processing_time" />
                </div>
                <div className=" flex flex-col ">
                    <label htmlFor="stockStatus">Stock Status: </label>
                    <input className="w-full md:w-11/12 lg:w-5/6" type="text" name="stockStatus" id="stockStatus" />
                </div>
                <div className=" flex flex-col ">
                    <label htmlFor="Email">Email: </label>
                    <input className="w-full md:w-11/12 lg:w-5/6" type="text" name="Email" id="Email" />
                </div>
                <div className=" flex flex-col ">
                    <label htmlFor="Name">Name: </label>
                    <input className="w-full md:w-11/12 lg:w-5/6" type="text" name="Name" id="Name" />
                </div>
                <div>
                    <input className="btn" type="submit" value="Add" />
                </div>
            </form>
        </div>
    );
};

export default Add_Craft;