//functional
import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";

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
    const [data, setData] = useState(null);

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
            {data === null ? (
                <Loading></Loading>
            ) : (
                <>
                    {data.map((el) => (
                        <div
                            key={el.id}
                            className="bg-slate-700 w-full shadow-lg rounded-lg p-2 py-4 flex gap-3"
                        >
                            <div className="w-40 h-24 sm:w-48 sm:h-32 md:w-56 md:h-40 relative bg-red-400">
                                {/* <Image
                    src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
                    layout="fill"
                    objectFit="contain"
                    width={100}
                    height={100}
                ></Image> */}
                                <a href={el.href} target="_blank">
                                    <img
                                        src={el.imgUrl}
                                        alt={el.title}
                                        className="h-full w-full object-cover rounded-md"
                                    />
                                </a>
                            </div>
                            <div>
                                <div className="flex gap-2 items-center">
                                    <div className="h-8 w-8 relative">
                                        <Image
                                            src={iconData[0].imgUrl}
                                            layout="fill"
                                            objectFit="contain"
                                            className="rounded-md"
                                        ></Image>
                                    </div>
                                    <div className="text-lg font-semibold font-NanumSquareNeo line-clamp-1">
                                        {el.title}
                                    </div>
                                </div>
                                <div>description</div>
                            </div>
                        </div>
                    ))}
                </>
            )}
        </div>
    );
};
export default ResultList;
