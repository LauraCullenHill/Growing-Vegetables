import Link from "next/link";
import { useState } from "react";

export default function VegItem({ veg }) {
    const [likes, setLikes] = useState(0);

    const handleLike = async () => {
        let newLikes = likes + 1;
        const id = veg.id;
        const response = await fetch(`/api/increase-likes?id=${id}&likes=${newLikes}`);
        const data = await response.json();
        setLikes(newLikes);
    }

    return (
        <div className="border rounded-lg p-4">
            <img src={veg.imgUrl} className="rounded-lg" />
            <p className="text-xl font-medium">{veg.type}</p>
            <p className="text-gray-700">{veg.author}</p>
            <button
                onClick={handleLike}
                type="button"
                className="bg-blue-500 px-2 py-1 rounded text-white"
            >
                Like ({likes} likes)
            </button>
        </div>
    )
}