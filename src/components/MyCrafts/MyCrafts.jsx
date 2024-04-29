import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import List_Craft_Card from "../List_Craft_Card/List_Craft_Card";

const MyCrafts = () => {
    const { user } = useContext(AuthContext);
    const allCrafts = useLoaderData();
    const [toatlCrafts, setAllCrafts] = useState(allCrafts.filter(craft => craft.Email === user.email))

    return (
        <div className="grid grid-cols-3 gap-10 mx-auto max-w-7xl">
            {
                toatlCrafts.map(craft => <List_Craft_Card key={craft._id} craft={craft} setAllCrafts={setAllCrafts} toatlCrafts={toatlCrafts}></List_Craft_Card>)
            }
        </div>
    );
};

export default MyCrafts;