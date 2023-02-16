import VegItem from "./veg-item";
import { useEffect, useState } from "react";

export default function VegGrid() {
    const [vegs, setVegs] = useState([]);

    useEffect(() => {
        getVegs();
    }, []);

    const getVegs = async () => {
        const response = await fetch(`/api/vegs`);
        const data = await response.json();
        setVegs(data);
    }

    return (
        <div className="w-full grid grid-cols-3 gap-4">
            {vegs.map((veg, index) => (
                <VegItem key={index} veg={veg} />
            ))}
        </div>
    )
}