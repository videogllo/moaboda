//functional
import Image from "next/image";
import { useState } from "react";

//component
import Loading from "./loading";

const news = [
    {
        from: "from1",
        title: "title1",
    },

    [
        {
            from: "from2",
            title: "title2",
        },
        {
            from: "from3",
            title: "title3",
        },
        {
            from: "from4",
            title: "title4",
        },
    ],
];

const test = "test";

const MainListNews = () => {
    const [data, setData] = useState("test"); //임시로 데이터 있게함 => default null로 변경할 것

    return (
        <div className="mt-12">
            {/* <h1 className="text-2xl xl:text-3xl font-extrabold font-NanumSquareNeo">
                영상 소식
            </h1> */}

            <div className="flex flex-col w-full gap-6">
                <div className="bg-slate-700 p-4 rounded-xl shadow-xl">
                    <div className="mx-auto">
                        <div className="items-baseline justify-between flex pb-2">
                            <h2 className="text-xl xl:text-2xl font-bold tracking-tight">
                                정보
                            </h2>
                            <a
                                href="#"
                                className="text-xs md:text-sm font-semibold text-cyan-500 hover:text-cyan-700 transition-all"
                            >
                                More
                                <span aria-hidden="true"> &rarr;</span>
                            </a>
                        </div>
                        {data == null ? (
                            <Loading></Loading>
                        ) : (
                            <div className="flex items-center">
                                {news.map((el, i) => (
                                    <>
                                        {i === 0 ? (
                                            <div
                                                key={i}
                                                className="flex flex-col w-1/2"
                                            >
                                                <div className="relative rounded-lg hover:opacity-80 w-full h-32 bg-slate-900">
                                                    <Image
                                                        src="/image/logo/logo.png"
                                                        layout="fill"
                                                        objectFit="contain"
                                                        alt="1"
                                                    />
                                                </div>
                                                <div>{el.title}</div>
                                            </div>
                                        ) : (
                                            <div
                                                key={i}
                                                className="flex flex-col w-1/2 bg-red-500"
                                            >
                                                {/* {el.map((e) => {
                                                    <div key={e.title}>
                                                        {e.title}
                                                    </div>;
                                                })} */}
                                            </div>
                                        )}
                                    </>
                                ))}

                                {/* <div className="flex flex-col w-1/2">
                                    <div className="bg-cyan-500 h-44 relative rounded-lg hover:opacity-80">
                                        <Image
                                            src="/image/logo/logo.png"
                                            layout="fill"
                                            objectFit="contain"
                                            alt="movieNewsMain"
                                        />
                                    </div>
    
                                    <p>title1</p>
                                </div>
                                
                                <div className="px-2 sm:px-3 lg:px-4 w-1/2">
                                    <div className="flex flex-col truncate">
                                        <div className="overflow-hidden">
                                            <table className="divide-y divide-gray-300 w-full table-fixed">
                                                <tbody className="divide-y divide-gray-200">
                                                    {news.map((i) => (
                                                        <tr
                                                            key={i.title}
                                                            className="cursor-pointer text-sm xl:text-base"
                                                        >
                                                            <td className="whitespace-nowrap py-4 px-3w-16 md:w-20">
                                                                {i.from}
                                                            </td>
                                                            <td className="truncate">
                                                                {i.title}
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default MainListNews;
