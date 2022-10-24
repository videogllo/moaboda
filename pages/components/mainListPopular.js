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
        youtube: [
            {
                id: "youtube1",
                url: "https://static-cdn.jtvnw.net/previews-ttv/live_user_paka9999-640x480.jpg",
                title: "youtube title1",
            },
            {
                id: "youtube2",
                url: "https://static-cdn.jtvnw.net/previews-ttv/live_user_paka9999-640x480.jpg",
                title: "youtube title2",
            },
            {
                id: "youtube3",
                url: "https://static-cdn.jtvnw.net/previews-ttv/live_user_paka9999-640x480.jpg",
                title: "youtube title3",
            },
        ],
    },
    {
        twitch: [
            {
                id: "twitch1",
                url: "https://static-cdn.jtvnw.net/previews-ttv/live_user_paka9999-640x480.jpg",
                title: "twitch title1",
            },
            {
                id: "twitch2",
                url: "https://static-cdn.jtvnw.net/previews-ttv/live_user_paka9999-640x480.jpg",
                title: "twitch title2",
            },
            {
                id: "twitch3",
                url: "https://static-cdn.jtvnw.net/previews-ttv/live_user_paka9999-640x480.jpg",
                title: "twitch title3",
            },
        ],
    },
];

const testData2 = ["youtube", "twitch", "afreeca"];

const MainListPopular = () => {
    const [data, setData] = useState(null);
    const [SELECTFILTER] = useRecoilState(SELECT_FILTER);

    useEffect(() => {
        const fnMainList = async () => {
            await fetch("/api/main")
                .then((res) => res.json())
                .then((data) => {
                    // console.log(data);
                    // console.log("testData : ", testData[1]);
                    setData(data);

                    console.log("yogiyo");
                    // console.log(testData2.filter(x => testData.includes(x)))
                    // console.log(testData.find(el => el == testData2))

                    
                });
        };
        fnMainList();
    }, []);

    useEffect(() => {
        for(let i = 0; i < SELECTFILTER.length; i++){
            console.log(JSON.stringify(data.result).includes(SELECTFILTER[i]))
        }
    },[SELECTFILTER])

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
                                            {/* {SELECTFILTER.map(el => (
                                                <div></div>
                                            ))} */}
                                            {/* {testData[0]} */}
                                            {/* {data.result[1].twitch.map((el) => (
                                                <div key={el.id}>
                                                    <div className="group relative">
                                                        <div className="h-56 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-800 group-hover:opacity-75 lg:aspect-none relative">
                                                            <img
                                                                src={el.url}
                                                                alt={el.title}
                                                                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                                            />
                                                        </div>
                                                        <div className="mt-3 flex justify-between">
                                                            <div>
                                                                <h3 className="text-sm">
                                                                    <a
                                                                        href={
                                                                            el.imgUrl
                                                                        }
                                                                    >
                                                                        <span
                                                                            aria-hidden="true"
                                                                            className="absolute inset-0"
                                                                        />
                                                                        {
                                                                            el.title
                                                                        }
                                                                    </a>
                                                                </h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))} */}
                                        </>
                                    ) : (
                                        <>
                                            {/* youtube */}
                                            {/* {data.result[0].youtube.map(
                                                (el) => (
                                                    <div key={el.id}>
                                                        {el.title}
                                                    </div>
                                                )
                                            )} */}

                                            {/* twitch */}
                                            {data.result[0].twitch.map((el) => (
                                                <div key={el.id}>
                                                    <div className="group relative">
                                                        <div className="h-56 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-800 group-hover:opacity-75 lg:aspect-none relative">
                                                            <img
                                                                src={el.url}
                                                                alt={el.title}
                                                                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                                            />
                                                        </div>
                                                        <div className="mt-3 flex justify-between">
                                                            <div>
                                                                <h3 className="text-sm">
                                                                    <a
                                                                        href={
                                                                            el.imgUrl
                                                                        }
                                                                    >
                                                                        <span
                                                                            aria-hidden="true"
                                                                            className="absolute inset-0"
                                                                        />
                                                                        {
                                                                            el.title
                                                                        }
                                                                    </a>
                                                                </h3>
                                                            </div>
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
