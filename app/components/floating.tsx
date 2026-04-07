"use client";

import { FC } from "react";
import { motion } from "framer-motion";

const Floating: FC<{
  onScrollToTop: () => void;
}> = ({onScrollToTop}) => {
  return (
    <motion.div
      className="hidden md:flex w-[10.5%] flex-col items-center z-50 fixed top-[15%] left-[1%]"
      initial={{ x: -80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
    >
      <img src="/images/floating_deposit.webp" alt="" className="w-full img-btn anim-float" />
      <div className="flex flex-col gap-2 items-center justify-center bg-cover bg-center bg-no-repeat bg-[url('/images/floating_bg.webp')] w-full aspect-202/309">
        <img src="/images/floating_btn-play.webp" alt="" className="w-4/5 img-btn" />
        <img src="/images/floating_btn-gg.webp" alt="" className="w-4/5 img-btn" />
        <img src="/images/floating_btn-app-store.webp" alt="" className="w-4/5 img-btn" />
        <img src="/images/floating_btn-support.webp" alt="" className="w-4/5 img-btn" />
        <img src="/images/floating_btn-multi.webp" alt="" className="w-4/5 img-btn" />
      </div>
    </motion.div>
  );
};

export default Floating;