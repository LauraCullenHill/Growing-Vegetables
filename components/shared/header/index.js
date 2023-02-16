export default function Header({ name }) {
    return (
        <div className="bg-white-100 w-full max-w-6xl mx-auto py-4 px-4 font-manrope">
            <h1 className="font-bold text-4xl font-manrope">{name}</h1>
        </div>
    );
}