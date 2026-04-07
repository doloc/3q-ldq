"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Hero = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setIsMobile(window.innerWidth < 768);
  }, []);
  
  return (
    <section className="relative w-full aspect-640/1136 md:aspect-1920/1080 flex flex-col items-center overflow-hidden">
      {/* Static Background Images (Fallback) */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        initial={{ opacity: 1 }}
        animate={{ opacity: videoLoaded ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src="/images/pc-hero-bg-fallback.webp"
          alt=""
          className="hidden md:block w-full h-full object-cover"
        />
        <img
          src="/images/mb-hero-bg-fallback.webp"
          alt=""
          className="md:hidden w-full h-full object-cover"
        />
      </motion.div>

      {/* Background Videos - Only load the appropriate one */}
      {isClient && !isMobile && (
        <motion.video
          className="absolute top-0 left-0 w-full aspect-1920/1080 object-cover"
          src="/videos/pc-hero-vid.webm"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          onLoadedMetadata={() => setVideoLoaded(true)}
          onError={(e) => console.error('PC video error:', e)}
          initial={{ opacity: 0 }}
          animate={{ opacity: videoLoaded ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        />
      )}

      {isClient && isMobile && (
        <motion.video
          className="absolute top-0 left-0 w-full aspect-640/1136 object-cover"
          src="/videos/mb-hero-vid.webm"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          onLoadedMetadata={() => setVideoLoaded(true)}
          onError={(e) => console.error('Mobile video error:', e)}
          initial={{ opacity: 0 }}
          animate={{ opacity: videoLoaded ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        />
      )}

      <div className="hidden md:flex w-[33%] aspect-3/1 absolute top-[60%] right-[12%] items-center justify-center">
        <img src="/images/navigation_btn-code.webp" alt="" className="h-full object-contain img-btn" />
        <div className="-ml-1 mt-1 w-full h-full bg-cover bg-center bg-no-repeat aspect-474/188 bg-[url('/images/navigation_bg.webp')] 
          flex gap-[3%] items-center justify-center">
          <img src="/images/navigation_btn-play.webp" alt="" className="w-[44.72%] object-contain img-btn" />
          <div className="flex flex-col w-[40.5%] h-full py-[6%] items-center justify-between">
            <img src="/images/floating_btn-gg.webp" alt="" className="w-full object-contain img-btn" />
            <img src="/images/floating_btn-app-store.webp" alt="" className="w-full object-contain img-btn" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;