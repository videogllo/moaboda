import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

const VideoAd = () => {
    return(
        // <div className="grid grid-cols-5 gap-4 place-content-evenly place-items-center w-full md:w-[57%] border-y-2 border-gray-600">
        <div className="flex justify-between flex-wrap border-y-2 border-gray-600 md:w-[57%]">
            <div className="relative w-[120px] h-[120px] lg:w-44 lg:h-44 my-2">
                <Image
                    src="/image/banners/leoj.jpg"
                    alt="LeoJ"
                    layout='fill'
                    objectFit='contain'
                ></Image>
            </div>
            <div className="relative w-[120px] h-[120px] lg:w-44 lg:h-44 my-2">
                <Image
                    src="/image/banners/oking.jpg"
                    alt="OKing"
                    layout='fill'
                    objectFit='contain'
                ></Image>
            </div>
            <div className="relative w-[120px] h-[120px] lg:w-44 lg:h-44 my-2">
                <Image
                    src="/image/banners/leoj.jpg"
                    alt="LeoJ"
                    layout='fill'
                    objectFit='contain'
                ></Image>
            </div>
            <div className="relative w-[120px] h-[120px] lg:w-44 lg:h-44 my-2">
                <Image
                    src="/image/banners/oking.jpg"
                    alt="OKing"
                    layout='fill'
                    objectFit='contain'
                ></Image>
            </div>
            <div className="relative w-[120px] h-[120px] lg:w-44 lg:h-44 my-2">
                <Image
                    src="/image/banners/leoj.jpg"
                    alt="LeoJ"
                    layout='fill'
                    objectFit='contain'
                ></Image>
            </div>
        </div>
    )
}

export default VideoAd;