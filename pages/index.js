
import Hero from "/components/home/hero";
import Topics from "/components/home/topics";
import Content from "/components/shared/content";
import Footer from "/components/shared/footer";
import Header from "/components/shared/header";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [state, setState] = useState({});

  const handleClick = () => {
    alert("you clicked the button!");

    // make API call

    router.push("/vegs");
    // navigate to the vegs page
  }

  return (
    <div className="w-full">
      <Header name="Home" />

      <Hero
        imgUrl="/assets/profile.jpg"
        title="Grow Your Own"
        subtitle="A simple guide to British growing"
      />

      <Content>
        <div className="w-full flex flex-col">

          <Topics />


         <div>
          <button
              className="bg-green-800 px-2 py-1 rounded"
              onClick={handleClick}
            >
              Click me!!!
            </button>
         </div>
        </div>
      </Content>
      
      <Footer href="/vegetables" title="Vegetables page" />
    </div>
  )
}