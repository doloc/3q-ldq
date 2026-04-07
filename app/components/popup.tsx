"use client";

import { FC } from "react";

const Popup:FC<{title: string, content: React.ReactNode, onClose?: () => void}> = ({title, content, onClose}) => {
    return (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center" onClick={onClose}>
            <div className="relative w-[62.13%] aspect-640/1196 md:aspect-1193/861 bg-cover bg-center bg-no-repeat 
                bg-[url('/images/popup-pc.png')] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
                <div className="w-[56%] aspect-668/88 bg-cover bg-center bg-no-repeat 
                bg-[url('/images/popup_title.png')] flex items-center justify-center">
                    <p className="text-center w-[80%] text-[1.8vw] font-bold inline-block text-white uppercase italic"
                        style={{
                            textShadow: "0 0 10px #00e5ff, 0 0 20px #00e5ff, 0 0 40px #0077ff, 0 2px 4px rgba(0,0,0,0.5)",
                            WebkitTextStroke: "0.5px rgba(0,229,255,0.4)",
                            letterSpacing: "0.05em",
                        }}
                    >{title}</p>
                </div>
                {content}
            </div>
        </div>
    )
}

export default Popup;