"use client";

import { FC } from "react";

const Floating: FC<{
  onScrollToTop: () => void;
}> = ({onScrollToTop}) => {
  return (
    <div className="hidden md:flex w-[10.5%] flex-col items-center z-50 fixed top-[15%] left-[1%]">
      <img src="/images/floating_deposit.png" alt="" className="w-full img-btn" />
      <div className="flex flex-col gap-2 items-center justify-center bg-cover bg-center bg-no-repeat bg-[url('/images/floating_bg.png')] w-full aspect-202/309">
        <img src="/images/floating_btn-play.png" alt="" className="w-4/5 img-btn" />
        <img src="/images/floating_btn-gg.png" alt="" className="w-4/5 img-btn" />
        <img src="/images/floating_btn-app-store.png" alt="" className="w-4/5 img-btn" />
        <img src="/images/floating_btn-support.png" alt="" className="w-4/5 img-btn" />
        <img src="/images/floating_btn-multi.png" alt="" className="w-4/5 img-btn" />
      </div>
    </div>
  );
};

export default Floating;