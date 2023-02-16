import sql from "/components/utils/postgres"

export default async function handler(req, res) {

    const veg = await sql `
        select * from veg
    `;

    res.json(veg);
}