"use client";
import { motion } from "framer-motion";

const Section4 = () => {
    return (
        <section className="relative w-full aspect-750/1334 md:aspect-1920/1080 bg-cover bg-center bg-no-repeat
        bg-[url('/images/section4_mb-bg.webp')] md:bg-[url('/images/section4_pc-bg.webp')] flex flex-col items-center">
            <motion.img
                src="/images/section4_title.webp" alt=""
                className="mt-[6%] md:mt-0 w-[91.5%] md:w-[69%] object-contain"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            />
            {/* Mobile version */}
            <div className="md:hidden mt-[45%] w-[72.5%] aspect-600/106 bg-cover bg-center bg-no-repeat
            bg-[url('/images/section4_text.webp')] flex items-center justify-center">
                <p className="text-center w-[80%] text-[3vw] inline-block">Xin chào, Chủ Công đang có <span className="text-red-500">XXX</span> Điểm sát thương</p>
            </div>
            {/* PC version */}
            <div className="hidden md:flex absolute top-[16%] right-[20%] w-[31.25%] aspect-600/106 bg-cover bg-center bg-no-repeat
            bg-[url('/images/section4_text.webp')] items-center justify-center">
                <p className="text-center w-[50%] text-[1.4vw] inline-block">Xin chào, Chủ Công đang có <span className="text-red-500">XXX</span> Điểm sát thương</p>
            </div>
            {/* Mobile version */}
            <motion.div
                className="md:hidden mt-[3%] w-[94.5%] aspect-709/712 bg-cover bg-center bg-no-repeat
                bg-[url('/images/section4_mb-fr-bg.webp')] flex flex-col overflow-hidden px-[4%] py-[4%]"
                style={{ fontFamily: '"UTM Talling", Arial, sans-serif', letterSpacing: '0.075em', lineHeight: 1.2 }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
                {/* Header */}
                <div className="flex text-[#2b2d5e] text-[2.8vw]">
                    <div className="w-[25%] text-center py-[1.2%]">Hạng</div>
                    <div className="w-[40%] text-center py-[1.2%]">Chủ Công</div>
                    <div className="w-[35%] text-center py-[1.2%]">Điểm Sát Thương</div>
                </div>
                {/* Rows */}
                <div className="flex-1 overflow-y-auto">
                    {Array.from({ length: 10 }, (_, i) => (
                        <motion.div
                            key={i}
                            className={`flex text-[#2b2d5e] text-[2.6vw] ${i % 2 === 0 ? "bg-[#DCC8EF]" : ""}`}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.35, delay: i * 0.05, ease: "easeOut" }}
                        >
                            <div className="w-[25%] text-center py-[2%]">{i + 1}</div>
                            <div className="w-[40%] text-center py-[2%]">ABC</div>
                            <div className="w-[35%] text-center py-[2%]">25000</div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
            {/* PC version */}
            <motion.div
                className="hidden md:block absolute top-[28%] right-[13%] w-[44.74%] aspect-859/706 bg-cover bg-center bg-no-repeat
                bg-[url('/images/section4_pc-fr-bg.webp')] flex flex-col overflow-hidden px-[2%] py-[2%]"
                style={{ fontFamily: '"UTM Talling", Arial, sans-serif', letterSpacing: '0.075em', lineHeight: 1.2 }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            >
                {/* Header */}
                <div className="flex text-[#2b2d5e] text-[1.55vw]">
                    <div className="w-[25%] text-center py-[1.2%]">Hạng</div>
                    <div className="w-[40%] text-center py-[1.2%]">Chủ Công</div>
                    <div className="w-[35%] text-center py-[1.2%]">Điểm Sát Thương</div>
                </div>
                {/* Rows */}
                <div className="flex-1 overflow-y-auto">
                    {Array.from({ length: 10 }, (_, i) => (
                        <motion.div
                            key={i}
                            className={`flex text-[#2b2d5e] text-[1.4vw] ${i % 2 === 0 ? "bg-[#DCC8EF]" : ""}`}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.35, delay: i * 0.05, ease: "easeOut" }}
                        >
                            <div className="w-[25%] text-center py-[1%]">{i + 1}</div>
                            <div className="w-[40%] text-center py-[1%]">ABC</div>
                            <div className="w-[35%] text-center py-[1%]">25000</div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
};

export default Section4;
