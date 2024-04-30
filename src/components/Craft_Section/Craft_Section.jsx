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
        <>
            <h1 className="text-center text-5xl mt-16 font-semibold">Craft Items</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto max-w-7xl mt-8">
                {
                    crafts.slice(0, 6).map(craft => <CardCraft key={craft._id} craft={craft}></CardCraft>)
                }
            </div>
        </>
    );
};

export default Craft_Section;