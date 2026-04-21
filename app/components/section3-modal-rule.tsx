"use client";

import Modal from "./modal";

const Section3ModalRule = ({ showPopup, setShowPopup }: { showPopup: boolean, setShowPopup: (show: boolean) => void }) => {
  return (
      <Modal onClose={() => setShowPopup(false)}>
        <div className="relative w-[38.54%] aspect-740/921 bg-cover bg-center bg-no-repeat bg-[url('/images/modal-rule-bg.webp')]">
            <img src="/images/modal-btn-close.webp" alt="" className="absolute top-0 -right-[5.5%] w-[12.3%] object-contain img-btn" onClick={() => setShowPopup(false)} />
            <div className="mt-[46%] ml-[12%] mr-[7%] h-10 text-white font-SVN-GilroyBold leading-relaxed text-[1.2vw]">
              <p className="text-[#FEF723]">Thể Lệ: </p>
              <p className="mt-[1%]">Trong thời gian sự kiện, người chơi sử dụng lượt khiêu chiến để tấn công chiến thần Lữ Bố tại Hồ Lao Quan.</p>
              <p>Mỗi lần khiêu chiến sẽ ngẫu nhiên triệu hồi một trong Tam Anh xuất trận hỗ trợ chiến đáu.</p>
              <p className="mt-[3%] text-[#FEF723]">Quy Định: </p>
              <p className="mt-[1%]">Chủ công phải đăng nhập đúng tài khoản Zalo liên kết để nhận phần thưởng ingame</p>
            </div>
        </div>
      </Modal>
    );
};

export default Section3ModalRule;