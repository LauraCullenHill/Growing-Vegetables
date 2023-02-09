export default async function handler(req, res) {
    const id = req.query.id;
    const likes = +req.query.likes;

    const vegs = await sql`
        update books
        set likes = ${likes}
        where id = ${id}
    `;

    res.json({ message: "Likes added"});
}