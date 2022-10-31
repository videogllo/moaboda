//functional
import { useEffect, useState } from "react";

//statement
import { SELECT_FILTER } from "../../store/atom";
import { useRecoilState } from "recoil";

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
    const [SELECTFILTER, setSELECTFILTER] = useRecoilState(SELECT_FILTER);

    /**
     * 카테고리 에서 중분류를 선택 시, 발생 이벤트
     * atom의 SELECT_FILTER에 데이터를 저장한다.
     * main: 대분류, sub: 중분류
     * @param {*} main 
     * @param {*} sub 
     */
    const categoryClick = (main, sub) => {
        alert("main : " + main + ", " + "sub : " + sub);
    };

    return (
        <div className="mt-8 md:mt-12 w-full">
            {/* 카테고리 테이블 */}
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
                                    {/* 대분류 */}
                                    <th className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-slate-50 sm:pl-6">
                                        {el.title}
                                    </th>
                                    {/* 중분류 */}
                                    <td className="whitespace-nowrap p-4 text-sm text-slate-200 flex gap-4 flex-wrap">
                                        {el.content.map((el2) => (
                                            <div
                                                key={el2}
                                                onClick={() =>
                                                    categoryClick(el.title, el2)
                                                }
                                                className="hover:bg-cyan-500 transition-all rounded-lg px-2 cursor-pointer"
                                            >
                                                {el2}
                                            </div>
                                        ))}
                                    </td>
                                </tr>
                            ))}

                            {/* 카테고리 결과 - 선택된 카테고리가 존재하면 출력 */}
                            {SELECTFILTER.length > 0 && (
                                <tr>
                                    <td colSpan={2} className="p-4">
                                        asd
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
export default Category;
