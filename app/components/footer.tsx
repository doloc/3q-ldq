"use client";
import { motion } from "framer-motion";
import { Be_Vietnam_Pro } from "next/font/google";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["vietnamese", "latin"],
  weight: ["400", "700"],
  display: "swap",
});

const Footer = () => {
    return (
        <footer className={`${beVietnamPro.className} relative w-full aspect-750/254 md:aspect-1920/321 bg-cover bg-center bg-no-repeat bg-[url('/images/footer_mb-bg.webp')] md:bg-[url('/images/footer_pc-bg.webp')] flex flex-col items-center`}>
            <motion.img
                src="/images/icon-zalo-game.webp" alt=""
                className="mt-[2%] w-[14%] md:w-[8%] object-contain"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            />
            <motion.div
                className="hidden md:block mt-[1%] text-center text-white text-[1.2vw] leading-relaxed px-[10%]"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
            >
                <p>Công ty TNHH ZIE</p>
                <p>Trụ sở chính: Tầng 17, Tòa nhà ROX Tower số 54A Nguyễn Chí Thanh, Phường Láng, Thành phố Hà Nội</p>
                <p>Giấy phép cung cấp dịch vụ trò chơi điện tử G2 trên mạng số 729/GXN-SVHTT do Sở Văn hóa và Thể thao thành phố Hà Nội cấp ngày 22/12/2025</p>
            </motion.div>
            <motion.div
                className="md:hidden mt-[1%] text-center text-white text-[2.4vw] leading-relaxed"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
            >
                <p>Công ty TNHH ZIE</p>
                <p>Trụ sở chính: Tầng 17, Tòa nhà ROX Tower số 54A Nguyễn Chí Thanh,</p>
                <p>Phường Láng, Thành phố Hà Nội</p>
                <p>Giấy phép cung cấp dịch vụ trò chơi điện tử G2 trên mạng số 729/GXN-SVHTT</p>
                <p>do Sở Văn hóa và Thể thao thành phố Hà Nội cấp ngày 22/12/2025</p>
            </motion.div>
        </footer>
    )
}

export default Footer;
