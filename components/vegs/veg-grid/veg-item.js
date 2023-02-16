import Link from "next/link";
import { useState } from "react";

export default function VegItem({ veg }) {
    const [likes, setLikes] = useState(+veg.likes);

    const handleLike = async () => {
        let newLikes = likes + 1;
        setLikes(newLikes);

        const id = +veg.id;
        const response = await fetch(`/api/increase-likes?id=${id}&likes=${newLikes}`);
        const data = await response.json();
    }

    return (
        <div className="border rounded-lg p-4">
            <img src={veg.img_url} className="rounded-lg" />
            <Link href={`/single-veg/${veg.id}`} className="text-xl font-manrope">
                {veg.title}
            </Link>
            <p className="text-gray-700">{veg.variety}</p>
            <button
                onClick={handleLike}
                type="button"
                className="bg-green-500 px-2 py-1 rounded text-white"
            >
                Like ({likes} likes)
            </button>
        </div>
    )
}