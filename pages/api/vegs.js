import sql from "/components/utils/postgres"

export default async function handler(req, res) {

    const vegs = await sql `
        select * from veg
    `;

    res.json(vegs);
}