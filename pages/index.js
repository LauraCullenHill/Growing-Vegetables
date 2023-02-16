import Hero from "@/components/home/hero";
import Topics from "@/components/home/topics";
import Content from "@/components/shared/content";
import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [state, setState] = useState({});

  const handleClick = () => {
    alert("It's me, Hi!");

    // make API call

    router.push("/vegetables");
    // navigate to the vegetabless page
  }

  return (
    <div className="w-full">
      <Header name="Grow Your Own" />

      <Hero
        imgUrl="/assets/garden.jpg"
        title="Welcome"
        subtitle="to my guide to british growing"
      />

      <Content>
        <div className="w-full flex flex-col">

          <Topics />


         <div className="hidden md:block">
          <button
              className="bg-green-800 px-2 py-1"
              onClick={handleClick}
            >
              Welcome
            </button>
         </div>
        </div>
      </Content>
      
      <Footer href="/pages/vegetables" title="Vegetables page" />
    </div>
  )
}