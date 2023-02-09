export default function handler(req, res) {
    const id = req.query.id;

    const vegs = [
        {
            id: "1",
            type: "Tomatoe",
            variety: "San Marco",
            imgUrl: "/assets/1.png"
        },
        {
            id: "2",
            type: "Cucumber",
            variety: "",
            imgUrl: "/assets/2.png"
        },
        {
            id: "3",
            type: "Spinach",
            variety: "",
            imgUrl: "/assets/3.png"
        }
    ];

    const foundVeg = vegs.find((veg) => {
        if (veg.id === id) {
            return true;
        }
        else {
            return false;
        }
    });

    res.json({ veg: foundVeg });
}