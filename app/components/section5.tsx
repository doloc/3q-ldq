"use client";
import { useState } from "react";

const TABS = [
    { icon: "/images/section5_icon-fb.png", banner: "/images/section5_banner-1.jpg", alt: "Facebook" },
    { icon: "/images/section5_icon-tiktok.png", banner: "/images/section5_banner-2.jpg", alt: "TikTok" },
    { icon: "/images/section5_icon-zalo.png", banner: "/images/section5_banner-3.jpg", alt: "Zalo" },
];

const Section5 = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className="relative w-full aspect-640/1196 md:aspect-1920/1080 bg-cover bg-center bg-no-repeat 
        bg-[url('/images/mb-news-event-bg.webp')] md:bg-[url('/images/section5_pc-bg.jpg')] flex flex-col items-center">
            <img src="/images/section5_title.png" alt="" className="w-[76.3%] object-contain" />
            <div className="absolute top-[25%] left-[7%] w-[7%] aspect-135/410 flex flex-col justify-between">
                {TABS.map((tab, i) => (
                    <button key={i} onClick={() => setActiveTab(i)} className={`cursor-pointer transition-opacity ${activeTab === i ? "opacity-100" : "opacity-60 hover:opacity-80"}`}>
                        <img src={tab.icon} alt={tab.alt} className="w-full object-contain" />
                    </button>
                ))}
            </div>
            <div className="absolute top-[21%] left-[15.63%] w-[44.74%] aspect-859/706 bg-cover bg-center bg-no-repeat 
            bg-[url('/images/mb-news-event-bg.webp')] md:bg-[url('/images/section5_fr-bg.png')] flex items-center justify-center overflow-hidden">
                <img src={TABS[activeTab].banner} alt={TABS[activeTab].alt} className="w-full h-full object-cover" />
            </div>
        </section>
    )
}

export default Section5;
