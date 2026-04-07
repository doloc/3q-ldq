"use client";

import { useEffect, useState } from "react";
import Popup from "./popup";

const MILESTONES = [200_000, 500_000, 1_000_000, 2_000_000, 5_000_000];

// Các mốc được chia đều trên UI (justify-between với 5 mốc → 0%, 25%, 50%, 75%, 100%)
// Tính % thanh progress theo vị trí mốc thay vì theo giá trị tuyến tính
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

const Section2 = () => {
  const [currentScore, setCurrentScore] = useState(1_000_000);
  const [checkedInDays, setCheckedInDays] = useState<number[]>([1, 2]);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // TODO: thay bằng URL API thực tế
    fetch("/api/score")
      .then((res) => res.json())
      .then((data) => {
        // TODO: thay `data.score` bằng field thực tế từ response
        setCurrentScore(data.score ?? 0);
      })
      .catch(() => {});

    // TODO: thay bằng URL API thực tế
    fetch("/api/checkin")
      .then((res) => res.json())
      .then((data) => {
        // TODO: thay `data.checkedInDays` bằng field thực tế từ response
        // Ví dụ response: { checkedInDays: [1, 2, 3] }
        setCheckedInDays(data.checkedInDays ?? []);
      })
      .catch(() => {});
  }, []);

  const progressPercent = getProgressPercent(currentScore);

  return (
    <>
    <section className="relative w-full aspect-750/1334 md:aspect-1920/1080 bg-cover bg-center bg-no-repeat 
    bg-[url('/images/section2_mb-bg.jpg')] md:bg-[url('/images/section2_pc-bg.jpg')] flex flex-col items-center">
        <img src="/images/section2_title.png" alt="" className="mt-[3%] md:mt-[1%] w-[77%] md:w-[52.7%] object-contain" />
        <div className="md:hidden mt-[2%] relative w-[63%] aspect-573/101 bg-cover bg-center bg-no-repeat 
            bg-[url('/images/section2_fr-title.png')] flex items-center justify-center">
            <p className="text-center w-[80%] text-[2.4vw] md:text-[1.2vw] font-bold inline-block">Xin chào, Chủ Công đang có <span className="text-red-500">XXX</span> Lượt Khiếu Chiến Lữ Bố</p>
        </div>

        {/* Mobile version */}
        <div className="md:hidden mt-[2%] relative w-[90.13%] aspect-820/674 bg-cover bg-center bg-no-repeat
          bg-[url('/images/section2_fr-rewards.png')] flex items-center justify-center">
          <div className="grid grid-cols-4 gap-[2%] w-[90%] h-[85%]">
            {Array.from({ length: 12 }, (_, i) => {
              const day = i + 1;
              const checkedIn = checkedInDays.includes(day);
              return (
                <div key={day} className="relative flex flex-col items-center">
                  {/* Box background */}
                  <div
                    className="relative w-full aspect-square bg-contain bg-center bg-no-repeat flex items-center justify-center"
                    style={{ backgroundImage: "url('/images/section2_fr-box.png')" }}
                  >
                    {/* Overlay nếu đã điểm danh */}
                    {checkedIn && (
                      <div className="absolute inset-0 rounded-md bg-black/30" />
                    )}
                    {/* Số thứ tự */}
                    <span className="relative z-10 text-[#1a2a5e] font-bold text-[clamp(12px,2.5vw,32px)] leading-none">
                      {day}
                    </span>
                  </div>
                  {/* Label điểm danh */}
                  {checkedIn && (
                    <img
                      src="/images/lable-check-in.png"
                      alt="Đã điểm danh"
                      className="absolute bottom-[15%] translate-y-[30%] w-[110%] object-contain z-20"
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
        {/* Mobile version */}
        <div className="md:hidden mt-[5%] w-[89%] flex items-center justify-between">
          <img src="/images/section2_btn-get-tickets.png" alt="" className="w-[31.1%] object-contain img-btn" />
          <img src="/images/section2_btn-history.png" alt="" className="w-[31.1%] object-contain img-btn" />
          <img src="/images/section2_btn-checkin.png" alt="" className="w-[31.1%] object-contain img-btn" />
        </div>
        {/* Mobile version */}
        <div className="md:hidden mt-[5%] w-[94%] grid grid-cols-2">
          <div className="col-span-1 aspect-321/358 flex flex-col gap-[5%]">
            <div className="relative w-full h-[96%]">
            {/* Milestone images */}
            <div className="absolute w-full left-[14%] right-0 top-[2%] bottom-[2%] flex flex-col justify-between">
                {[
                { src: "/images/section2_milestone-200k.png", value: 200_000, width: "72.45%" },
                { src: "/images/section2_milestone-500k.png", value: 500_000, width: "72.45%" },
                { src: "/images/section2_milestone-1m.png",   value: 1_000_000, width: "72.45%" },
                { src: "/images/section2_milestone-2m.png",   value: 2_000_000, width: "72.45%" },
                { src: "/images/section2_milestone-5m.png",   value: 5_000_000, width: "85.67%" },
                ].map(({ src, value, width }) => {
                const unlocked = currentScore >= value;
                return (
                    <div key={value} className="relative inline-block" style={{ width }}>
                    <img src={src} alt="" className="w-full object-contain" />
                    {!unlocked && (
                        <div
                        className="absolute inset-0 rounded-sm"
                        style={{ background: "rgba(10, 15, 50, 0.55)" }}
                        />
                    )}
                    </div>
                );
                })}
            </div>

            {/* Progress bar */}
            <div className="absolute left-0 top-[2%] bottom-[2%] w-[15%] flex justify-center">
                <div
                className="absolute inset-y-0 rounded-sm"
                style={{ width: "28%", background: "#13153b", border: "1px solid #00fff3" }}
                />
                <div
                className="absolute top-0 rounded-sm"
                style={{ width: "28%", height: `${progressPercent}%`, background: "#00fff3" }}
                >
                <div
                    className="absolute rounded-sm"
                    style={{
                    inset: "0 12%",
                    background: "linear-gradient(180deg, #ffffff 0%, #ffff21 100%)",
                    }}
                >
                    <div
                    className="absolute rounded-sm"
                    style={{
                        inset: "0 20%",
                        background: "linear-gradient(180deg, #ffeeaf 0%, #ffbf11 100%)",
                    }}
                    />
                </div>
                </div>
                <img
                src="/images/section2_icon-progress.png"
                alt=""
                className="absolute object-contain w-[60%]"
                style={{
                    top: `${progressPercent}%`,
                    transform: "translateY(-50%)",
                }}
                />
            </div>
            </div>
          </div>
          <div className="col-span-1 aspect-321/358 flex flex-col items-center flex-col-reverse">
            <img src="/images/section2_btn-rewards.png" alt="" className="w-[85%] object-contain cursor-pointer img-btn" onClick={() => setShowPopup(true)} />
          </div>
        </div>

        {/* PC version */}
        <div className="hidden md:flex absolute bottom-[1%] left-[12%] w-[32.7%] aspect-628/756 flex-col gap-[5%]">
            <div className="relative w-full h-[83%]">
            {/* Milestone images */}
            <div className="absolute w-full left-[14%] right-0 top-[2%] bottom-[2%] flex flex-col justify-between">
                {[
                { src: "/images/section2_milestone-200k.png", value: 200_000, width: "72.45%" },
                { src: "/images/section2_milestone-500k.png", value: 500_000, width: "72.45%" },
                { src: "/images/section2_milestone-1m.png",   value: 1_000_000, width: "72.45%" },
                { src: "/images/section2_milestone-2m.png",   value: 2_000_000, width: "72.45%" },
                { src: "/images/section2_milestone-5m.png",   value: 5_000_000, width: "85.67%" },
                ].map(({ src, value, width }) => {
                const unlocked = currentScore >= value;
                return (
                    <div key={value} className="relative inline-block" style={{ width }}>
                    <img src={src} alt="" className="w-full object-contain" />
                    {!unlocked && (
                        <div
                        className="absolute inset-0 rounded-sm"
                        style={{ background: "rgba(10, 15, 50, 0.55)" }}
                        />
                    )}
                    </div>
                );
                })}
            </div>

            {/* Progress bar */}
            <div className="absolute left-0 top-[2%] bottom-[2%] w-[15%] flex justify-center">
                <div
                className="absolute inset-y-0 rounded-sm"
                style={{ width: "28%", background: "#13153b", border: "1px solid #00fff3" }}
                />
                <div
                className="absolute top-0 rounded-sm"
                style={{ width: "28%", height: `${progressPercent}%`, background: "#00fff3" }}
                >
                <div
                    className="absolute rounded-sm"
                    style={{
                    inset: "0 12%",
                    background: "linear-gradient(180deg, #ffffff 0%, #ffff21 100%)",
                    }}
                >
                    <div
                    className="absolute rounded-sm"
                    style={{
                        inset: "0 20%",
                        background: "linear-gradient(180deg, #ffeeaf 0%, #ffbf11 100%)",
                    }}
                    />
                </div>
                </div>
                <img
                src="/images/section2_icon-progress.png"
                alt=""
                className="absolute object-contain w-[60%]"
                style={{
                    top: `${progressPercent}%`,
                    transform: "translateY(-50%)",
                }}
                />
            </div>
            </div>
            <img src="/images/section2_btn-rewards.png" alt="" className="w-[85%] object-contain cursor-pointer img-btn" onClick={() => setShowPopup(true)} />
        </div>
        <div className="hidden md:flex absolute bottom-[1%] right-[10%] w-[42.7%] aspect-820/898 flex-col items-center justify-between">
            <div className="relative w-[70%] aspect-573/101 bg-cover bg-center bg-no-repeat 
            bg-[url('/images/section2_fr-title.png')] flex items-center justify-center">
                <p className="text-center w-[80%] text-[1.2vw] font-bold inline-block">Xin chào, Chủ Công đang có <span className="text-red-500">XXX</span> Lượt Khiếu Chiến Lữ Bố</p>
            </div>
            <div className="relative w-full aspect-820/674 bg-cover bg-center bg-no-repeat
            bg-[url('/images/section2_fr-rewards.png')] flex items-center justify-center">
                <div className="grid grid-cols-4 gap-[2%] w-[90%] h-[85%]">
                  {Array.from({ length: 12 }, (_, i) => {
                    const day = i + 1;
                    const checkedIn = checkedInDays.includes(day);
                    return (
                      <div key={day} className="relative flex flex-col items-center">
                        {/* Box background */}
                        <div
                          className="relative w-full aspect-square bg-contain bg-center bg-no-repeat flex items-center justify-center"
                          style={{ backgroundImage: "url('/images/section2_fr-box.png')" }}
                        >
                          {/* Overlay nếu đã điểm danh */}
                          {checkedIn && (
                            <div className="absolute inset-0 rounded-md bg-black/30" />
                          )}
                          {/* Số thứ tự */}
                          <span className="relative z-10 text-[#1a2a5e] font-bold text-[clamp(12px,2.5vw,32px)] leading-none">
                            {day}
                          </span>
                        </div>
                        {/* Label điểm danh */}
                        {checkedIn && (
                          <img
                            src="/images/lable-check-in.png"
                            alt="Đã điểm danh"
                            className="absolute bottom-[15%] translate-y-[30%] w-[110%] object-contain z-20"
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
            </div>
            <div className="w-full flex items-center justify-between">
                <img src="/images/section2_btn-get-tickets.png" alt="" className="w-[31.1%] object-contain img-btn" />
                <img src="/images/section2_btn-history.png" alt="" className="w-[31.1%] object-contain img-btn" />
                <img src="/images/section2_btn-checkin.png" alt="" className="w-[31.1%] object-contain img-btn" />
            </div>
        </div>
    </section>
    {showPopup && (
      <Popup
        title="Danh sách phần thưởng"
        content={
          <div className="w-[85%] mt-[3%] flex flex-col items-center text-[#2b2d5e] text-[0.9vw]">
            <p className="font-bold italic text-[1.1vw]">Tam Anh Xuất Thế</p>
            <p className="font-bold italic text-[1.1vw]">Quần Hùng Tranh Bá</p>
            <p className="mt-[1.5%] text-center leading-snug">
              Mỗi mốc quà được mở khoá, toàn bộ Server sẽ nhận được<br />
              phần thưởng thông qua hòm thư ingame
            </p>
            <p className="italic text-[#3b82f6] font-bold mt-[0.5%]">Danh sách phần thưởng</p>

            <table className="w-full mt-[2%] border-collapse border border-[#2b2d5e]/30 text-[0.85vw]">
              <thead>
                <tr className="bg-[#d4b8e0]/60">
                  <th className="border border-[#2b2d5e]/30 py-[0.8%] w-[35%] font-bold">Sát thương</th>
                  <th className="border border-[#2b2d5e]/30 py-[0.8%] font-bold">Phần thưởng</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { score: "200.000", rewards: ["Xu Triệu Hồi Cao Cấp x5", "Xu Triệu Hồi Phe x1", "KNB x2000"] },
                  { score: "500.000", rewards: ["Xu Triệu Hồi Cao Cấp x5", "Xu Triệu Hồi Phe x1", "KNB x2000"] },
                  { score: "500.000", rewards: ["Xu Triệu Hồi Cao Cấp x5", "Xu Triệu Hồi Phe x1", "KNB x2000"] },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "" : "bg-[#d4b8e0]/40"}>
                    <td className="border border-[#2b2d5e]/30 py-[1%] text-center font-bold">{row.score}</td>
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