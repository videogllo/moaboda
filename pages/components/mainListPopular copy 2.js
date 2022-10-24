//funcional
import { useState, useEffect } from "react";
import Image from "next/image";

//component
import Loading from "./loading";

//recoil
import { SELECT_FILTER } from "../../store/atom";
import { useRecoilState } from "recoil";

const testData = [
    {
        id: 1,
        imgUrl: "https://static-cdn.jtvnw.net/previews-ttv/live_user_paka9999-640x480.jpg",
        href: "https://www.twitch.tv/paka9999",
        title: "title1asd651as65d1as6d51sad156a56ds1a1d56s165ads61as65d1a651sd65a1sd651as6d515ads156ads165asd165",
        from: "twitch",
        iconUrl: "/image/icon/twitch.png",
        playingTime: "7:31",
    },
    {
        id: 2,
        imgUrl: "https://static-cdn.jtvnw.net/previews-ttv/live_user_paka9999-640x480.jpg",
        href: "https://www.twitch.tv/paka9999",
        title: "title2",
        iconUrl: "/image/icon/twitch.png",
        playingTime: "17:31",
    },
    {
        id: 3,
        imgUrl: "https://static-cdn.jtvnw.net/previews-ttv/live_user_paka9999-640x480.jpg",
        href: "https://www.twitch.tv/paka9999",
        title: "title3",
        iconUrl: "/image/icon/twitch.png",
        playingTime: "1:17:31",
    },
    {
        id: 4,
        imgUrl: "https://static-cdn.jtvnw.net/previews-ttv/live_user_paka9999-640x480.jpg",
        href: "https://www.twitch.tv/paka9999",
        title: "title4",
        iconUrl: "/image/icon/youtube.png",
        playingTime: "7:31",
    },
    {
        id: 5,
        imgUrl: "https://static-cdn.jtvnw.net/previews-ttv/live_user_paka9999-640x480.jpg",
        href: "https://www.twitch.tv/paka9999",
        title: "title5",
        iconUrl: "/image/icon/youtube.png",
        playingTime: "7:31",
    },
    {
        id: 6,
        imgUrl: "https://static-cdn.jtvnw.net/previews-ttv/live_user_paka9999-640x480.jpg",
        href: "https://www.twitch.tv/paka9999",
        title: "title6",
        iconUrl: "/image/icon/youtube.png",
        playingTime: "7:31",
    },
];

// const testData2 = ["youtube", "twitch", "afreeca"];

const MainListPopular = () => {
    const [data, setData] = useState(null);
    const [SELECTFILTER] = useRecoilState(SELECT_FILTER);

    useEffect(() => {
        const fnMainList = async () => {
            await fetch("/api/main")
                .then((res) => res.json())
                .then((data) => {
                    // console.log(data);
                    setData(data);
                });
        };
        fnMainList();
    }, []);

    useEffect(() => {
        console.log(SELECTFILTER);
    }, [SELECTFILTER]);

    return (
        <>
            <div className="flex flex-col gap-6 mt-12">
                <div className="bg-slate-700 p-4 rounded-xl shadow-xl">
                    <div className="mx-auto">
                        <div className="items-baseline justify-between flex pb-2">
                            {SELECTFILTER.length > 0 ? (
                                <h2 className="text-xl xl:text-2xl font-bold tracking-tight">
                                    필터&nbsp;&#58;&ensp;
                                    {SELECTFILTER.map((el, i) => (
                                        <span className="text-lg xl:text-xl text-cyan-500">
                                            {i > 0 ? (
                                                <span key={el}>
                                                    &#44;&ensp;{el}
                                                </span>
                                            ) : (
                                                <span key={el}>{el}</span>
                                            )}
                                        </span>
                                    ))}
                                </h2>
                            ) : (
                                <h2 className="text-xl xl:text-2xl font-bold tracking-tight">
                                    모든 영상
                                </h2>
                            )}

                            <a
                                href="#"
                                className="text-xs md:text-sm font-semibold text-cyan-500 hover:text-cyan-700 transition-all"
                            >
                                더보기
                                <span aria-hidden="true"> &rarr;</span>
                            </a>
                        </div>

                        {data === null ? (
                            <Loading></Loading>
                        ) : (
                            <>
                                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                                    {SELECTFILTER.length > 0 ? (
                                        <>
                                            {testData
                                                .filter((e) =>
                                                    e.from.includes(
                                                        SELECTFILTER
                                                    )
                                                )
                                                .map((el) => (
                                                    <div key={el.id}>
                                                        <div className="relative">
                                                            <div className="h-56 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-800 hover:opacity-75 lg:aspect-none relative">
                                                                <img
                                                                    src={
                                                                        el.imgUrl
                                                                    }
                                                                    alt={
                                                                        el.title
                                                                    }
                                                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full cursor-pointer"
                                                                    onClick={() =>
                                                                        window.open(
                                                                            el.href
                                                                        )
                                                                    }
                                                                />
                                                                <div className="absolute top-0 left-0 w-8 h-8 rounded-md bg-slate-200">
                                                                    <Image
                                                                        src={
                                                                            el.iconUrl
                                                                        }
                                                                        alt={
                                                                            el.title
                                                                        }
                                                                        layout="fill"
                                                                        objectFit="contain"
                                                                        className="rounded-md"
                                                                    />
                                                                </div>
                                                                <div className="absolute top-0 right-0 w-auto rounded-md p-1 bg-black/60 text-xs  text-center">
                                                                    {el.playingTime}
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <h3 className="text-sm font-NanumSquareNeo font-semibold w-full lg:text-base break-all line-clamp-2">
                                                                    {el.title}
                                                                </h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                        </>
                                    ) : (
                                        <>
                                            {testData.map((el) => (
                                                <div key={el.id}>
                                                    <div className="relative">
                                                        <div className="h-56 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-800 hover:opacity-75 lg:aspect-none relative">
                                                            <img
                                                                src={el.imgUrl}
                                                                alt={el.title}
                                                                className="h-full w-full object-cover object-center lg:h-full lg:w-full cursor-pointer"
                                                                onClick={() =>
                                                                    window.open(
                                                                        el.href
                                                                    )
                                                                }
                                                            />
                                                            <div className="absolute top-0 left-0 w-8 h-8 rounded-md bg-slate-200">
                                                                <Image
                                                                    src={
                                                                        el.iconUrl
                                                                    }
                                                                    alt={
                                                                        el.title
                                                                    }
                                                                    layout="fill"
                                                                    objectFit="contain"
                                                                    className="rounded-md"
                                                                />
                                                            </div>
                                                            <div className="absolute top-0 right-0 w-auto rounded-md p-1 bg-black/60 text-xs  text-center">
                                                                {el.playingTime}
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <h3 className="text-sm font-NanumSquareNeo font-semibold w-full lg:text-base break-all line-clamp-2">
                                                                {el.title}
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </>
                                    )}
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};
export default MainListPopular;
