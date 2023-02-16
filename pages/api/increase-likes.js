export default async function handler(req, res) {
    const id = req.query.id;
    const likes = +req.query.likes;

    if (id === null || id === undefined) {
    res.status(400.).json({ message: "Likes is unrecognised"}

)
    const vegs = await sql`
        update vegs
        set likes = ${likes}
        where id = ${id}
    `;

    res.json({ message: "Likes added"});
    
    }
}