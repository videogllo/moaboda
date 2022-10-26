import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

const VideoAd = () => {
    const randomarr = [];
    let randomnum = [1,2,3,4,5,6,7,8,9,10,11]

    while(randomarr.length < 6){
        var movenum = randomnum.splice(Math.floor(Math.random() * randomnum.length),1)[0]
        randomarr.push(movenum - 1)
    }
    
    console.log(randomarr);

    let imgname = ['ChPp0nZkMts', 'DndMyo--qbk', 'DR_Y8GA6OqY', 'e2dL6lK_k8s', 'EBXoEp0LLxA', 'EhALf_aXl_8', 'kBVIPUnVDNQ', 'uazFSWRxMQ4', 'uMWYZODlfUg', 'xosC9QflkMg', 'zhbr526sOCg'];

    return(
        // <div className="grid grid-cols-5 gap-4 place-content-evenly place-items-center w-full md:w-[57%] border-y-2 border-gray-600">
        <div className="flex overflow-auto justify-start border-y-2 border-gray-600 md:w-[57%] 2xl:overflow-visible 2xl:justify-center" id="scroll">
            <div className="flex 2xl:flex-nowrap">
                <div className="relative w-[140px] h-[100px] 2xl:w-64 2xl:h-40 m-2 cursor-pointer">
                    <Image
                        src={"/image/banners/" + imgname[randomarr[0]] + ".jpg"}
                        layout='fill'
                        objectFit='cover'
                        onClick={locationFunc}
                        id={imgname[randomarr[0]]}
                    ></Image>
                </div>
                
                <div className="relative w-[140px] h-[100px] 2xl:w-64 2xl:h-40 m-2 cursor-pointer">
                    <Image
                        src={"/image/banners/" + imgname[randomarr[1]] + ".jpg"}
                        layout='fill'
                        objectFit='cover'
                        onClick={locationFunc}
                        id={imgname[randomarr[1]]}
                    ></Image>
                </div>
                
                <div className="relative w-[140px] h-[100px] 2xl:w-64 2xl:h-40 m-2 cursor-pointer">
                    <Image
                        src={"/image/banners/" + imgname[randomarr[2]] + ".jpg"}
                        layout='fill'
                        objectFit='cover'
                        onClick={locationFunc}
                        id={imgname[randomarr[2]]}
                    ></Image>
                </div>
                
                <div className="relative w-[140px] h-[100px] 2xl:w-64 2xl:h-40 m-2 cursor-pointer">
                    <Image
                        src={"/image/banners/" + imgname[randomarr[3]] + ".jpg"}
                        layout='fill'
                        objectFit='cover'
                        onClick={locationFunc}
                        id={imgname[randomarr[3]]}
                    ></Image>
                </div>
                
                <div className="relative w-[140px] h-[100px] 2xl:w-64 2xl:h-40 m-2 cursor-pointer">
                    <Image
                        src={"/image/banners/" + imgname[randomarr[4]] + ".jpg"}
                        layout='fill'
                        objectFit='cover'
                        onClick={locationFunc}
                        id={imgname[randomarr[4]]}
                    ></Image>
                </div>
            </div>
        </div>
    )
}

export const locationFunc = (e) => {
    location.href="https://www.youtube.com/watch?v=" + e.target.id;
}

export default VideoAd;