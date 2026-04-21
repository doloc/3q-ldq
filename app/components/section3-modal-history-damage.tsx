"use client";

import Modal from "./modal";

const ModalHistoryDamage = ({ showPopup, setShowPopup }: { showPopup: boolean, setShowPopup: (show: boolean) => void }) => {
  return (
      <Modal onClose={() => setShowPopup(false)}>
        <div className="relative w-[38.54%] aspect-740/921 bg-cover bg-center bg-no-repeat bg-[url('/images/modal-history-damge-bg.webp')]">
            <img src="/images/modal-btn-close.webp" alt="" className="absolute top-0 -right-[5.5%] w-[12.3%] object-contain img-btn" onClick={() => setShowPopup(false)} />
            <div className="mt-[27%] ml-[12%] mr-[7%] h-10 text-white font-SVN-GilroyBold leading-relaxed text-[1.5vw]">
              <p>Chủ Công đạt được <span className="text-[#0DFFDB]">XXX</span> Điểm Sát Thương, với <span className="text-[#0DFFDB]">XXX</span> Lượt Khiêu Chiến</p>
            </div>
            <div className="absolute bottom-[7%] right-[5.5%] w-[83.24%] aspect-616/538 bg-cover bg-center bg-no-repeat bg-[url('/images/frame-history-info.webp')] overflow-x-hidden"></div>
        </div>
      </Modal>
    );
};

export default ModalHistoryDamage;