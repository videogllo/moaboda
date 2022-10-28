//functional
import { useEffect, useState } from "react";

const categoryData = [
    {
        title: "플랫폼",
        content: ["Youtube", "Twitch", "AfreecaTV"],
    },
    {
        title: "게임",
        content: [
            "리그오브레전드",
            "배틀그라운드",
            "배틀그라운드2",
            "배틀그라운드3",
            "배틀그라운드4",
            "배틀그라운드5",
            "배틀그라운드6",
            "배틀그라운드7",
        ],
    },
];

const Category = () => {
    const [categoryState, setCategoryState] = useState([])

    /**
     * 카테고리를 클릭했을 때, categoryState에 없으면 삼입 있으면 제거
     * @param {*} main 
     * @param {*} sub 
     */
    const categoryClick = (main, sub) => {
        
        // setCategoryState(((prev) => [...prev.main]))
    }

    useEffect(() => {
        console.log(categoryState)
    }, [categoryState])

    return (
        <div className="mt-12 w-full">
            <div className="w-full mx-auto">
                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5">
                    <table className="min-w-full divide-y divide-slate-500 border border-slate-500">
                        <colgroup>
                            <col width="20%"></col>
                            <col width="80%"></col>
                        </colgroup>
                        <tbody className="divide-y divide-slate-500 bg-slate-800">
                            {categoryData.map((el) => (
                                <tr
                                    key={el.title}
                                    className="divide-x divide-slate-500"
                                >
                                    <th className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-slate-50 sm:pl-6">
                                        {el.title}
                                    </th>
                                    <td className="whitespace-nowrap p-4 text-sm text-slate-200 flex gap-4 flex-wrap">
                                        {el.content.map((el2) => (
                                            <div key={el2} onClick={() => categoryClick(el.title, el2)} className="hover:bg-cyan-500 transition-all rounded-lg px-2 cursor-pointer">{el2}</div>
                                        ))}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
export default Category;
