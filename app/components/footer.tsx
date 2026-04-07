const Footer = () => {
    return (
        <footer className="relative w-full aspect-750/254 md:aspect-1920/321 bg-cover bg-center bg-no-repeat 
        bg-[url('/images/footer_mb-bg.jpg')] md:bg-[url('/images/footer_pc-bg.jpg')] flex flex-col items-center">
            <img src="/images/icon-zalo-game.png" alt="" className="mt-[2%] w-[14%] md:w-[8%] object-contain" />
            <div className="hidden md:block mt-[1%] text-center text-white font-bold text-[1.2vw] leading-relaxed px-[10%]">
                <p>Công ty TNHH ZIE</p>
                <p>Trụ sở chính: Tầng 17, Tòa nhà ROX Tower số 54A Nguyễn Chí Thanh, Phường Láng, Thành phố Hà Nội</p>
                <p>Giấy phép cung cấp dịch vụ trò chơi điện tử G2 trên mạng số 729/GXN-SVHTT do Sở Văn hóa và Thể thao thành phố Hà Nội cấp ngày 22/12/2025</p>
            </div>
            <div className="md:hidden mt-[1%] text-center text-white font-bold text-[2.4vw] leading-relaxed">
                <p>Công ty TNHH ZIE</p>
                <p>Trụ sở chính: Tầng 17, Tòa nhà ROX Tower số 54A Nguyễn Chí Thanh,</p>
                <p>Phường Láng, Thành phố Hà Nội</p>
                <p>Giấy phép cung cấp dịch vụ trò chơi điện tử G2 trên mạng số 729/GXN-SVHTT</p>
                <p>do Sở Văn hóa và Thể thao thành phố Hà Nội cấp ngày 22/12/2025</p>
            </div>
        </footer>
    )
}

export default Footer;