import VegsGrid from "@/components/vegs/veg-grid";
import Content from "@/components/shared/content";
import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";

export default function VegsPage() {
    return (
        <div className="w-full">
            <Header name="Vegs" />

            <Content>
                <div className="w-full max-w-6xl mx-auto mt-8">
                    <VegsGrid />
                </div>
            </Content>

            <Footer title="Home Page" href="/" />
        </div>
    );
}