//functional
import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import * as common from "../../js/common";

//component
import Loading from "./loading";

//image assets
const iconData = [
    { name: "Youtube", imgUrl: "/image/icon/youtube.png" },
    { name: "Twitch", imgUrl: "/image/icon/twitch.png" },
    { name: "Shorts", imgUrl: "/image/icon/shorts.png" },
    { name: "Reels", imgUrl: "/image/icon/reels2.png" },
    { name: "Netflix", imgUrl: "/image/icon/netflix.png" },
    { name: "Tiktok", imgUrl: "/image/icon/tiktok.png" },
    { name: "AfreecaTV", imgUrl: "/image/icon/afreecaTV.png" },
    { name: "AppleTV", imgUrl: "/image/icon/appleTV.png" },
    { name: "Watcha", imgUrl: "/image/icon/watcha.png" },
    { name: "Wavve", imgUrl: "/image/icon/wavve.png" },
    { name: "CoupangPlay", imgUrl: "/image/icon/coupangPlay.png" },
    { name: "DisneyPlus", imgUrl: "/image/icon/disneyPlus.png" },
    { name: "HboMax", imgUrl: "/image/icon/hboMax.png" },
    { name: "PrimeVideo", imgUrl: "/image/icon/primeVideo.png" },
    { name: "Tving", imgUrl: "/image/icon/tving.png" },
];

const ResultList = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fnResultList = async () => {
            await axios({
                method: "GET",
                url: "/api/result",
            }).then((res) => {
                // console.log(res.data);
                setData(res.data);
            });
        };
        fnResultList();
    }, []);

    return (
        <div className="mt-8 md:mt-12 mb-8 flex flex-col gap-2">
            {data.length === 0 ? (
                <Loading></Loading>
            ) : (
                <div className="flex flex-col gap-3">
                    {/* 모든 플랫폼을 순회하여 출력 */}
                    {data.map((el) => (
                        <div key={el.type} className="flex flex-col gap-3">
                            {/* 각 플랫폼의 데이터를 출력 */}
                            {el.data[0].map((el2) => (
                                <div
                                    key={el2.id}
                                    className="bg-slate-700 w-full shadow-lg rounded-lg p-2 py-4 flex gap-3"
                                >
                                    <div className="w-40 max-w-52 h-40 md:h-48 xl:h-56 bg-slate-900 relative flex basis-1/4 justify-center rounded-md">
                                        <a href={el2.href} target="_blank">
                                            <img
                                                src={el2.imgUrl}
                                                alt={el2.title}
                                                className="h-full w-full object-cover object-center rounded-md"
                                            />
                                        </a>
                                    </div>
                                    <div className="flex flex-col basis-3/4 gap-1">
                                        <div className="flex gap-2 items-center">
                                            <div className="h-8 w-8 relative">
                                                <Image
                                                    src={common.dynamicIcon(el.type)}
                                                    alt={el.title}
                                                    layout="fill"
                                                    objectFit="contain"
                                                    className="rounded-md"
                                                ></Image>
                                            </div>
                                            <div className="w-full text-lg font-semibold font-NanumSquareNeo line-clamp-1">
                                                {el2.title}
                                            </div>
                                        </div>
                                        <div>description</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
export default ResultList;
