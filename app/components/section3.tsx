"use client";
import { useState, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import Section3ModalRule from "./section3-modal-rule";
import ModalHistoryDamage from "./section3-modal-history-damage";
import Section3ModalFight from "./section3-modal-fight";

const ITEMS = [
    { id: 0, src: "/images/section3_char-3.webp", label: "Char 3" },   // 12h (top)
    { id: 1, src: "/images/section3_char-1.webp", label: "Char 1" },   // 3h (right)
    { id: 2, src: "/images/section3_char-2.webp", label: "Char 2" },   // 6h (bottom)
    { id: 3, src: "/images/section3_reward.webp", label: "Reward" },    // 9h (left)
];

// Positions for diamond layout: top, right, bottom, left
const POSITIONS = [
    { top: "0%", left: "50%", transform: "translate(-50%, 0)" },
    { top: "50%", right: "0%", transform: "translate(0, -50%)" },
    { bottom: "0%", left: "50%", transform: "translate(-50%, 0)" },
    { top: "50%", left: "0%", transform: "translate(0, -50%)" },
];

const Section3 = () => {
    const [spinning, setSpinning] = useState(false);
    const [highlightIdx, setHighlightIdx] = useState<number | null>(null);
    const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
    const [showPopup, setShowPopup] = useState(false);
    const timeoutRefs = useRef<NodeJS.Timeout[]>([]);
    const [showModalRule, setShowModalRule] = useState(false);
    const [showModalHistoryDamage, setShowModalHistoryDamage] = useState(false);

    const clearAllTimeouts = () => {
        timeoutRefs.current.forEach(clearTimeout);
        timeoutRefs.current = [];
    };

    const addTimeout = (fn: () => void, ms: number) => {
        const t = setTimeout(fn, ms);
        timeoutRefs.current.push(t);
        return t;
    };

    const handleSpin = useCallback(() => {
        if (spinning) return;
        setSpinning(true);
        setSelectedIdx(null);
        setShowPopup(false);
        clearAllTimeouts();

        const winnerIdx = Math.floor(Math.random() * 4);
        const fullRounds = 3 + Math.floor(Math.random() * 2);
        const totalSteps = fullRounds * 4 + winnerIdx;

        let currentStep = 0;

        const step = () => {
            const idx = currentStep % 4;
            setHighlightIdx(idx);
            currentStep++;

            if (currentStep <= totalSteps) {
                const progress = currentStep / totalSteps;
                let delay: number;
                if (progress < 0.3) {
                    delay = 150 - progress * 300;
                } else if (progress < 0.7) {
                    delay = 60;
                } else {
                    const t = (progress - 0.7) / 0.3;
                    delay = 60 + t * t * 400;
                }
                addTimeout(step, delay);
            } else {
                let blinkCount = 0;
                const maxBlinks = 6;
                const blinkInterval = 200;

                const blink = () => {
                    if (blinkCount < maxBlinks) {
                        setHighlightIdx(blinkCount % 2 === 0 ? null : winnerIdx);
                        blinkCount++;
                        addTimeout(blink, blinkInterval);
                    } else {
                        setHighlightIdx(winnerIdx);
                        setSelectedIdx(winnerIdx);
                        addTimeout(() => {
                            setShowPopup(true);
                            setSpinning(false);
                        }, 400);
                    }
                };
                addTimeout(blink, 300);
            }
        };

        step();
    }, [spinning]);

    const closePopup = () => {
        setShowPopup(false);
    };

    return (
        <section className="relative w-full aspect-750/1334 md:aspect-1920/1080 bg-cover bg-center bg-no-repeat
    bg-[url('/images/section3_mb-bg.webp')] md:bg-[url('/images/section3_pc-bg.webp')] flex flex-col items-center">
            <motion.img
                src="/images/section3_title.webp" alt=""
                className="mt-[2%] md:mt-[2%] w-[89%] md:w-[57.23%] object-contain"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            />
            <motion.div
                className="relative mt-[2.5%] md:mt-0 w-[63.47%] md:w-[31.25%] aspect-600/106 bg-cover bg-center bg-no-repeat
                bg-[url('/images/section3_text.webp')] flex items-center justify-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <p className="text-center w-[50%] text-[3vw] md:text-[1.4vw] inline-block">Xin chào, Chủ Công đang có <span className="text-red-500">XXX</span> Lượt Khiếu Chiến Lữ Bố</p>
            </motion.div>
            <motion.div
                className="z-50 mt-[3%] md:mt-[1%] w-[65%] md:w-full flex gap-[2%] justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                <img src="/images/section3_btn-history.webp" alt="" className="w-[46.8%] md:w-[14%] object-contain img-btn" onClick={() => setShowModalHistoryDamage(true)} />
                <img src="/images/section3_btn-rule.webp" alt="" className="w-[46.8%] md:w-[14%] object-contain img-btn" onClick={() => setShowModalRule(true)} />
            </motion.div>

            {/* Main characters — slide in from right */}
            <motion.img
                src="/images/section3_mb-main-character.webp" alt=""
                className="md:hidden absolute right-0 bottom-[11%] w-[77.6%] object-contain"
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            />
            <motion.img
                src="/images/section3_pc-main-character.webp" alt=""
                className="hidden md:block absolute right-0 bottom-0 w-[60.5%] object-contain"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            />

            {/* VS separator — pulse */}
            <img
                src="/images/section3_vs.webp" alt=""
                className="absolute bottom-[35%] md:bottom-[30%] w-[28.9%] md:w-[14%] object-contain anim-vs-pulse"
            />

            {/* Diamond roulette area */}
            <div className="absolute bottom-[40%] md:bottom-[6%] left-[0%] w-[62.53%] md:w-[39.21%] aspect-753/728">
                <div className="relative w-full h-full">
                    {ITEMS.map((item, i) => {
                        const isHighlighted = highlightIdx === i;
                        const isSelected = selectedIdx === i;
                        const pos = POSITIONS[i];
                        const itemSize = "46%";

                        return (
                            <div
                                key={item.id}
                                className="absolute"
                                style={{ width: itemSize, aspectRatio: "1/1", ...pos }}
                            >
                                <div className="relative w-full h-full">
                                    <img
                                        src={isSelected ? "/images/section3_fr-bg-highlight.webp" : "/images/section3_fr-bg.webp"}
                                        alt=""
                                        className="absolute inset-0 w-full h-full object-contain"
                                    />
                                    <img
                                        src={item.src}
                                        alt={item.label}
                                        className={`absolute inset-0 ${i === 0 || i === 2 ? "w-[75%] h-[75%] bottom-[15%]" : i === 3 ? "w-[40%] h-[40%]" : "left-[10%] bottom-[15%] w-[60%] h-[60%]"} m-auto object-contain`}
                                    />
                                    {(isHighlighted || isSelected) && (
                                        <img
                                            src="/images/section3_fr-shape.webp"
                                            alt=""
                                            className="absolute inset-0 w-full h-full object-contain z-20 pointer-events-none"
                                        />
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* CTA spin button — pulse when idle */}
            <button
                onClick={handleSpin}
                disabled={spinning}
                className={`absolute bottom-[9%] md:bottom-[5%] w-[63%] md:w-[32.5%] cursor-pointer disabled:cursor-not-allowed img-btn ${!spinning ? "anim-btn-pulse" : ""}`}
            >
                <img
                    src="/images/section3_cta.webp"
                    alt="Spin"
                    className={`w-full object-contain ${spinning ? "opacity-60" : ""} transition-opacity`}
                />
            </button>

            {/* Popup */}
            {showPopup && selectedIdx !== null && (
                selectedIdx === 3 ? <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60" onClick={closePopup}>
                    <motion.div
                        className="relative bg-linear-to-b from-[#1a1a3e] to-[#0d0d2b] border-2 border-cyan-400 rounded-2xl p-8 text-center max-w-[400px] w-[90%] shadow-[0_0_40px_rgba(0,255,255,0.3)] font-SVN-GilroyBold"
                        onClick={(e) => e.stopPropagation()}
                        initial={{ scale: 0.7, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 300, damping: 22 }}
                    >
                        <h2 className="text-2xl text-cyan-300 mb-4">🎉 Chúc mừng!</h2>
                        <div className="w-[50%] mx-auto mb-4">
                            <img src={ITEMS[selectedIdx].src} alt="" className="w-full object-contain anim-float" />
                        </div>
                        <p className="text-white text-lg mb-6">
                            Bạn nhận được <span className="text-yellow-400">{ITEMS[selectedIdx].label}</span>
                        </p>
                        <button
                            onClick={closePopup}
                            className="px-8 py-2 bg-cyan-500 hover:bg-cyan-400 text-white rounded-lg transition-colors cursor-pointer"
                        >
                            Đóng
                        </button>
                    </motion.div>
                </div> :
                <Section3ModalFight idx={selectedIdx} showPopup={showPopup} setShowPopup={setShowPopup} />
            )}

            {showModalRule && (
                <Section3ModalRule showPopup={showModalRule} setShowPopup={setShowModalRule} />
            )}

            {showModalHistoryDamage && (
                <ModalHistoryDamage showPopup={showModalHistoryDamage} setShowPopup={setShowModalHistoryDamage} />
            )}
        </section>
    );
};

export default Section3;
