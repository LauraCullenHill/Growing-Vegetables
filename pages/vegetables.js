import VegGrid from "/components/vegs/veg-grid/index";
import Content from "/components/shared/content";
import Footer from "/components/shared/footer";
import Header from "/components/shared/header";
import Link from "next/link";

export default function VegsPage() {
    return (
        <div className="w-full">
            <Header name="Vegetables" />

            <Content>
                <div className="w-full max-w-6xl mx-auto mt-8">
                    <VegGrid/>
                </div>
            </Content>

            <Footer title="Home" href="/" />
        </div>
    );
}