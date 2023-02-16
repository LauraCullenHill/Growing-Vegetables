import sql from "@/utils/postgres";

export default async function handler(req, res) {
    const id = req.query.id;

    if (id === null || id === undefined) {
        res.status(400).json({ message: "Missing id" });
        return;
    }

    const vegs = await sql`
        select * from vegs
        where id = ${id}
    `;

    if (vegs.length < 1) {
        res.status(404).json({ message: "Vegetable not found" });
        return;
    }

    const foundVeg = vegs[0];

    res.json({ veg: foundVeg });
}