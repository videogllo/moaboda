//funcional
import { useState, useEffect } from "react";
import Image from "next/image";
import * as common from "../../js/common";

//component
import Loading from "./loading";

//recoil
import { SELECT_ICON_FILTER } from "../../store/atom";
import { useRecoilState } from "recoil";

const MainListPopular = () => {
    const [data, setData] = useState([]);
    const [SELECTICONFILTER] = useRecoilState(SELECT_ICON_FILTER);

    useEffect(() => {
        const fnMainList = async () => {
            await fetch("/api/main")
                .then((res) => res.json())
                .then((data) => {
                    console.log(data.result);
                    setData(data.result);
                });
        };
        fnMainList();
    }, []);

    return (
        <>
            <div className="mt-8 md:mt-12 flex flex-col gap-6">
                <div className="bg-slate-800/60 px-4 py-6 rounded-xl shadow-xl">
                    <div className="mx-auto">
                        <div className="items-baseline flex pb-4">
                            <h2 className="text-xl xl:text-2xl font-bold tracking-tight">
                                인기 컨텐츠
                            </h2>

                            <a
                                href="#"
                                className="text-xs md:text-sm font-semibold text-[#ff0558] xl:hover:text-[#ff0558]/60 transition-all ml-auto"
                            >
                                더보기
                                <span aria-hidden="true"> &rarr;</span>
                            </a>
                        </div>

                        {data.length === 0 ? (
                            <>
                                <Loading></Loading>
                            </>
                        ) : (
                            <div className="grid gap-y-10 gap-x-6 xl:gap-x-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
                                {/* 필터 활성화 */}
                                {SELECTICONFILTER.length > 0 ? (
                                    <>
                                        {data
                                            .filter((el) =>
                                                SELECTICONFILTER.some(
                                                    (el2) => el.type === el2
                                                )
                                            )
                                            .sort(function (a, b) {
                                                return b.hit - a.hit;
                                            })
                                            .map((el) => (
                                                <div key={el.id}>
                                                    <div className="relative">
                                                        <div className="h-56 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-800 lg:aspect-none relative">
                                                            <img
                                                                src={el.imgUrl}
                                                                alt={el.title}
                                                                className="h-full w-full object-cover object-center lg:h-full lg:w-full cursor-pointer hover:scale-110 transition-all duration-500"
                                                                onClick={() =>
                                                                    window.open(
                                                                        el.href
                                                                    )
                                                                }
                                                            />
                                                            <div className="absolute top-0 left-0 w-8 h-8 rounded-md bg-slate-200">
                                                                <Image
                                                                    src={common.dynamicIcon(
                                                                        el.type
                                                                    )}
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
                                    // 필터 미활성화
                                    <>
                                        {data
                                            .sort(function (a, b) {
                                                return b.hit - a.hit;
                                            })
                                            .map((el) => (
                                                <div key={el.id}>
                                                    <div className="relative">
                                                        <div className="h-56 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-slate-800 lg:aspect-none relative">
                                                            <img
                                                                src={el.imgUrl}
                                                                alt={el.title}
                                                                className="h-full w-full object-cover object-center lg:h-full lg:w-full cursor-pointer hover:scale-110 transition-all duration-500"
                                                                onClick={() =>
                                                                    window.open(
                                                                        el.href
                                                                    )
                                                                }
                                                            />
                                                            <div className="absolute top-0 left-0 w-8 h-8 rounded-md bg-slate-200">
                                                                <Image
                                                                    src={common.dynamicIcon(
                                                                        el.type
                                                                    )}
                                                                    alt={
                                                                        el.title
                                                                    }
                                                                    layout="fill"
                                                                    objectFit="contain"
                                                                    className="rounded-md"
                                                                />
                                                            </div>
                                                            {/* 데이터 중 playTime이 존재 하다면 출력 */}
                                                            {el.playTime !==
                                                            undefined ? (
                                                                <div className="absolute top-0 right-0 w-auto rounded-md p-1 bg-black/60 text-xs  text-center">
                                                                    <span>
                                                                        {/* 배열의 첫번째 값을 제외한 값 출력 */}
                                                                        {el.playTime
                                                                            .slice(
                                                                                1
                                                                            )
                                                                            .map(
                                                                                (
                                                                                    el,
                                                                                    i
                                                                                ) => (
                                                                                    <>
                                                                                        {/* 첫번째 값을 제외한 값의 앞에 ":" 추가 */}
                                                                                        {i !==
                                                                                        0 ? (
                                                                                            <span
                                                                                                key={
                                                                                                    el
                                                                                                }
                                                                                            >
                                                                                                &#58;
                                                                                                {
                                                                                                    el
                                                                                                }
                                                                                            </span>
                                                                                        ) : (
                                                                                            <span
                                                                                                key={
                                                                                                    i
                                                                                                }
                                                                                            >
                                                                                                {
                                                                                                    el
                                                                                                }
                                                                                            </span>
                                                                                        )}
                                                                                    </>
                                                                                )
                                                                            )}
                                                                    </span>
                                                                </div>
                                                            ) : null}
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
