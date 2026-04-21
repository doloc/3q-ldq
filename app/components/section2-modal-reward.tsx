"use client";

import Modal from "./modal";

const Section2ModalReward = ({ showPopup, setShowPopup }: { showPopup: boolean, setShowPopup: (show: boolean) => void }) => {
  return (
    <Modal onClose={() => setShowPopup(false)}>
      <div className="relative w-[62.14%] aspect-1193/861 bg-cover bg-center bg-no-repeat bg-[url('/images/modal-reward-bg.webp')]" onClick={e => e.stopPropagation()}>
        <div className="absolute inset-[5%] top-[10%] overflow-x-hidden overflow-y-scroll scrollbar-modal
        flex flex-col items-center font-SVN-GilroyBold leading-relaxed text-[1.2vw]">
          <p className="italic text-[1.4vw]">Tam Anh Xuất Thế</p>
          <p className="italic text-[1.4vw]">Quần Hùng Tranh Bá</p>
          <p className="mt-[1.5%] text-center leading-snug">
            Mỗi mốc quà được mở khoá, toàn bộ Server sẽ nhận được<br />
            phần thưởng thông qua hòm thư ingame
          </p>
          <p className="italic text-[#D03C3C] mt-[0.5%]">Danh sách phần thưởng</p>
          <table className="w-full mt-[2%] border-collapse border border-[#2b2d5e]/30 text-[0.85vw]">
            <thead>
              <tr className="bg-[#FFFFFF]">
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
                <tr key={i} className={i % 2 === 0 ? "bg-[#DCC8EF]" : "bg-[#FFFFFF]"}>
                  <td className="border border-[#2b2d5e]/30 py-[1%] text-center">{row.score}</td>
                  <td className="border border-[#2b2d5e]/30 py-[1%] pl-[5%]">
                    {row.rewards.map((r, j) => <div key={j}>- {r}</div>)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Modal>
  );
};

export default Section2ModalReward;