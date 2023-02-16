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


    router.push("/vegetables");
    // navigate to the vegetabless page
  }

  return (
    <div className="w-full">
      <Header name="Grow Your Own" />

      <Hero
        imgUrl="/public/assets/garden.jpg"
        title= "Welcome to"
        subtitle="A simple guide to British growing"
      />

      <Content>
        <div className="w-full flex flex-col">

          <Topics />

        </div>
      </Content>
      
      <Footer href="/vegetables" title="Vegetables page" />
    </div>
  )
