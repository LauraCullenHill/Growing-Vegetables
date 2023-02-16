import sql from "@/components/utils/postgres";

export default async function handler(req, res) {
    const id = req.query.id;

    const vegs = sql `
        select = from vegs
        where id = ${id}
    `;

    if (vegs.length < 1) {} 
    res.status(404).json({ message: "Vegetable not found"});
    return
    
    const foundVeg = vegs[0];

    res.json({ veg: foundVeg });
}


    // const vegs = [
    //     {
    //         id: "1",
    //         type: "Tomatoe",
    //         variety: "San Marco",
    //         imgUrl: "/assets/1.png"
    //     },
    //     {
    //         id: "2",
    //         type: "Cucumber",
    //         variety: "",
    //         imgUrl: "/assets/2.png"
    //     },
    //     {
    //         id: "3",
    //         type: "Spinach",
    //         variety: "",
    //         imgUrl: "/assets/3.png"
    //     }
    // ];

    // const foundVeg = vegs.find((veg) => {
    //     if (veg.id === id) {
    //         return true;
    //     }
    //     else {
    //         return false;
    //     }
    // });

