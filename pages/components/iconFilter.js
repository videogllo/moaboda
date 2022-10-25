//asset
import Image from "next/image";
import { useEffect } from "react";

//statement
import { useRecoilState } from "recoil";
import { SELECT_FILTER } from "../../store/atom";

//image assets
const iconData = [
    { name: "Youtube", imgUrl: "/image/icon/youtube.png" },
    { name: "Twitch", imgUrl: "/image/icon/twitch.png" },
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

const IconFilter = () => {
    const [SELECTFILTER, setSELECTFILTER] = useRecoilState(SELECT_FILTER);

    useEffect(() => {
        //최초 로드에 youtube default
        // selectFilter("Youtube");
        // console.log(SELECTFILTER)
    }, [SELECTFILTER]);

    const selectFilter = (name) => {
        if (SELECTFILTER.includes(name)) {
            //중복된다면 배열에서 제거
            setSELECTFILTER(SELECTFILTER.filter((el) => el !== name));
            //active효과 해제
            // if (SELECTFILTER.length > 1) {
            //     const tar = document.getElementById(name);
            //     tar.style.opacity = "1";
            // } else if (SELECTFILTER.length === 1) {
            //     const tar = document.getElementById(name);
            //     tar.style.opacity = "1";
            // } else {
            //     const tar = document.getElementById(name);
            //     tar.style.opacity = ".3";
            // }

            const tar = document.getElementById(name);
            // tar.classList.remove("iconActive");
        } else {
            //중복안되면 배열에 추가
            setSELECTFILTER((prev) => [...prev, name]);
            //active효과 추가
            const tar = document.getElementById(name);
            // tar.style.opacity = "1";
            // tar.classList.add("iconActive");
        }
    };

    return (
        <div className="mt-12">
            <div className="">
                {SELECTFILTER.length > 0 ? (
                    <h2 className="text-xl xl:text-2xl font-bold tracking-tight">
                        {/* 필터가 적용되었다면 적용된 필터명 출력 */}
                        {SELECTFILTER.map((el, i) => (
                            <span className="text-lg xl:text-xl">
                                {i > 0 ? (
                                    <span key={el}>&#44;&ensp;{el}</span>
                                ) : (
                                    <span key={el}>{el}</span>
                                )}
                            </span>
                        ))}
                    </h2>
                ) : null}
            </div>

            <div className="mt-2 overflow-auto flex flex-wrap">
                {/* 필터가 1개라도 적용이 되었다면 */}
                {SELECTFILTER.length > 0 ? (
                    <>
                        {iconData.map((el) => (
                            <>
                                <button
                                    key={el.name}
                                    onClick={() => selectFilter(el.name)}
                                    className="w-[50px] h-[50px] bg-slate-200 rounded-lg relative mx-2 my-2 opacity-30 transition-all"
                                    id={el.name}
                                >
                                    <Image
                                        src={el.imgUrl}
                                        layout="fill"
                                        objectFit="contain"
                                        className="rounded-lg scale-[1.02]"
                                    ></Image>
                                </button>
                            </>
                        ))}
                    </>
                ) : (
                    // 필터가 적용이 안되었다면
                    <>
                        {iconData.map((el) => (
                            <>
                                <button
                                    key={el.name}
                                    onClick={() => selectFilter(el.name)}
                                    className="w-[50px] h-[50px] bg-slate-200 rounded-lg relative mx-2 my-2 transition-all"
                                    id={el.name}
                                >
                                    <Image
                                        src={el.imgUrl}
                                        layout="fill"
                                        objectFit="contain"
                                        className="rounded-lg scale-[1.02]"
                                    ></Image>
                                </button>
                            </>
                        ))}
                    </>
                )}
            </div>
        </div>
    );
};
export default IconFilter;
