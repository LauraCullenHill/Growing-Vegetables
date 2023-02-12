import Hero from "@/components/home/hero";
import Content from "@/components/shared/content";
import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import { CopyToClipboard } from 'react-copy-to-clipboard';

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
            <Header name={veg.type} />

            <Hero
                imgUrl={veg.img_url}
                title={veg.type}
                subtitle={veg.variety}
            />

            <Content>
                <div className="w-full flex flex-col">

                    <div className="">
                        <CopyToClipboard text={veg.linkToPurchase}>
                            <button
                                className="bg-white-500 text-black px-4 py-2 rounded-lg"
                                type="button"
                            >
                                Copy link to Purchase
                            </button>
                        </CopyToClipboard>
                    </div>

                    <a href={veg.linkToPurchase} target="_blank">
                        Buy online
                    </a>

                </div>
            </Content>

            <Footer
                title="Next veg"
                href={`/single-veg/${+veg.id + 1}`}
            />
        </div>
    )
}