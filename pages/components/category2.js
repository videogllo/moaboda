import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

// const Category = () => {

//     return (
//         <>
//             <div className="flex justify-center divide-y divide-slate-200">
//                 <div className="w-1/6 min-h-full bg-blue-100 p-4 border-b border-white font-semibold">플랫폼</div>
//                 <div className="w-4/5 border-r bg-white">
//                     <ul className="flex p-2">
//                         <li className={isActive ? 'mx-2.5 cursor-pointer bg-blue-500 text-white rounded-full px-1.5' : 'mx-2.5 cursor-pointer'} onClick={handleClick}>전체</li>
//                         <li className="mx-2.5 cursor-pointer">Youtube</li>
//                         <li className="mx-2.5 cursor-pointer">Instagram</li>
//                         <li className="mx-2.5 cursor-pointer">TikTok</li>
//                         <li className="mx-2.5 cursor-pointer">twitch</li>
//                         <li className="mx-2.5 cursor-pointer">africaTV</li>
//                     </ul>
//                 </div>
//             </div>
//             <div className="flex justify-center divide-y divide-slate-200">
//                 <div className="w-1/6 min-h-full bg-blue-100 p-4 border-b border-white font-semibold">스포츠</div>
//                 <div className="w-4/5 border-r bg-white">
//                     <ul className="flex p-2">
//                         <li className="mx-2.5 cursor-pointer">스포츠 전체</li>
//                         <li className="mx-2.5 cursor-pointer">야구</li>
//                         <li className="mx-2.5 cursor-pointer bg-blue-500 text-white rounded-full px-1.5">축구</li>
//                         <li className="mx-2.5 cursor-pointer">배구</li>
//                         <li className="mx-2.5 cursor-pointer">농구</li>
//                         <li className="mx-2.5 cursor-pointer">미식축구</li>
//                         <li className="mx-2.5 cursor-pointer">하키</li>
//                         <li className="mx-2.5 cursor-pointer">스키점프</li>
//                         <li className="mx-2.5 cursor-pointer">골프</li>
//                         <li className="mx-2.5 cursor-pointer">볼링</li>
//                         <li className="mx-2.5 cursor-pointer">당구</li>
//                     </ul>
//                 </div>
//             </div>
//             <div className="flex justify-center divide-y divide-slate-200">
//                 <div className="w-1/6 min-h-full bg-blue-100 p-4 border-b border-white font-semibold">추천 키워드</div>
//                 <div className="w-4/5 border-r bg-white">
//                     <ul className="flex p-2">
//                         <li className="mx-2.5 cursor-pointer">#손흥민</li>
//                         <li className="mx-2.5 cursor-pointer">#맨시티</li>
//                         <li className="mx-2.5 cursor-pointer">#맨유</li>
//                         <li className="mx-2.5 cursor-pointer">#축구중계</li>
//                         <li className="mx-2.5 cursor-pointer">#K리그</li>
//                         <li className="mx-2.5 cursor-pointer">#FIFA</li>
//                         <li className="mx-2.5 cursor-pointer">#스포츠</li>
//                         <li className="mx-2.5 cursor-pointer">#풋살</li>
//                         <li className="mx-2.5 cursor-pointer">#유니폼리뷰</li>
//                         <li className="mx-2.5 cursor-pointer">#축구분석</li>
//                     </ul>
//                 </div>
//             </div>
//             <div className="flex justify-center divide-y divide-slate-200">
//                 <div className="w-1/6 min-h-full bg-blue-100 p-4 font-semibold">구독자 연령</div>
//                 <div className="w-4/5 bg-white">
//                     <ul className="flex p-2 border-r">
//                         <li className="mx-2.5 cursor-pointer bg-blue-500 text-white rounded-full px-1.5">전체</li>
//                         <li className="mx-2.5 cursor-pointer">~17</li>
//                         <li className="mx-2.5 cursor-pointer">18~24</li>
//                         <li className="mx-2.5 cursor-pointer">25~34</li>
//                         <li className="mx-2.5 cursor-pointer">35~44</li>
//                         <li className="mx-2.5 cursor-pointer">45~54</li>
//                         <li className="mx-2.5 cursor-pointer">55~64</li>
//                         <li className="mx-2.5 cursor-pointer">65~</li>
//                     </ul>
//                 </div>
//             </div>
//             <div className="flex justify-center">
//                 <div className="flex w-1/6 items-center border-y border-l bg-white text-center ">
//                     <p className="p-2 font-semibold mr-3">선택한 필터</p>
//                     <div>
//                         <Image 
//                         src="/image/etc/reset.png"
//                         alt="logo"
//                         width={15}
//                         height={15}
//                         ></Image>
//                     </div>
//                     <p className="flex cursor-pointer text-sm">
//                         초기화
//                     </p>
//                 </div>
//                 <div className="w-4/5 border-y border-r bg-white">
//                     <ul className="flex p-2">
//                         <li className="mx-2.5 cursor-pointer border border-sky-500 rounded-full px-1.5">스포츠 : 축구</li>
//                     </ul>
//                 </div>
//             </div>
//         </>
//     );
// };

const Category = () => {

    const [currentClick, setCurrentClick] = React.useState(null);
    const [prevClick, setPrevClick] = React.useState('case1');

    const [selectArr, setSelectArr] = useState([]);

    const GetClick = (e) => {
        setPrevClick(e.target.id);
        setCurrentClick(e.target.id);

        console.log(e.target)

        setSelectArr(selectArr => [
            ...selectArr,
            e.target.id
        ])
        

        // if(prevClick === currentClick){
        //     setCurrentClick(null);
        // } else{
        //     setCurrentClick(e.target.id);
        // }

        // (e) => {
        //     if (currentClick !== null) {
        //         let current = document.getElementById(prevClick);
        //         current.style.color = "white";
        //         current.style.backgroundColor = "#1c28f4";
        //         current.style.borderRadius = "30px";
        //         current.style.paddingLeft = "8px";
        //         current.style.paddingRight = "8px";
        //         let prev = document.getElementById(prevClick);
        //         prev.style.color = "black";
        //         prev.style.backgroundColor = "white";
        //         prev.style.borderRadius = "0";
        //         prev.style.paddingLeft = "0";
        //         prev.style.paddingRight = "0";
        //     }
        // }

    };
    
    useEffect(() => {
        console.log('curr ' + currentClick);
        console.log('arr ' , selectArr);
    },[selectArr])

    // React.useEffect(
    //     (e) => {
    //         if (currentClick !== null) {
    //             let current = document.getElementById(prevClick);
    //             current.style.color = "white";
    //             current.style.backgroundColor = "#1c28f4";
    //             current.style.borderRadius = "30px";
    //             current.style.paddingLeft = "8px";
    //             current.style.paddingRight = "8px";
    //             // let prev = document.getElementById(prevClick);
                // prev.style.color = "black";
                // prev.style.backgroundColor = "white";
                // prev.style.borderRadius = "0";
                // prev.style.paddingLeft = "0";
                // prev.style.paddingRight = "0";
    //         }
    //     }
    //     ,
    //     [currentClick]
    //   );
    
      return (
        <>
        <div className="flex justify-center divide-y divide-slate-200">
            <div className="w-1/6 min-h-full bg-blue-100 p-4 border-b border-white font-semibold">플랫폼</div>
            <div className="w-4/5 border-r bg-white">
                <ul className="flex p-2 pt-4">
                    <li className="mx-2.5 cursor-pointer" id="전체" onClick={GetClick}>전체</li>
                    <li className="mx-2.5 cursor-pointer" id="Youtube" onClick={GetClick}>Youtube</li>
                    <li className="mx-2.5 cursor-pointer" id="Instagram" onClick={GetClick}>Instagram</li>
                    <li className="mx-2.5 cursor-pointer" id="TikTok" onClick={GetClick}>TikTok</li>
                    <li className="mx-2.5 cursor-pointer" id="twitch" onClick={GetClick}>twitch</li>
                    <li className="mx-2.5 cursor-pointer" id="africaTV" onClick={GetClick}>africaTV</li>
                </ul>
            </div>
        </div>

        <div className="flex justify-center">
                <div className="flex w-1/6 items-center border-y border-l bg-white text-center ">
                    <p className="p-2 font-semibold mr-3">선택한 필터</p>
                    <div>
                        <Image 
                        src="/image/etc/reset.png"
                        alt="logo"
                        width={15}
                        height={15}
                        ></Image>
                    </div>
                    <p className="flex cursor-pointer text-sm">
                        초기화
                    </p>
                </div>
                <div className="w-4/5 border-y border-r bg-white">
                    <ul className="flex p-2">
                        {/* {<li className="mx-2.5 cursor-pointer border border-sky-500 rounded-full px-1.5">{currentClick}</li>} */}

                        {/* {selectArr.map(item, index => {
                            <li key={index} className="mx-2.5 cursor-pointer border border-sky-500 rounded-full px-1.5">{item}</li>
                        })} */}
                    </ul>
                </div>
            </div>
        </>
      );
    };
     

export default Category;