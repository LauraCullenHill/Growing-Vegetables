import Hero from "@/components/home/hero";
import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import { copytoclipboard } from "npm install --save react-copy-to-clipboard"
export default function SingleVeg() {
    const router = useRouter();
    const [veg, setVeg] = useState(null);
    const { vegId } = router.query;
    
    useEffect(() => {
        if (!vegId) return;

        getVeg(vegId);
    }, [vegId]);

    const getVeg = async (id) => {
        const response = await fetch(`/api/veg-by-id?id=${id}`);
        const data = await response.json();
        const { veg } = data;
        setVeg(veg);
    }

    console.log(veg);

    if (!veg) {
        return (
            <div>Loading...</div>
        )
    }
    

    return (
        <div className="w-full">
            <Header name={veg.title} />

            <Hero
                imgUrl={veg.img_Url}
                title={veg.title}
                subtitle={veg.author}
            />

            <Content>
                <div className="w-full flex flex-col">
                    <div classNmae="">
                        <copytoclipboard text=(veg.);
                    <button
                        className= ""
                        type="button"
                    >
                        Copy link to amazon
                    </button>

            </Content>
            <Footer
                title="Next veg"
                href={`/single-veg/${+veg.id + 1}`}
            />
        </div>
    )
}