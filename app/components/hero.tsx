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
          src="/images/banner-light.webp"
          alt=""
          className="hidden md:block w-full h-full object-cover"
        />
        <img
          src="/images/mb-banner-light.webp"
          alt=""
          className="md:hidden w-full h-full object-cover"
        />
      </motion.div>

      {/* Background Videos - Only load the appropriate one */}
      {isClient && !isMobile && (
        <motion.video
          className="absolute top-0 left-0 w-full aspect-1920/1080 object-cover"
          src="/videos/pc-hero-vid.mp4"
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
          src="/videos/mb-hero-vid.mp4"
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

      <div className="w-[33%] aspect-3/1 absolute top-[60%] right-[12%] flex items-center justify-center">
        <img src="/images/navigation_btn-code.png" alt="" className="h-full object-contain" />
        <div className="-ml-1 w-full h-full bg-cover bg-center bg-no-repeat aspect-474/188 bg-[url('/images/navigation_bg.png')] flex gap-[5%] items-center justify-center">
          <img src="/images/navigation_btn-play.png" alt="" className="h-3/4 object-contain" />
          <div className="flex flex-col h-3/4 items-center justify-between">
            <img src="/images/floating_btn-gg.png" alt="" className="object-contain" />
            <img src="/images/floating_btn-app-store.png" alt="" className="object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;