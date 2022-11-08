//functional
import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import * as common from "../../js/common";
// import InfiniteScroll from "react-infinite-scroll-component";

//component
import Loading from "./loading";

//statement
import { useRecoilState } from "recoil";
import { SELECT_FILTER, SELECT_PLATFORM_FILTER } from "../../store/atom";

const ResultList = () => {
    const [data, setData] = useState([]);
    // const [data2, setData2] = useState([]);
    const [SELECTFILTER] = useRecoilState(SELECT_FILTER);
    const [SELECTPLATFORMFILTER] = useRecoilState(SELECT_PLATFORM_FILTER);

    useEffect(() => {
        //최초 불러올 데이터
        fetchData();
    }, []);

    const fetchData = async () => {
        await axios({
            method: "GET",
            url: "/api/result",
        }).then((res) => {
            setData(res.data);
            console.log(res.data);
        });
    };

    // const nextFetch = async () => {
    //     setData(data.concat(data));
    // };

    return (
        <div className="mt-8 md:mt-12 mb-8 flex flex-col gap-2">
            {/* <InfiniteScroll
                dataLength={items.length} //This is important field to render the next data
                next={nextFetch}
                hasMore={true}
                loader={<h4>Loading...</h4>}
                endMessage={
                    <p
                        style={{
                            textAlign: "center",
                        }}
                    >
                        <b>Yay! You have seen it all</b>
                    </p>
                }
                // below props only if you need pull down functionality
            >
                {data.map((el) =>
                    el.data[0].map((el2) => <div key={el2.id}>{el2.title}</div>)
                )}
            </InfiniteScroll> */}

            {data.length === 0 ? (
                <>
                    <div className="flex flex-col gap-3">
                        {new Array(10).fill().map((el) => (
                            <div className="bg-slate-700 w-full shadow-lg rounded-lg p-2 py-4 flex gap-3">
                                <div className="w-40 max-w-52 h-40 md:h-48 xl:h-56 bg-slate-600 relative flex basis-1/4 justify-center rounded-md animate-pulse2"></div>
                                <div className="flex flex-col basis-3/4 gap-4">
                                    <div className="flex gap-3">
                                        <div className="h-6 w-8 bg-slate-600 rounded-lg animate-pulse2"></div>
                                        <div className="h-6 w-1/2 bg-slate-600 rounded-lg animate-pulse2"></div>
                                    </div>
                                    <div className="h-6 w-1/3 bg-slate-600 rounded-lg animate-pulse2"></div>
                                    <div className="h-6 w-1/4 bg-slate-600 rounded-lg animate-pulse2"></div>
                                    <div className="h-6 w-1/2 bg-slate-600 rounded-lg animate-pulse2"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <div className="flex flex-col gap-3">
                    {SELECTFILTER.length > 0 ||
                    SELECTPLATFORMFILTER.length > 0 ? (
                        //필터가 플랫폼, 태그 중 한개라도 적용이 되었다면
                        <>
                            {/* 필터가 적용되었고 그것이 플랫폼만 이라면 */}
                            {SELECTPLATFORMFILTER.length > 0 &&
                                SELECTFILTER.length === 0 && (
                                    <>
                                        {data.map((el) => (
                                            <div
                                                key={el.type}
                                                className="flex flex-col gap-3"
                                            >
                                                {el.data[0]
                                                    .filter((el2) =>
                                                        el2.tag.some((el3) =>
                                                            SELECTPLATFORMFILTER.includes(
                                                                el3
                                                            )
                                                        )
                                                    )
                                                    .map((el2) => (
                                                        <div
                                                            key={el2.id}
                                                            className="bg-slate-800 w-full shadow-lg rounded-lg p-2 py-4 flex gap-3"
                                                        >
                                                            <div className="w-40 max-w-52 h-40 md:h-48 xl:h-56 bg-slate-900 relative flex basis-1/4 justify-center rounded-md">
                                                                <a
                                                                    href={
                                                                        el2.href
                                                                    }
                                                                    target="_blank"
                                                                >
                                                                    <Image
                                                                        src={
                                                                            el2.imgUrl
                                                                        }
                                                                        alt={
                                                                            el2.title
                                                                        }
                                                                        layout="fill"
                                                                        objectFit="cover"
                                                                        unoptimized={
                                                                            true
                                                                        }
                                                                        className="cursor-pointer hover:scale-110 transition-all duration-500"
                                                                    ></Image>
                                                                </a>
                                                            </div>
                                                            <div className="flex flex-col basis-3/4 gap-1">
                                                                <div className="flex gap-2 items-center">
                                                                    <div className="h-8 w-8 relative">
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
                                                                            unoptimized={
                                                                                true
                                                                            }
                                                                        ></Image>
                                                                    </div>
                                                                    <div className="w-full text-lg font-semibold line-clamp-1">
                                                                        {
                                                                            el2.title
                                                                        }
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    description
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                            </div>
                                        ))}
                                    </>
                                )}

                            {/* 필터가 적용되었고 그것이 태그만 이라면 */}
                            {SELECTFILTER.length > 0 &&
                                SELECTPLATFORMFILTER.length === 0 && (
                                    <>
                                        {data.map((el) => (
                                            <div
                                                key={el.type}
                                                className="flex flex-col gap-3"
                                            >
                                                {el.data[0]
                                                    .filter((el2) =>
                                                        el2.tag.some((el3) =>
                                                            SELECTFILTER.includes(
                                                                el3
                                                            )
                                                        )
                                                    )
                                                    .map((el2) => (
                                                        <div
                                                            key={el2.id}
                                                            className="bg-slate-800 w-full shadow-lg rounded-lg p-2 py-4 flex gap-3"
                                                        >
                                                            <div className="w-40 max-w-52 h-40 md:h-48 xl:h-56 bg-slate-900 relative flex basis-1/4 justify-center rounded-md">
                                                                <a
                                                                    href={
                                                                        el2.href
                                                                    }
                                                                    target="_blank"
                                                                >
                                                                    <Image
                                                                        src={
                                                                            el2.imgUrl
                                                                        }
                                                                        alt={
                                                                            el2.title
                                                                        }
                                                                        layout="fill"
                                                                        objectFit="cover"
                                                                        unoptimized={
                                                                            true
                                                                        }
                                                                        className="cursor-pointer hover:scale-110 transition-all duration-500"
                                                                    ></Image>
                                                                </a>
                                                            </div>
                                                            <div className="flex flex-col basis-3/4 gap-1">
                                                                <div className="flex gap-2 items-center">
                                                                    <div className="h-8 w-8 relative">
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
                                                                            unoptimized={
                                                                                true
                                                                            }
                                                                        ></Image>
                                                                    </div>
                                                                    <div className="w-full text-lg font-semibold line-clamp-1">
                                                                        {
                                                                            el2.title
                                                                        }
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    description
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                            </div>
                                        ))}
                                    </>
                                )}

                            {/* 필터가 적용되었고 그것이 플랫폼과 태그 둘 다라면 */}
                            {SELECTFILTER.length > 0 &&
                                SELECTPLATFORMFILTER.length > 0 && (
                                    <>
                                        {data.map((el) => (
                                            <div
                                                key={el.type}
                                                className="flex flex-col gap-3"
                                            >
                                                {el.data[0]
                                                    .filter(
                                                        (el2) =>
                                                            el2.tag.some(
                                                                (el3) =>
                                                                    SELECTFILTER.includes(
                                                                        el3
                                                                    )
                                                            ) &&
                                                            el2.tag.some(
                                                                (el3) =>
                                                                    SELECTPLATFORMFILTER.includes(
                                                                        el3
                                                                    )
                                                            )
                                                    )
                                                    .map((el2) => (
                                                        <div
                                                            key={el2.id}
                                                            className="bg-slate-800 w-full shadow-lg rounded-lg p-2 py-4 flex gap-3"
                                                        >
                                                            <div className="w-40 max-w-52 h-40 md:h-48 xl:h-56 bg-slate-900 relative flex basis-1/4 justify-center rounded-md">
                                                                <a
                                                                    href={
                                                                        el2.href
                                                                    }
                                                                    target="_blank"
                                                                >
                                                                    <Image
                                                                        src={
                                                                            el2.imgUrl
                                                                        }
                                                                        alt={
                                                                            el2.title
                                                                        }
                                                                        layout="fill"
                                                                        objectFit="cover"
                                                                        unoptimized={
                                                                            true
                                                                        }
                                                                        className="cursor-pointer hover:scale-110 transition-all duration-500"
                                                                    ></Image>
                                                                </a>
                                                            </div>
                                                            <div className="flex flex-col basis-3/4 gap-1">
                                                                <div className="flex gap-2 items-center">
                                                                    <div className="h-8 w-8 relative">
                                                                        <Image
                                                                            src={common.dynamicIcon(
                                                                                el.type
                                                                            )}
                                                                            alt={
                                                                                el.title
                                                                            }
                                                                            layout="fill"
                                                                            objectFit="contain"
                                                                            unoptimized={
                                                                                true
                                                                            }
                                                                            className="rounded-md"
                                                                        ></Image>
                                                                    </div>
                                                                    <div className="w-full text-lg font-semibold line-clamp-1">
                                                                        {
                                                                            el2.title
                                                                        }
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    description
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                            </div>
                                        ))}
                                    </>
                                )}
                        </>
                    ) : (
                        //필터가 플랫폼, 태그 중 아무것도 적용이 안되었다면
                        <>
                            {/* 모든 플랫폼을 순회하여 출력 */}
                            {data.map((el) => (
                                <div
                                    key={el.type}
                                    className="flex flex-col gap-3"
                                >
                                    {/* 각 플랫폼의 데이터를 출력 */}
                                    {el.data[0].map((el2) => (
                                        <>
                                            <div
                                                key={el2.id}
                                                className="bg-slate-800 w-full shadow-lg rounded-lg p-2 py-4 flex gap-3"
                                            >
                                                <div
                                                    className="w-40 max-w-52 h-40 md:h-48 xl:h-56 bg-slate-900 relative flex basis-1/4 justify-center rounded-md overflow-hidden"
                                                    onClick={() => {
                                                        window.open(
                                                            el2.href,
                                                            "_blank"
                                                        );
                                                    }}
                                                >
                                                    <Image
                                                        src={el2.imgUrl}
                                                        layout="fill"
                                                        objectFit="contain"
                                                        unoptimized={true}
                                                        priority={true}
                                                        className="cursor-pointer hover:scale-110 transition-all duration-500"
                                                    ></Image>
                                                </div>
                                                <div className="flex flex-col basis-3/4 gap-1">
                                                    <div className="flex gap-2 items-center">
                                                        <div className="h-8 w-8 relative">
                                                            <Image
                                                                src={common.dynamicIcon(
                                                                    el.type
                                                                )}
                                                                alt={el.title}
                                                                layout="fill"
                                                                objectFit="contain"
                                                                className="rounded-md"
                                                                unoptimized={
                                                                    true
                                                                }
                                                            ></Image>
                                                        </div>
                                                        <div className="w-full text-lg font-semibold line-clamp-1">
                                                            {el2.title}
                                                        </div>
                                                    </div>
                                                    <div>description</div>
                                                </div>
                                            </div>
                                        </>
                                    ))}
                                </div>
                            ))}
                        </>
                    )}
                </div>
            )}
        </div>
    );
};
export default ResultList;
