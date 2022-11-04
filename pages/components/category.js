//functional
// import { useEffect } from "react";
import { useState } from "react";

//style
import { Transition } from "@headlessui/react";

//statement
import { useRecoilState } from "recoil";
import { SELECT_FILTER, SELECT_PLATFORM_FILTER } from "../../store/atom";

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
            "엘든링",
            "다크소울",
            "인왕2",
            "GTA5",
            "스텔라리스",
        ],
    },
    {
        title: "스포츠",
        content: ["골프", "축구", "아이스하키"],
    },
];

const Category = () => {
    const [SELECTFILTER, setSELECTFILTER] = useRecoilState(SELECT_FILTER); //플랫폼을 제외한 카테고리
    const [SELECTPLATFORMFILTER, setSELECTPLATFORMFILTER] = useRecoilState(
        SELECT_PLATFORM_FILTER
    ); //플랫폼
    const [isCategory, setIsCategory] = useState(true);

    /**
     * 카테고리 에서 중분류를 선택 시, 발생 이벤트
     * atom의 SELECT_FILTER에 데이터를 저장한다.
     * @param {*} val
     */
    const categoryClick = (val) => {
        if (val === "Youtube" || val === "Twitch") {
            if (SELECTPLATFORMFILTER.find((el) => el === val)) {
                //이미 선택된 카테고리라면
                setSELECTPLATFORMFILTER(
                    SELECTPLATFORMFILTER.filter((el) => el !== val)
                );
            } else {
                //배열에 선택된 카테고리 추가
                setSELECTPLATFORMFILTER((prev) => [...prev, val]);
            }
        } else {
            if (SELECTFILTER.find((el) => el === val)) {
                //이미 선택된 카테고리라면
                setSELECTFILTER(SELECTFILTER.filter((el) => el !== val));
            } else {
                //배열에 선택된 카테고리 추가
                setSELECTFILTER((prev) => [...prev, val]);
            }
        }
    };

    return (
        <div className="mt-8 md:mt-12 w-full flex flex-col">
            {/* 접힘 / 펼침 */}
            <div className="ml-auto text-lg lg:text-xl pb-1">
                {isCategory === true ? (
                    <button onClick={() => setIsCategory(false)}>🔼</button>
                ) : (
                    <button onClick={() => setIsCategory(true)}>🔽</button>
                )}
            </div>

            <Transition
                show={isCategory}
                enter="transition-opacity duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                {/* 카테고리 테이블 */}
                <div className="w-full mx-auto transition-all duration-300 ease-in-out">
                    <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5">
                        <table className="min-w-full divide-y divide-slate-500 border border-slate-500">
                            <colgroup>
                                <col width="20%"></col>
                                <col width="80%"></col>
                            </colgroup>
                            <tbody className="divide-y divide-slate-500 bg-slate-800 text-sm">
                                {categoryData.map((el) => (
                                    <tr
                                        key={el.title}
                                        className="divide-x divide-slate-500"
                                    >
                                        {/* 대분류 */}
                                        <th className="whitespace-nowrap pl-4 pr-4 text-base sm:pl-6">
                                            {el.title}
                                        </th>
                                        {/* 중분류 */}
                                        <td className="whitespace-nowrap p-4 flex gap-4 flex-wrap">
                                            {el.content.map((el2) => (
                                                <div key={el2}>
                                                    {SELECTFILTER.includes(
                                                        el2
                                                    ) ||
                                                    SELECTPLATFORMFILTER.includes(
                                                        el2
                                                    ) ? (
                                                        <>
                                                            <div
                                                                // key={el2}
                                                                onClick={() =>
                                                                    categoryClick(
                                                                        el2
                                                                    )
                                                                }
                                                                className="xl:hover:bg-[#ff0558]/60 bg-[#ff0558] transition-all rounded-lg px-2 cursor-pointer"
                                                            >
                                                                {el2}
                                                            </div>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <div
                                                                // key={el2}
                                                                onClick={() =>
                                                                    categoryClick(
                                                                        el2
                                                                    )
                                                                }
                                                                className="xl:hover:bg-[#ff0558]/80 transition-all rounded-lg px-2 cursor-pointer focus:bg-none"
                                                            >
                                                                {el2}
                                                            </div>
                                                        </>
                                                    )}
                                                </div>
                                            ))}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </Transition>
        </div>
    );
};
export default Category;
