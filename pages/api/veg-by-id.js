export default function handler(req, res) {
    const id = req.query.id;

    const vegs = [
        {
            id: "1",
            type: "The Hobbit",
            variety: "J.R.R. Tolkien",
            imgUrl: "/assets/1.png"
        },
        {
            id: "2",
            type: "The Fellowship of the Ring",
            variety: "J.R.R. Tolkien",
            imgUrl: "/assets/2.png"
        },
        {
            id: "3",
            type: "Born a Crime",
            variety: "Trevor Noah",
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