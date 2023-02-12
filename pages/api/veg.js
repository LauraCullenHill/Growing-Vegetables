import sql from "/.env"

export default async function handler(req, res) {

    const vegs = await sql `
        select * from vegs
    `

    res.json(vegs);
}