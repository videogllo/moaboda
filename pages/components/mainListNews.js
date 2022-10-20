//functional
import Image from "next/image";

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
    { name: "농구" },
    { name: "축구" },
    { name: "야구" },
    { name: "배구" },
    { name: "공구" },
];

const MainListNews = () => {
    return(
        <div className="mt-12">
                    <h1 className="text-2xl font-extrabold font-NanumSquareNeo">
                        영상 소식
                    </h1>

                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex flex-col !md:flex-row w-full md:w-3/4">
                            <div className="bg-slate-300 p-4 mt-4 rounded-xl shadow-xl">
                                <div className="mx-auto">
                                    <div className="items-baseline justify-between flex pb-2">
                                        <h2 className="text-xl font-bold tracking-tight text-gray-900">
                                            영화
                                        </h2>
                                        <a
                                            href="#"
                                            className="text-sm font-semibold text-blue-800 hover:text-blue-700"
                                        >
                                            More
                                            <span aria-hidden="true">
                                                {" "}
                                                &rarr;
                                            </span>
                                        </a>
                                    </div>
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
                                                    <table className="divide-y divide-gray-300">
                                                        <tbody className="divide-y divide-gray-200">
                                                            {movieNews.map(
                                                                (i) => (
                                                                    <tr
                                                                        key={
                                                                            i.title
                                                                        }
                                                                        className="hover:bg-slate-400/20 duration-150 ease-in-out cursor-pointer text-sm font-semibold"
                                                                    >
                                                                        <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
                                                                            {
                                                                                i.from
                                                                            }
                                                                        </td>
                                                                        <td className="py-4 pl-4 pr-3 text-gray-900 sm:pl-6 md:pl-0">
                                                                            {
                                                                                i.title
                                                                            }
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
                                </div>
                            </div>
                            <div className="bg-slate-300 p-4 mt-4 rounded-xl shadow-xl w-full">
                                <div className="mx-auto">
                                    <div className="items-baseline justify-between flex pb-2">
                                        <h2 className="text-xl font-bold tracking-tight text-gray-900">
                                            드라마
                                        </h2>
                                        <a
                                            href="#"
                                            className="text-sm font-bold text-blue-800 hover:text-blue-700"
                                        >
                                            More
                                            <span aria-hidden="true">
                                                {" "}
                                                &rarr;
                                            </span>
                                        </a>
                                    </div>
                                </div>
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
                                                <table className="divide-y divide-gray-300">
                                                    <tbody className="divide-y divide-gray-200">
                                                        {movieNews.map((i) => (
                                                            <tr
                                                                key={i.title}
                                                                className="hover:bg-slate-400/20 duration-150 ease-in-out cursor-pointer text-sm font-semibold"
                                                            >
                                                                <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
                                                                    {i.from}
                                                                </td>
                                                                <td className="py-4 pl-4 pr-3 text-gray-900 sm:pl-6 md:pl-0">
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
                            </div>
                        </div>
                        <div className="bg-slate-300 p-4 mt-4 rounded-xl shadow-xl w-full md:w-1/4 h-full">
                            <div className="mx-auto">
                                <div className="items-baseline justify-between flex pb-2">
                                    <h2 className="text-xl font-extrabold tracking-tight text-gray-900">
                                        실시간 검색어 순위
                                    </h2>
                                </div>
                                <div className="flex items-center">
                                    <div className="px-2 sm:px-3 lg:px-4 w-full">
                                        <div className="flex flex-col truncate">
                                            <div className="overflow-hidden">
                                                <table className="divide-y divide-gray-300 w-full">
                                                    <tbody className="divide-y divide-gray-200">
                                                        {searchRanking.map(
                                                            (i, idx) => (
                                                                <tr
                                                                    key={i.name}
                                                                    className="hover:bg-slate-400/20 duration-150 ease-in-out cursor-pointer text-sm font-semibold"
                                                                >
                                                                    <td className="w-4">
                                                                        {idx +
                                                                            1}
                                                                        .&nbsp;
                                                                    </td>
                                                                    <td className="py-4 pl-4 pr-3 text-gray-900 sm:pl-6 md:pl-0 truncate">
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
                            </div>
                        </div>
                    </div>
                </div>
    )
}
export default MainListNews;