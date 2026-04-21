"use client";

import Modal from "./modal";

const Section3ModalResult = ({ showPopup, setShowPopup }: { showPopup: boolean, setShowPopup: (show: boolean) => void }) => {
  return (
    <Modal onClose={() => setShowPopup(false)}>
      <div className="relative w-[38.54%] aspect-740/667 bg-cover bg-center bg-no-repeat bg-[url('/images/modal-result-bg.webp')]">
        <img src="/images/modal-btn-close.webp" alt="" className="absolute top-0 -right-[5.5%] w-[12.3%] object-contain img-btn" onClick={() => setShowPopup(false)} />
        <div className="absolute bottom-[25%] right-[12%] w-[40%] text-center">
          <p className="text-white text-[2vw] font-SVN-GilroyBold leading-relaxed">XXX</p>
        </div>
      </div>
    </Modal>
  );
};

export default Section3ModalResult;