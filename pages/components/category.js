//functional
import { useEffect } from "react";

//statement
import { useRecoilState } from "recoil";
import { SELECT_FILTER } from "../../store/atom";

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
    const [SELECTFILTER, setSELECTFILTER] = useRecoilState(SELECT_FILTER);

    /**
     * 카테고리 에서 중분류를 선택 시, 발생 이벤트
     * atom의 SELECT_FILTER에 데이터를 저장한다.
     * @param {*} val
     */
    const categoryClick = (val) => {
        // if (SELECTFILTER.find((e) => e.main === mainValue)) {
        //     //main이 이미 존재한다면
        //     if (SELECTFILTER.find((e) => e.sub.includes(subValue))) {
        //         //main은 존재하면서, sub도 존재할 경우 목록에서 제거
        //         categoryDelete(subValue);
        //     } else {
        //         //main은 존재하지만, sub는 존재하지 않을 경우
        //         setSELECTFILTER((prev) => [
        //             ...prev,
        //             { main: mainValue, sub: subValue, key: Math.random(1) },
        //         ]);
        //     }
        // } else {
        //     //main이 없다면
        //     setSELECTFILTER((prev) => [
        //         ...prev,
        //         { main: mainValue, sub: subValue, key: Math.random(1) },
        //     ]);
        // }

        //new
        if (SELECTFILTER.find((el) => el === val)) {
            //이미 선택된 카테고리라면
            setSELECTFILTER(SELECTFILTER.filter((el) => el !== val));
        } else {
            //배열에 선택된 카테고리 추가
            setSELECTFILTER((prev) => [...prev, val]);
        }
    };

    /**
     * 이미 목록에 있는 카테고리 선택 시, 혹은 지우고 싶은 카테고리의 'X' 버튼을 클릭하였을 때, 실행
     * atom의 SELECT_FILTER에서 데이터를 지운다.
     * subValue: 중분류
     * @param {*} subValue
     */
    // const categoryDelete = (val) => {
    //     //인자로 받은 subValue가 동일 하게 매칭 된다면 제거 => mainValue는 중복안될거라 판단하고 subValue만 검사
    //     setSELECTFILTER(SELECTFILTER.filter(el => el !== val));
    // };

    useEffect(() => {
        // setSELECTFILTER([]);
    }, [SELECTFILTER]);

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
                                            <>
                                                {SELECTFILTER.includes(el2) ? (
                                                    <>
                                                        <div
                                                            key={el2}
                                                            onClick={() =>
                                                                categoryClick(
                                                                    el2
                                                                )
                                                            }
                                                            className="hover:bg-cyan-800 bg-cyan-600 transition-all rounded-lg px-2 cursor-pointer"
                                                        >
                                                            {el2}
                                                        </div>
                                                    </>
                                                ) : (
                                                    <>
                                                        <div
                                                            key={el2}
                                                            onClick={() =>
                                                                categoryClick(
                                                                    el2
                                                                )
                                                            }
                                                            className="hover:bg-cyan-500 transition-all rounded-lg px-2 cursor-pointer"
                                                        >
                                                            {el2}
                                                        </div>
                                                    </>
                                                )}
                                            </>
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
