"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TABS = [
    { icon: "/images/section5_icon-fb.webp", banner: "/images/section5_banner-1.webp", alt: "Facebook" },
    { icon: "/images/section5_icon-tiktok.webp", banner: "/images/section5_banner-2.webp", alt: "TikTok" },
    { icon: "/images/section5_icon-zalo.webp", banner: "/images/section5_banner-3.webp", alt: "Zalo" },
];

const Section5 = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className="relative w-full aspect-750/1080 md:aspect-1920/1080 bg-cover bg-center bg-no-repeat
        bg-[url('/images/section5_mb-bg.webp')] md:bg-[url('/images/section5_pc-bg.webp')] flex flex-col items-center">
            <motion.img
                src="/images/section5_pc-title.webp" alt=""
                className="hidden md:block w-[76.3%] object-contain"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            />
            <motion.img
                src="/images/section5_mb-title.webp" alt=""
                className="md:hidden w-[91.5%] object-contain"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            />

            {/* PC tab icons — stagger entrance */}
            <div className="hidden md:block absolute top-[25%] left-[7%] w-[7%] aspect-135/410 flex flex-col justify-between">
                {TABS.map((tab, i) => (
                    <motion.button
                        key={i}
                        onClick={() => setActiveTab(i)}
                        className={`img-btn cursor-pointer transition-opacity ${activeTab === i ? "opacity-100 anim-pulse-glow" : "opacity-60 hover:opacity-80"}`}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: activeTab === i ? 1 : 0.6, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.1, ease: "easeOut" }}
                    >
                        <img src={tab.icon} alt={tab.alt} className="w-full object-contain" />
                    </motion.button>
                ))}
            </div>

            {/* Mobile banner */}
            <div className="md:hidden mt-[31%] w-[88.4%] aspect-663/545 bg-cover bg-center bg-no-repeat
            bg-[url('/images/section5_mb-fr-bg.webp')] flex items-center justify-center overflow-hidden p-[3%]">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={activeTab}
                        src={TABS[activeTab].banner}
                        alt={TABS[activeTab].alt}
                        className="w-full h-full object-cover"
                        initial={{ opacity: 0, scale: 1.03 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.97 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                    />
                </AnimatePresence>
            </div>
            {/* Mobile tab icons */}
            <div className="md:hidden mt-[2%] w-[44%] aspect-330/78 flex justify-between">
                {TABS.map((tab, i) => (
                    <button key={i} onClick={() => setActiveTab(i)} className={`w-[26.36%] cursor-pointer transition-opacity ${activeTab === i ? "opacity-100" : "opacity-60 hover:opacity-80"}`}>
                        <img src={tab.icon} alt={tab.alt} className="w-full object-contain" />
                    </button>
                ))}
            </div>

            {/* PC banner */}
            <div className="hidden md:block absolute top-[21%] left-[15.63%] w-[44.74%] aspect-859/706 bg-cover bg-center bg-no-repeat
            bg-[url('/images/section5_pc-fr-bg.webp')] flex items-center justify-center overflow-hidden p-[1.5%]">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={activeTab}
                        src={TABS[activeTab].banner}
                        alt={TABS[activeTab].alt}
                        className="w-full h-full object-cover"
                        initial={{ opacity: 0, scale: 1.04 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.96 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                    />
                </AnimatePresence>
            </div>
        </section>
    )
}

export default Section5;
