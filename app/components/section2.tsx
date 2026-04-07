"use client";

import { useEffect, useState } from "react";
import { motion, type Easing } from "framer-motion";
import Popup from "./popup";

const MILESTONES = [200_000, 500_000, 1_000_000, 2_000_000, 5_000_000];

const getProgressPercent = (score: number): number => {
  const n = MILESTONES.length;
  if (score <= 0) return 0;
  if (score >= MILESTONES[n - 1]) return 100;
  for (let i = 0; i < n - 1; i++) {
    if (score >= MILESTONES[i] && score < MILESTONES[i + 1]) {
      const segFraction = (score - MILESTONES[i]) / (MILESTONES[i + 1] - MILESTONES[i]);
      return ((i + segFraction) / (n - 1)) * 100;
    }
  }
  return 0;
};

const EASE_OUT: Easing = "easeOut";

const MilestoneList = ({ currentScore }: { currentScore: number }) => (
  <div className="absolute w-full left-[14%] right-0 top-[2%] bottom-[2%] flex flex-col justify-between">
    {[
      { src: "/images/section2_milestone-200k.webp", value: 200_000, width: "72.45%" },
      { src: "/images/section2_milestone-500k.webp", value: 500_000, width: "72.45%" },
      { src: "/images/section2_milestone-1m.webp",   value: 1_000_000, width: "72.45%" },
      { src: "/images/section2_milestone-2m.webp",   value: 2_000_000, width: "72.45%" },
      { src: "/images/section2_milestone-5m.webp",   value: 5_000_000, width: "85.67%" },
    ].map(({ src, value, width }, idx) => {
      const unlocked = currentScore >= value;
      return (
        <motion.div
          key={value}
          className="relative inline-block"
          style={{ width }}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.5, delay: idx * 0.08, ease: EASE_OUT }}
        >
          <img src={src} alt="" className="w-full object-contain" />
          {!unlocked && (
            <div className="absolute inset-0 rounded-sm" style={{ background: "rgba(10, 15, 50, 0.55)" }} />
          )}
        </motion.div>
      );
    })}
  </div>
);

const ProgressBar = ({ progressPercent }: { progressPercent: number }) => (
  <div className="absolute left-0 top-[2%] bottom-[2%] w-[15%] flex justify-center">
    <div className="absolute inset-y-0 rounded-sm" style={{ width: "28%", background: "#13153b", border: "1px solid #00fff3" }} />
    <motion.div
      className="absolute top-0 rounded-sm"
      style={{ width: "28%", background: "#00fff3" }}
      initial={{ height: "0%" }}
      whileInView={{ height: `${progressPercent}%` }}
      viewport={{ once: true, amount: 0 }}
      transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
    >
      <div className="absolute rounded-sm" style={{ inset: "0 12%", background: "linear-gradient(180deg, #ffffff 0%, #ffff21 100%)" }}>
        <div className="absolute rounded-sm" style={{ inset: "0 20%", background: "linear-gradient(180deg, #ffeeaf 0%, #ffbf11 100%)" }} />
      </div>
    </motion.div>
    <img
      src="/images/section2_icon-progress.webp"
      alt=""
      className="absolute object-contain w-[60%] anim-float-slow"
      style={{ top: `${progressPercent}%`, transform: "translateY(-50%)" }}
    />
  </div>
);

const CheckinGrid = ({ checkedInDays }: { checkedInDays: number[] }) => (
  <div className="grid grid-cols-4 gap-[2%] w-[90%] h-[85%]">
    {Array.from({ length: 12 }, (_, i) => {
      const day = i + 1;
      const checkedIn = checkedInDays.includes(day);
      return (
        <motion.div
          key={day}
          className="relative flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.35, delay: i * 0.04, ease: EASE_OUT }}
        >
          <div
            className="relative w-full aspect-square bg-contain bg-center bg-no-repeat flex items-center justify-center"
            style={{ backgroundImage: "url('/images/section2_fr-box.webp')" }}
          >
            {checkedIn && <div className="absolute inset-0 rounded-md bg-black/30" />}
            <span className="relative z-10 text-[#1a2a5e] text-[clamp(12px,2.5vw,32px)] leading-none">{day}</span>
          </div>
          {checkedIn && (
            <img src="/images/lable-check-in.webp" alt="Đã điểm danh" className="absolute bottom-[15%] translate-y-[30%] w-[110%] object-contain z-20" />
          )}
        </motion.div>
      );
    })}
  </div>
);

const Section2 = () => {
  const [currentScore, setCurrentScore] = useState(1_000_000);
  const [checkedInDays, setCheckedInDays] = useState<number[]>([1, 2]);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    fetch("/api/score").then((res) => res.json()).then((data) => { setCurrentScore(data.score ?? 0); }).catch(() => {});
    fetch("/api/checkin").then((res) => res.json()).then((data) => { setCheckedInDays(data.checkedInDays ?? []); }).catch(() => {});
  }, []);

  const progressPercent = getProgressPercent(currentScore);

  return (
    <>
    <section className="relative w-full aspect-750/1334 md:aspect-1920/1080 bg-cover bg-center bg-no-repeat
    bg-[url('/images/section2_mb-bg.webp')] md:bg-[url('/images/section2_pc-bg.webp')] flex flex-col items-center">
        <motion.img
          src="/images/section2_title.webp" alt=""
          className="mt-[3%] md:mt-[1%] w-[77%] md:w-[52.7%] object-contain"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />

        <div className="md:hidden mt-[2%] relative w-[63%] aspect-573/101 bg-cover bg-center bg-no-repeat
            bg-[url('/images/section2_fr-title.webp')] flex items-center justify-center">
            <p className="text-center w-[50%] text-[3vw] md:text-[1.4vw] inline-block">Xin chào, Chủ Công đang có <span className="text-red-500">XXX</span> Lượt Khiếu Chiến Lữ Bố</p>
        </div>

        {/* Mobile version */}
        <div className="md:hidden mt-[2%] relative w-[90.13%] aspect-820/674 bg-cover bg-center bg-no-repeat
          bg-[url('/images/section2_fr-rewards.webp')] flex items-center justify-center">
          <CheckinGrid checkedInDays={checkedInDays} />
        </div>
        {/* Mobile version */}
        <div className="md:hidden mt-[5%] w-[89%] flex items-center justify-between">
          <img src="/images/section2_btn-get-tickets.webp" alt="" className="w-[31.1%] object-contain img-btn" />
          <img src="/images/section2_btn-history.webp" alt="" className="w-[31.1%] object-contain img-btn" />
          <img src="/images/section2_btn-checkin.webp" alt="" className="w-[31.1%] object-contain img-btn anim-btn-pulse" />
        </div>
        {/* Mobile version */}
        <div className="md:hidden mt-[5%] w-[94%] grid grid-cols-2">
          <div className="col-span-1 aspect-321/358 flex flex-col gap-[5%]">
            <div className="relative w-full h-[96%]">
              <MilestoneList currentScore={currentScore} />
              <ProgressBar progressPercent={progressPercent} />
            </div>
          </div>
          <div className="col-span-1 aspect-321/358 flex flex-col-reverse items-center">
            <img src="/images/section2_btn-rewards.webp" alt="" className="w-[85%] object-contain cursor-pointer img-btn" onClick={() => setShowPopup(true)} />
          </div>
        </div>

        {/* PC version */}
        <div className="hidden md:flex absolute bottom-[1%] left-[12%] w-[32.7%] aspect-628/756 flex-col gap-[5%]">
            <div className="relative w-full h-[83%]">
              <MilestoneList currentScore={currentScore} />
              <ProgressBar progressPercent={progressPercent} />
            </div>
            <img src="/images/section2_btn-rewards.webp" alt="" className="w-[85%] object-contain cursor-pointer img-btn" onClick={() => setShowPopup(true)} />
        </div>
        <div className="hidden md:flex absolute bottom-[1%] right-[10%] w-[42.7%] aspect-820/898 flex-col items-center justify-between">
            <div className="relative w-[70%] aspect-573/101 bg-cover bg-center bg-no-repeat
            bg-[url('/images/section2_fr-title.webp')] flex items-center justify-center">
                <p className="text-center w-[50%] text-[1.4vw] inline-block">Xin chào, Chủ Công đang có <span className="text-red-500">XXX</span> Lượt Khiếu Chiến Lữ Bố</p>
            </div>
            <div className="relative w-full aspect-820/674 bg-cover bg-center bg-no-repeat
            bg-[url('/images/section2_fr-rewards.webp')] flex items-center justify-center">
                <CheckinGrid checkedInDays={checkedInDays} />
            </div>
            <div className="w-full flex items-center justify-between">
                <img src="/images/section2_btn-get-tickets.webp" alt="" className="w-[31.1%] object-contain img-btn" />
                <img src="/images/section2_btn-history.webp" alt="" className="w-[31.1%] object-contain img-btn" />
                <img src="/images/section2_btn-checkin.webp" alt="" className="w-[31.1%] object-contain img-btn anim-btn-pulse" />
            </div>
        </div>
    </section>
    {showPopup && (
      <Popup
        title="Danh sách phần thưởng"
        content={
          <div className="w-[85%] mt-[3%] flex flex-col items-center text-[#2b2d5e] text-[0.9vw]">
            <p className="italic text-[1.1vw]">Tam Anh Xuất Thế</p>
            <p className="italic text-[1.1vw]">Quần Hùng Tranh Bá</p>
            <p className="mt-[1.5%] text-center leading-snug">
              Mỗi mốc quà được mở khoá, toàn bộ Server sẽ nhận được<br />
              phần thưởng thông qua hòm thư ingame
            </p>
            <p className="italic text-[#3b82f6] mt-[0.5%]">Danh sách phần thưởng</p>
            <table className="w-full mt-[2%] border-collapse border border-[#2b2d5e]/30 text-[0.85vw]">
              <thead>
                <tr className="bg-[#d4b8e0]/60">
                  <th className="border border-[#2b2d5e]/30 py-[0.8%] w-[35%]">Sát thương</th>
                  <th className="border border-[#2b2d5e]/30 py-[0.8%]">Phần thưởng</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { score: "200.000", rewards: ["Xu Triệu Hồi Cao Cấp x5", "Xu Triệu Hồi Phe x1", "KNB x2000"] },
                  { score: "500.000", rewards: ["Xu Triệu Hồi Cao Cấp x5", "Xu Triệu Hồi Phe x1", "KNB x2000"] },
                  { score: "500.000", rewards: ["Xu Triệu Hồi Cao Cấp x5", "Xu Triệu Hồi Phe x1", "KNB x2000"] },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "" : "bg-[#d4b8e0]/40"}>
                    <td className="border border-[#2b2d5e]/30 py-[1%] text-center">{row.score}</td>
                    <td className="border border-[#2b2d5e]/30 py-[1%] pl-[5%]">
                      {row.rewards.map((r, j) => <div key={j}>- {r}</div>)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        }
        onClose={() => setShowPopup(false)}
      />
    )}
    </>
  );
};

export default Section2;
