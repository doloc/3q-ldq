"use client";

import Image from "next/image";
import { useRef } from "react";
import Hero from "./components/hero";
import Floating from "./components/floating";
import Section2 from "./components/section2";
import Section3 from "./components/section3";

export default function Home() {
  const topRef = useRef<HTMLDivElement>(null);

  const scrollToTop = () => {
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  
  return (
    <div ref={topRef} className="w-full h-full">
      <Hero />
      <Section2 />
      <Section3 />
      <Floating onScrollToTop={scrollToTop} />
      {/* <Header />
      <Hero />
      <NewsEvent />
      <Feature />
      <Footer />
      <Floating onScrollToTop={scrollToTop} /> */}
    </div>
  );
}
