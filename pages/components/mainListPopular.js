//funcional
import { useState, useEffect } from "react";
import Image from "next/image";

//component
import Loading from "./loading";

//recoil
import { SELECT_FILTER } from "../../store/atom";
import { useRecoilState } from "recoil";

const MainListPopular = () => {
    const [data, setData] = useState(null);
    const [SELECTFILTER] = useRecoilState(SELECT_FILTER);

    useEffect(() => {
        const fnMainList = async () => {
            await fetch("/api/main")
                .then((res) => res.json())
                .then((data) => {
                    setData(data.result);
                });
        };
        fnMainList();
    }, []);

    /**
     * 플랫폼별로 사용하는 아이콘이 달라서 분기 함수
     * @param val 
     * @returns
     */
    const dynamicIcon = (val) => {
        let returnValue = "";

        switch (val) {
            case "Youtube":
                returnValue = "/image/icon/youtube.png";
                break;
            case "Twitch":
                returnValue = "/image/icon/twitch.png";
                break;
        }
        return returnValue;
    };

    return (
        <>
            <div className="flex flex-col gap-6 mt-12">
                <div className="bg-slate-700 p-4 rounded-xl shadow-xl">
                    <div className="mx-auto">
                        <div className="items-baseline justify-between flex pb-2">
                            <h2 className="text-xl xl:text-2xl font-bold tracking-tight">
                                모든 영상
                            </h2>

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
                            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                                {SELECTFILTER.length > 0 ? (
                                    <>
                                        {data
                                            .filter((el) =>
                                                SELECTFILTER.some(
                                                    (el2) => el.type === el2
                                                )
                                            )
                                            .sort(function (a, b) {
                                                return b.hit - a.hit;
                                            })
                                            .map((el) => (
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
                                                                        dynamicIcon(el.type)
                                                                    }
                                                                    alt={
                                                                        el.title
                                                                    }
                                                                    layout="fill"
                                                                    objectFit="contain"
                                                                    className="rounded-md"
                                                                />
                                                            </div>
                                                            {/* <div className="absolute top-0 right-0 w-auto rounded-md p-1 bg-black/60 text-xs  text-center">
                                                                {el.playTime}
                                                            </div> */}
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
                                        {data
                                            .sort(function (a, b) {
                                                return b.hit - a.hit;
                                            })
                                            .map((el) => (
                                                <div key={el.id}>
                                                    <div className="relative">
                                                        <div className="h-56 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-800 hover:opacity-75 lg:aspect-none relative">
                                                            <img
                                                                src={
                                                                    el.imgUrl
                                                                }
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
                                                                        dynamicIcon(el.type)
                                                                    }
                                                                    alt={
                                                                        el.title
                                                                    }
                                                                    layout="fill"
                                                                    objectFit="contain"
                                                                    className="rounded-md"
                                                                />
                                                            </div>
                                                            {/* <div className="absolute top-0 right-0 w-auto rounded-md p-1 bg-black/60 text-xs  text-center">
                                                                {el.playTime}
                                                            </div> */}
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
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};
export default MainListPopular;
