import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import CardCraft from "../CardCraft/CardCraft";

const Craft_Section = () => {
    const { user } = useContext(AuthContext);
    const [crafts, setCrafts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/crafts')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setCrafts(data);
            })
    }, [user])

    return (
        <div className="grid grid-cols-3 gap-4">
            {
                crafts.slice(0,3).map(craft => <CardCraft key={craft._id} craft={craft}></CardCraft>)
            }
        </div>
    );
};

export default Craft_Section;