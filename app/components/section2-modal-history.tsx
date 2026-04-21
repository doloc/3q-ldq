"use client";

import Modal from "./modal";

const Section2ModalHistory = ({ showPopup, setShowPopup }: { showPopup: boolean, setShowPopup: (show: boolean) => void }) => {
    return (
        <Modal onClose={() => setShowPopup(false)}>
            <div className="relative w-[38.54%] aspect-740/921 bg-cover bg-center bg-no-repeat bg-[url('/images/modal-history-bg.webp')]">
                <img src="/images/modal-btn-close.webp" alt="" className="absolute top-0 -right-[5.5%] w-[12.3%] object-contain img-btn" onClick={() => setShowPopup(false)} />
                <div className="absolute top-[22%] left-[12%] text-white text-[1.4vw] font-SVN-GilroyBold leading-relaxed">
                  <p>Chủ Công đã nạp <span className="text-[#0DFFDB]">XXX VNĐ,</span></p>
                  <p>tương ứng với <span className="text-[#0DFFDB]">XXX Lượt Khiêu Chiến</span></p>
                </div>
                <div className="absolute bottom-[7%] right-[5.5%] w-[83.24%] aspect-616/538 bg-cover bg-center bg-no-repeat bg-[url('/images/frame-history-info.webp')] overflow-x-hidden"></div>
            </div>
        </Modal>
    );
};

export default Section2ModalHistory;