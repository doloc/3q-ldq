const Section4 = () => {
    return (
        <section className="relative w-full aspect-640/1196 md:aspect-1920/1080 bg-cover bg-center bg-no-repeat 
        bg-[url('/images/mb-news-event-bg.webp')] md:bg-[url('/images/section4_pc-bg.jpg')] flex flex-col items-center">
            <img src="/images/section4_title.png" alt="" className="w-[69%] object-contain" />
            <div className="absolute top-[16%] right-[20%] w-[31.25%] aspect-600/106 bg-cover bg-center bg-no-repeat 
            bg-[url('/images/mb-news-event-bg.webp')] md:bg-[url('/images/section4_text.png')] flex items-center justify-center">
                <p className="text-center w-[80%] text-[1.2vw] font-bold inline-block">Xin chào, Chủ Công đang có <span className="text-red-500">XXX</span> Điểm sát thương</p>
            </div>
            <div className="absolute top-[28%] right-[13%] w-[44.74%] aspect-859/706 bg-cover bg-center bg-no-repeat 
            bg-[url('/images/mb-news-event-bg.webp')] md:bg-[url('/images/section4_fr-bg.png')] flex flex-col overflow-hidden px-[2%] py-[2%]"
                style={{ fontFamily: '"UTM Talling", Arial, sans-serif', letterSpacing: '0.075em', lineHeight: 1.2 }}
            >
                {/* Header */}
                <div className="flex text-[#2b2d5e] font-bold text-[1.55vw]">
                    <div className="w-[25%] text-center py-[1.2%]">Hạng</div>
                    <div className="w-[40%] text-center py-[1.2%]">Chủ Công</div>
                    <div className="w-[35%] text-center py-[1.2%]">Điểm Sát Thương</div>
                </div>
                {/* Rows */}
                <div className="flex-1 overflow-y-auto">
                    {Array.from({ length: 10 }, (_, i) => (
                        <div
                            key={i}
                            className={`flex text-[#2b2d5e] font-bold text-[1.4vw] ${i % 2 === 0 ? "bg-[#DCC8EF]" : ""}`}
                        >
                            <div className="w-[25%] text-center py-[1%]">{i + 1}</div>
                            <div className="w-[40%] text-center py-[1%]">ABC</div>
                            <div className="w-[35%] text-center py-[1%]">25000</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
};

export default Section4;