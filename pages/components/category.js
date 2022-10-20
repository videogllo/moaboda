import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

const Category = () => {

    return(
        <>
            <Platform></Platform>
            
        </>
    )

}

export const Platform = () => {
    const [currentClick, setCurrentClick] = useState();
    const [arr, setArr] = useState([{id:'전체', var: 1}]);
    
    const GetClick = (e) => {

        const id = e.target.id;
        
        setCurrentClick(id);

        /* 전체 버튼을 누를 경우 지금까지 눌렀던 모든 버튼의 배경 색이 사라지고 전체 버튼에만 배경색이 생기도록 설정 */

        if(e.target.id == '전체'){

            if(arr.length > 0){
                for(let i = 0; i < arr.length; i++){
                    let prev = document.getElementById(arr[i].id);
                    prev.style.color = "black";
                    prev.style.backgroundColor = "white";
                    prev.style.borderRadius = "0";
                    prev.style.paddingLeft = "0";
                    prev.style.paddingRight = "0";
                }
            }
            setArr([{id:'전체', var: 1}]);
            let current = document.getElementById('전체');
            current.style.color = "white";
            current.style.backgroundColor = "#1c28f4";
            current.style.borderRadius = "30px";
            current.style.paddingLeft = "8px";
            current.style.paddingRight = "8px";

        } else {

            /* 버튼을 클릭 할 경우 전체 버튼의 색이 사라지고 클릭한 버튼에 파란색 배경색이 생기도록 설정 */
            if(arr[0].id == '전체'){
                arr.splice(0, 1);
                let prev = document.getElementById('전체');
                prev.style.color = "black";
                prev.style.backgroundColor = "white";
                prev.style.borderRadius = "0";
                prev.style.paddingLeft = "0";
                prev.style.paddingRight = "0";
            }

            if(arr.findIndex(i => i.id == e.target.id) == -1){
                arr.push({id:e.target.id, var: e.target.value});

                arr.sort(function(a, b){
                    return a.var - b.var;
                });

                let current = document.getElementById(e.target.id);
                current.style.color = "white";
                current.style.backgroundColor = "#1c28f4";
                current.style.borderRadius = "30px";
                current.style.paddingLeft = "8px";
                current.style.paddingRight = "8px";
            } else {

                /* 이미 클릭 된 버튼을 누를 경우 파란색 배경 사라지도록 설정 */
                let prev = document.getElementById(e.target.id);
                prev.style.color = "black";
                prev.style.backgroundColor = "white";
                prev.style.borderRadius = "0";
                prev.style.paddingLeft = "0";
                prev.style.paddingRight = "0";
    
                for(let i = 0; i < arr.length; i++){
                    if(arr[i].id == (e.target.id)){
                        arr.splice(i, 1);
                        i--;
                    }
                }

                if(arr.length < 1){
                    setArr([{id:'전체', var: 1}]);
                    let current = document.getElementById('전체');
                    current.style.color = "white";
                    current.style.backgroundColor = "#1c28f4";
                    current.style.borderRadius = "30px";
                    current.style.paddingLeft = "8px";
                    current.style.paddingRight = "8px";
                }
            }
        }
    }

    const Reset = (e) => {
        setArr([{id:'전체', var: 1}]);

        if(arr.length > 0){
            for(let i = 0; i < arr.length; i++){
                let prev = document.getElementById(arr[i].id);
                prev.style.color = "black";
                prev.style.backgroundColor = "white";
                prev.style.borderRadius = "0";
                prev.style.paddingLeft = "0";
                prev.style.paddingRight = "0";
            }
        }
        setArr([{id:'전체', var: 1}]);
        let current = document.getElementById('전체');
        current.style.color = "white";
        current.style.backgroundColor = "#1c28f4";
        current.style.borderRadius = "30px";
        current.style.paddingLeft = "8px";
        current.style.paddingRight = "8px";
    }

    const Delete = (e) => {
        if(e.target.innerHTML != '전체'){
            (e.target).classList.add('hidden');
            for(let i = 0; i < arr.length; i++){
                if(arr[i] == (e.target.innerHTML)){
                    arr.splice(i, 1);
                    i--;
                }
            }
            let prev = document.getElementById(e.target.innerHTML);
            prev.style.color = "black";
            prev.style.backgroundColor = "white";
            prev.style.borderRadius = "0";
            prev.style.paddingLeft = "0";
            prev.style.paddingRight = "0";
        }
    }

    return (
        <>
            <div className="flex justify-center divide-y divide-slate-200">
                <div className="w-1/6 min-h-full bg-blue-100 p-4 border-b border-white font-semibold">플랫폼</div>
                <div className="w-4/5 border-r bg-white">
                    <ul className="flex p-2 pt-4">
                        <li className="mx-2.5 cursor-pointer bg-[#1c28f4] text-white rounded-full px-1.5" id="전체" onClick={GetClick}>전체</li>
                        <li className="mx-2.5 cursor-pointer" id="Youtube" value="1" onClick={GetClick}>Youtube</li>
                        <li className="mx-2.5 cursor-pointer" id="Instagram" value="2" onClick={GetClick}>Instagram</li>
                        <li className="mx-2.5 cursor-pointer" id="TikTok" value="3" onClick={GetClick}>TikTok</li>
                        <li className="mx-2.5 cursor-pointer" id="twitch" value="4" onClick={GetClick}>twitch</li>
                        <li className="mx-2.5 cursor-pointer" id="africaTV" value="5" onClick={GetClick}>africaTV</li>
                    </ul>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="flex w-1/6 items-center border-y border-l bg-white text-center ">
                    <p className="p-2 font-semibold mr-3">선택한 필터</p>
                    <div className="flex" onClick={Reset}>
                        <div>
                            <Image 
                            src="/image/etc/reset.png"
                            alt="logo"
                            width={15}
                            height={15}
                            ></Image>
                        </div>
                        <p className="flex cursor-pointer text-sm">초기화</p>
                    </div>
                </div>
                <div className="w-4/5 border-y border-r bg-white">
                    <ul className="flex p-2">
                        <li className="mx-2.5 cursor-pointer border border-sky-500 rounded-full px-1.5 flex"> 플랫폼: {arr.map((i) => <p key={i.var} className="text-sky-500 ml-2" onClick={Delete}>{i.id}</p>)}</li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Category;