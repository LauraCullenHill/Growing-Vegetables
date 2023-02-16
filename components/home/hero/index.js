export default function Hero({ imgUrl, title, subtitle }) {
    return (
        <div className="w-full max-w-6xl mx-auto">
            <div className="w-full flex flex-row space-x-2 py-4">
                <div className="w-2/12">
                    <img src={imgUrl} className="w-full" />
                </div>
                <div className="w-10/12">
                    <h1 className="text-4xl font-manrope-800">{title}</h1>
                    <p className="text-xl font-manrope-200 text-black">{subtitle}</p>
                </div>
            </div>
        </div>
    )
}