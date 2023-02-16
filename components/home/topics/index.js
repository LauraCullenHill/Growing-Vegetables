import topics from "./topics";

export default function Topics() {
    return (
        <div className="w-full flex flex-col mt-5 mb-10">
            <h3 className="font-manrope text-2xl">
                Each vegetable page identifies:
            </h3>
            <div>
                <ul className="list-disc">
                    {topics.map((topic, index) => {
                        return <li key={index}>{topic}</li>
                    })}
                </ul>
            </div>
        </div>
    )
}