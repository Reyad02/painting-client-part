import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import List_Craft_Card from "../List_Craft_Card/List_Craft_Card";

const MyCrafts = () => {
    const { user } = useContext(AuthContext);
    const allCrafts = useLoaderData();
    console.log(allCrafts)
    const [toatlCrafts, setAllCrafts] = useState(allCrafts)

    const handleFilterChange = (filterValue) => {

        let filteredCrafts;
        if (filterValue === "Yes") {
            filteredCrafts = allCrafts.filter(craft => craft.customization === "Yes");
        } else if (filterValue === "No") {
            filteredCrafts = allCrafts.filter(craft => craft.customization === "No");
        } else {
            filteredCrafts = allCrafts;
        }
        setAllCrafts(filteredCrafts);

        // Update the state with the filtered crafts
    };

    return (
        <div className=" mx-auto max-w-7xl">
            <div className="flex justify-center items-center mb-4 gap-2">
                <p>Customization: </p>
                <div className="dropdown dropdown-bottom">
                    <div tabIndex={0} role="button" className="btn m-1">Neutral</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box md:w-52">
                        <li><a onClick={() => handleFilterChange("Neutral")}>Neutral</a></li>
                        <li><a onClick={() => handleFilterChange("Yes")}>Yes</a></li>
                        <li><a onClick={() => handleFilterChange("No")}>No</a></li>
                    </ul>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    toatlCrafts.map(craft => <List_Craft_Card key={craft._id} craft={craft} setAllCrafts={setAllCrafts} toatlCrafts={toatlCrafts}></List_Craft_Card>)
                }
            </div>
        </div>
    );
};

export default MyCrafts;