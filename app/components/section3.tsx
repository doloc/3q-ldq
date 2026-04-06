const Section3 = () => {
    return (
        <section className="relative w-full aspect-640/1196 md:aspect-1920/1080 bg-cover bg-center bg-no-repeat 
    bg-[url('/images/mb-news-event-bg.webp')] md:bg-[url('/images/section3_pc-bg.jpg')] flex flex-col items-center">
            <img src="/images/section3_title.png" alt="" className="mt-[2%] w-[57.23%] object-contain" />
            <div className="relative w-[31.25%] aspect-600/106 bg-cover bg-center bg-no-repeat 
            bg-[url('/images/mb-news-event-bg.webp')] md:bg-[url('/images/section3_text.png')] flex items-center justify-center">
                <p className="text-center w-[80%] font-bold inline-block">Xin chào, Chủ Công đang có <span className="text-red-500">XXX</span> Lượt Khiếu Chiến Lữ Bố</p>
            </div>
            <div className="mt-[1%] w-full flex gap-[2%] justify-center">
                <img src="/images/section3_btn-history.png" alt="" className="w-[14%] object-contain" />
                <img src="/images/section3_btn-rule.png" alt="" className="w-[14%] object-contain" />
            </div>
            <img src="/images/section3_character.png" alt="" className="absolute right-0 bottom-0 w-[60.5%] object-contain" />
            <img src="/images/section3_vs.png" alt="" className="absolute bottom-[30%] w-[14%] object-contain" />
            <img src="/images/section3_cta.png" alt="" className="absolute bottom-[5%] w-[32.5%] object-contain" />
        </section>
    );
};

export default Section3;