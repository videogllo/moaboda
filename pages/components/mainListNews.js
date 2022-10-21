//functional
import Image from "next/image";
import { useState } from "react";

//component
import Loading from "./loading";

const movieNews = [
    {
        from: "Naver",
        title: "2022 흥행작",
    },
    {
        from: "Daum",
        title: "블록버스터 신작",
    },
    {
        from: "Kakao",
        title: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
    },
];

const searchRanking = [
    { name: "농구농구" },
    { name: "축구축구" },
    { name: "야구야구" },
    { name: "배구배구" },
    { name: "공구공구" },
];

const MainListNews = () => {
    const [data, setData] = useState("test"); //임시로 데이터 있게함 => default null로 변경할 것

    return (
        <div className="mt-12">
            <h1 className="text-2xl xl:text-3xl font-extrabold font-NanumSquareNeo">
                영상 소식
            </h1>

            <div className="flex flex-col md:flex-row gap-6 mt-6">
                <div className="flex flex-col !md:flex-row w-full md:w-3/4 gap-6">
                    <div className="bg-slate-300 p-4 rounded-xl shadow-xl">
                        <div className="mx-auto">
                            <div className="items-baseline justify-between flex pb-2">
                                <h2 className="text-xl xl:text-2xl font-bold tracking-tight text-gray-900">
                                    영화
                                </h2>
                                <a
                                    href="#"
                                    className="text-xs md:text-sm font-semibold text-blue-800 hover:text-blue-700"
                                >
                                    More
                                    <span aria-hidden="true"> &rarr;</span>
                                </a>
                            </div>
                            {data == null ? (
                                <Loading></Loading>
                            ) : (
                                <div className="flex items-center">
                                    <div className="bg-cyan-500 w-1/2 h-44 relative rounded-lg hover:opacity-90">
                                        <Image
                                            src="/image/logo/logo.png"
                                            layout="fill"
                                            objectFit="contain"
                                            alt=""
                                        />
                                    </div>
                                    <div className="px-2 sm:px-3 lg:px-4 w-1/2">
                                        <div className="flex flex-col truncate">
                                            <div className="overflow-hidden">
                                                <table className="divide-y divide-gray-300 w-full table-fixed">
                                                    <tbody className="divide-y divide-gray-200">
                                                        {movieNews.map((i) => (
                                                            <tr
                                                                key={i.title}
                                                                className="hover:bg-slate-400/20 duration-150 ease-in-out cursor-pointer text-sm xl:text-base font-semibold"
                                                            >
                                                                <td className="whitespace-nowrap py-4 px-3 text-gray-500 w-16 md:w-20">
                                                                    {i.from}
                                                                </td>
                                                                <td className="text-slate-900 truncate">
                                                                    {i.title}
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="bg-slate-300 p-4 rounded-xl shadow-xl w-full">
                        <div className="mx-auto">
                            <div className="items-baseline justify-between flex pb-2">
                                <h2 className="text-xl xl:text-2xl font-bold tracking-tight text-gray-900">
                                    드라마
                                </h2>
                                <a
                                    href="#"
                                    className="text-xs md:text-sm font-bold text-blue-800 hover:text-blue-700"
                                >
                                    More
                                    <span aria-hidden="true"> &rarr;</span>
                                </a>
                            </div>
                        </div>
                        {data == null ? (
                            <Loading></Loading>
                        ) : (
                            <div className="flex items-center">
                                <div className="bg-cyan-500 w-1/2 h-44 relative rounded-lg hover:opacity-90">
                                    <Image
                                        src="/image/logo/logo.png"
                                        layout="fill"
                                        objectFit="contain"
                                        alt=""
                                    />
                                </div>
                                <div className="px-2 sm:px-3 lg:px-4 w-1/2">
                                    <div className="flex flex-col truncate">
                                        <div className="overflow-hidden">
                                            <table className="divide-y divide-gray-300 table-fixed">
                                                <tbody className="divide-y divide-gray-200">
                                                    {movieNews.map((i) => (
                                                        <tr
                                                            key={i.title}
                                                            className="hover:bg-slate-400/20 duration-150 ease-in-out cursor-pointer text-sm xl:text-base font-semibold"
                                                        >
                                                            <td className="whitespace-nowrap py-4 px-3 text-gray-500 w-16 md:w-20">
                                                                {i.from}
                                                            </td>
                                                            <td className="text-slate-900 truncate">
                                                                {i.title}
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="bg-slate-300 p-4 rounded-xl shadow-xl w-full md:w-1/4 h-full">
                    <div className="mx-auto">
                        <div className="items-baseline justify-between flex pb-2">
                            <h2 className="text-xl xl:text-2xl font-bold tracking-tight text-gray-900">
                                실시간 검색어 순위
                            </h2>
                        </div>
                        {data == null ? (
                            <Loading></Loading>
                        ) : (
                            <div className="flex items-center">
                                <div className="px-2 sm:px-3 lg:px-4 w-full">
                                    <div className="flex flex-col truncate">
                                        <div className="overflow-hidden">
                                            <table className="divide-y divide-gray-300 w-full table-fixed">
                                                <tbody className="divide-y divide-gray-200">
                                                    {searchRanking.map(
                                                        (i, idx) => (
                                                            <tr
                                                                key={i.name}
                                                                className="hover:bg-slate-400/20 duration-150 ease-in-out cursor-pointer text-sm xl:text-base font-semibold"
                                                            >
                                                                <td className="py-4 px-3 text-slate-900 text-center truncate">
                                                                    {idx + 1}
                                                                    &#46;&ensp;
                                                                    {i.name}
                                                                </td>
                                                            </tr>
                                                        )
                                                    )}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default MainListNews;
