const searchRanking = [
    { name: "검색어1" },
    { name: "검색어2" },
    { name: "검색어3" },
    { name: "검색어4" },
    { name: "검색어5" },
];

const SideMenu = () => {
    return (
        <div className="fixed right-4 top-[20%] bg-none z-30 rounded-lg shadow-lg hidden lg:block">
            <div className="w-32 h-full bg-pink-700 rounded-lg">
                <div className="mx-auto px-2">
                    <div className="items-baseline justify-center flex py-2">
                        <h2 className="text-base xl:text-lg font-bold tracking-tight text-gray-900">
                            인기 검색어
                        </h2>
                    </div>
                    <div className="flex items-center">
                        <div className="w-full">
                            <div className="flex flex-col truncate">
                                <div className="overflow-hidden">
                                    <table className="divide-y divide-gray-300 w-full table-fixed">
                                        <tbody className="divide-y divide-gray-200">
                                            {searchRanking.map((i, idx) => (
                                                <tr
                                                    key={i.name}
                                                    className="hover:bg-slate-400/20 duration-150 ease-in-out cursor-pointer text-xs xl:text-sm font-semibold"
                                                >
                                                    <td className="py-3 text-slate-900 text-center truncate">
                                                        {idx + 1}
                                                        &#46;&ensp;
                                                        {i.name}
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
        </div>
    );
};
export default SideMenu;
