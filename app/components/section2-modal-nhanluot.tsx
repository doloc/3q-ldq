"use client";

import { useState } from "react";
import Modal from "./modal";

const Section2ModalNhanLuot = ({ showPopup, setShowPopup }: { showPopup: boolean, setShowPopup: (show: boolean) => void }) => {
  const [currentTab, setCurrentTab] = useState<"sharing" | "payment">("payment");

  return (
      <Modal onClose={() => setShowPopup(false)}>
          <div className="relative w-[38.54%] aspect-740/921 bg-cover bg-center bg-no-repeat bg-[url('/images/modal-nhanluot-bg.webp')] flex flex-col items-center" onClick={e => e.stopPropagation()}>
            <img src="/images/modal-btn-sharing.webp" alt="" className="absolute top-[7%] right-[5%] w-[25.68%] object-contain img-btn" onClick={() => setCurrentTab("sharing")} />
            <img src="/images/modal-btn-payment.webp" alt="" className="absolute top-[13%] right-[5%] w-[25.68%] object-contain img-btn" onClick={() => setCurrentTab("payment")} />
            <img src="/images/modal-btn-close.webp" alt="" className="absolute top-0 -right-[5.5%] w-[12.3%] object-contain img-btn" onClick={() => setShowPopup(false)} />
            {currentTab === "payment" && (
              <>
                <div className="absolute top-[22%] left-[12%] text-white text-[1.4vw] font-SVN-GilroyBold leading-relaxed">
                  <p>Nạp tích luỹ các mốc sau sẽ nhận được</p>
                  <p>Lượt Khiêu Chiến tương ứng:</p>
                </div>
                <img src="/images/frame-payment-info.webp" alt="" className="absolute bottom-[9%] right-[5.5%] w-[83.24%] object-contain" />
              </>
            )}

            {currentTab === "sharing" && (
              <>
                <div className="absolute top-[22%] left-[12%] text-white text-[1.4vw] font-SVN-GilroyBold leading-relaxed">
                  <p>Chia sẻ tường Zalo +1 lượt bình chọn</p> 
                  <p className="text-[#0DFFDB]">(tối đa +1 lượt khiêu chiến/ngày)</p>
                </div>
                <img src="/images/btn-sharing.webp" alt="" className="absolute top-[23%] right-0 w-[25.68%] object-contain"></img>
                <div className="absolute top-[34%] left-[12%] text-white text-[1.4vw] font-SVN-GilroyBold leading-relaxed">
                  <p className="inline-block">Chia sẻ bạn bè Zalo <p className="text-[1vw] text-[#0DFFDB] inline-block">(tối đa +1 lượt khiêu chiến/ngày)</p></p>
                </div>
                <div className="mt-[46%] w-[88%] aspect-792/315 bg-cover bg-center bg-no-repeat bg-[url('/images/frame-link.webp')] flex items-stretch">
                  <button
                    className="-mt-[10%] ml-[6%] w-[28%] flex items-center justify-center img-btn shrink-0"
                    onClick={() => navigator.clipboard.writeText("https://zalo.vn/photo/?fbid=1274517338182782")}
                  >
                    <span className="text-white text-[2vw] italic leading-tight text-center uppercase">SAO<br/>CHÉP</span>
                  </button>
                  <div className="-mt-[9%] mr-[10%] flex-1 flex items-center justify-center pr-[4%]">
                    <p className="text-[#0DFFDB] font-SVN-GilroyBold text-[1.28vw] font-bold break-all leading-snug text-center">
                      https://zalo.vn/photo/?fbid=1274517338182782
                    </p>
                  </div>
                </div>
                <img src="/images/frame-sharing-info.webp" alt="" className="absolute bottom-[9%] right-[5.5%] w-[83.24%] object-contain" />
              </>
            )}
          </div>
      </Modal>
  );
};

export default Section2ModalNhanLuot;