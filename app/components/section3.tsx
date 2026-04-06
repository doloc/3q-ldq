"use client";
import { useState, useCallback, useRef } from "react";

const ITEMS = [
    { id: 0, src: "/images/section3_char-3.png", label: "Char 3" },   // 12h (top)
    { id: 1, src: "/images/section3_char-1.png", label: "Char 1" },   // 3h (right)
    { id: 2, src: "/images/section3_char-2.png", label: "Char 2" },   // 6h (bottom)
    { id: 3, src: "/images/section3_reward.png", label: "Reward" },    // 9h (left)
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
        // Total steps: spin several full rounds + land on winner
        const fullRounds = 3 + Math.floor(Math.random() * 2); // 3-4 full rounds
        const totalSteps = fullRounds * 4 + winnerIdx;

        let currentStep = 0;
        let elapsed = 0;

        const step = () => {
            const idx = currentStep % 4;
            setHighlightIdx(idx);
            currentStep++;

            if (currentStep <= totalSteps) {
                // Easing: start fast, end slow
                const progress = currentStep / totalSteps;
                let delay: number;
                if (progress < 0.3) {
                    // Accelerate phase
                    delay = 150 - progress * 300;
                } else if (progress < 0.7) {
                    // Constant fast phase
                    delay = 60;
                } else {
                    // Decelerate phase (ease out)
                    const t = (progress - 0.7) / 0.3;
                    delay = 60 + t * t * 400;
                }
                elapsed += delay;
                addTimeout(step, delay);
            } else {
                // Spinning done — blink phase
                let blinkCount = 0;
                const maxBlinks = 6;
                const blinkInterval = 200;

                const blink = () => {
                    if (blinkCount < maxBlinks) {
                        setHighlightIdx(blinkCount % 2 === 0 ? null : winnerIdx);
                        blinkCount++;
                        addTimeout(blink, blinkInterval);
                    } else {
                        // Final selection
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
        <section className="relative w-full aspect-640/1196 md:aspect-1920/1080 bg-cover bg-center bg-no-repeat 
    bg-[url('/images/mb-news-event-bg.webp')] md:bg-[url('/images/section3_pc-bg.jpg')] flex flex-col items-center">
            <img src="/images/section3_title.png" alt="" className="mt-[2%] w-[57.23%] object-contain" />
            <div className="relative w-[31.25%] aspect-600/106 bg-cover bg-center bg-no-repeat 
            bg-[url('/images/mb-news-event-bg.webp')] md:bg-[url('/images/section3_text.png')] flex items-center justify-center">
                <p className="text-center w-[80%] text-[1.2vw] font-bold inline-block">Xin chào, Chủ Công đang có <span className="text-red-500">XXX</span> Lượt Khiếu Chiến Lữ Bố</p>
            </div>
            <div className="mt-[1%] w-full flex gap-[2%] justify-center">
                <img src="/images/section3_btn-history.png" alt="" className="w-[14%] object-contain" />
                <img src="/images/section3_btn-rule.png" alt="" className="w-[14%] object-contain" />
            </div>
            <img src="/images/section3_character.png" alt="" className="absolute right-0 bottom-0 w-[60.5%] object-contain" />
            <img src="/images/section3_vs.png" alt="" className="absolute bottom-[30%] w-[14%] object-contain" />

            {/* Diamond roulette area */}
            <div className="absolute bottom-[6%] left-[2%] w-[39.21%] aspect-753/728">
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
                                style={{
                                    width: itemSize,
                                    aspectRatio: "1/1",
                                    ...pos,
                                }}
                            >
                                <div className="relative w-full h-full">
                                    {/* Background */}
                                    <img
                                        src={isSelected ? "/images/section3_fr-bg-highlight.png" : "/images/section3_fr-bg.png"}
                                        alt=""
                                        className="absolute inset-0 w-full h-full object-contain"
                                    />
                                    {/* Character/reward image */}
                                    <img
                                        src={item.src}
                                        alt={item.label}
                                        className={`absolute inset-0 ${i === 0 || i === 2 ? "w-[75%] h-[75%] bottom-[15%]" : i === 3 ? "w-[40%] h-[40%]" : "left-[10%] bottom-[15%] w-[60%] h-[60%]"} m-auto object-contain`}
                                    />
                                    {/* Border shape — shown when highlighted or selected */}
                                    {(isHighlighted || isSelected) && (
                                        <img
                                            src="/images/section3_fr-shape.png"
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

            {/* CTA spin button */}
            <button
                onClick={handleSpin}
                disabled={spinning}
                className="absolute bottom-[5%] w-[32.5%] cursor-pointer disabled:cursor-not-allowed"
            >
                <img
                    src="/images/section3_cta.png"
                    alt="Spin"
                    className={`w-full object-contain ${spinning ? "opacity-60" : "hover:brightness-110 active:scale-95"} transition-all`}
                />
            </button>

            {/* Popup */}
            {showPopup && selectedIdx !== null && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60" onClick={closePopup}>
                    <div
                        className="relative bg-linear-to-b from-[#1a1a3e] to-[#0d0d2b] border-2 border-cyan-400 rounded-2xl p-8 text-center max-w-[400px] w-[90%] shadow-[0_0_40px_rgba(0,255,255,0.3)]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2 className="text-2xl font-bold text-cyan-300 mb-4">🎉 Chúc mừng!</h2>
                        <div className="w-[50%] mx-auto mb-4">
                            <img src={ITEMS[selectedIdx].src} alt="" className="w-full object-contain" />
                        </div>
                        <p className="text-white text-lg mb-6">
                            Bạn nhận được <span className="text-yellow-400 font-bold">{ITEMS[selectedIdx].label}</span>
                        </p>
                        <button
                            onClick={closePopup}
                            className="px-8 py-2 bg-cyan-500 hover:bg-cyan-400 text-white font-bold rounded-lg transition-colors cursor-pointer"
                        >
                            Đóng
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Section3;
