"use client";

import { useState } from "react";
import Modal from "./modal";
import Section3ModalResult from "./section3-modal-result";

// idx 0 = char-3, 1 = char-1, 2 = char-2, 3 = reward (no video)
const CHAR_VIDEO_MAP: Record<number, string> = {
  0: "/videos/char-0.mp4",
  1: "/videos/char-1.mp4",
  2: "/videos/char-2.mp4",
};

const Section3ModalFight = ({ idx, showPopup, setShowPopup }: { idx: number, showPopup: boolean, setShowPopup: (show: boolean) => void }) => {
  const videoSrc = CHAR_VIDEO_MAP[idx];
  const [showModalResult, setShowModalResult] = useState(false);

  return (
    <Modal onClose={() => setShowPopup(false)}>
      <div className="relative w-[38.54%] aspect-740/622 bg-cover bg-center bg-no-repeat bg-[url('/images/modal-fight-bg.webp')]" onClick={e => e.stopPropagation()}>
        <img src="/images/modal-btn-close.webp" alt="" className="absolute top-0 -right-[5.5%] w-[12.3%] object-contain img-btn" onClick={() => setShowPopup(false)} />
        <div className="relative mt-[28%] ml-[8.2%] w-[87.7%] aspect-668/376">
          {videoSrc && (
            // nếu muốn lặp thì uncomment loop và comment onEnded
            <video
              key={videoSrc}
              src={videoSrc}
              className="w-full h-full object-cover"
              autoPlay
              // loop
              muted
              playsInline
              onEnded={() => setShowModalResult(true)}
            />
          )}
          <img src="/images/btn-skip.webp" alt="" className="absolute bottom-[2%] right-0 w-[22.8%] object-contain img-btn" onClick={() => setShowModalResult(true)} />
        </div>
      </div>
      {showModalResult && (
        <Section3ModalResult showPopup={showModalResult} setShowPopup={setShowModalResult} />
      )}
    </Modal>
  );
};

export default Section3ModalFight;