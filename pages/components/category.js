import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

const Category = () => {
    const [currentClick, setCurrentClick] = useState();
    const [arr, setArr] = useState([{id:'전체', var: 0}]);
    const [cateArr, setCateArr] = useState([{id:'스포츠전체', var: 0}]);
    const [tagArr, setTagArr] = useState([]);
    
    const platformClick = (e) => {
        const id = e.target.id;
        setCurrentClick(id);

        /* 전체 버튼을 누를 경우 지금까지 눌렀던 모든 버튼의 배경 색이 사라지고 전체 버튼에만 배경색이 생기도록 설정 */
        if(e.target.id == '전체'){

            if(arr.length > 0){
                for(let i = 0; i < arr.length; i++){
                    let prev = document.getElementById(arr[i].id);
                    prev.style.color = "black";
                    prev.style.backgroundColor = "rgb(241 245 249)";
                    prev.style.borderRadius = "0";
                    prev.style.paddingLeft = "0";
                    prev.style.paddingRight = "0";
                }
            }
            setArr([{id:'전체', var: 0}]);
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
                prev.style.backgroundColor = "rgb(241 245 249)";
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
                prev.style.backgroundColor = "rgb(241 245 249)";
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
                    setArr([{id:'전체', var: 0}]);
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

    const CategoryClick = (e) => {
        console.log(cateArr);
        const id = e.target.id;
        setCurrentClick(id);

        /* 전체 버튼을 누를 경우 지금까지 눌렀던 모든 버튼의 배경 색이 사라지고 전체 버튼에만 배경색이 생기도록 설정 */
        if(e.target.id == '스포츠전체'){

            if(cateArr.length > 0){
                for(let i = 0; i < cateArr.length; i++){
                    let prev = document.getElementById(cateArr[i].id);
                    prev.style.color = "black";
                    prev.style.backgroundColor = "rgb(241 245 249)";
                    prev.style.borderRadius = "0";
                    prev.style.paddingLeft = "0";
                    prev.style.paddingRight = "0";
                }
            }
            setCateArr([{id:'스포츠전체', var: 0}]);
            let current = document.getElementById('스포츠전체');
            current.style.color = "white";
            current.style.backgroundColor = "#1c28f4";
            current.style.borderRadius = "30px";
            current.style.paddingLeft = "8px";
            current.style.paddingRight = "8px";

        } else {

            /* 버튼을 클릭 할 경우 전체 버튼의 색이 사라지고 클릭한 버튼에 파란색 배경색이 생기도록 설정 */
            if(cateArr[0].id == '스포츠전체'){
                cateArr.splice(0, 1);
                let prev = document.getElementById('스포츠전체');
                prev.style.color = "black";
                prev.style.backgroundColor = "rgb(241 245 249)";
                prev.style.borderRadius = "0";
                prev.style.paddingLeft = "0";
                prev.style.paddingRight = "0";
            }

            if(cateArr.findIndex(i => i.id == e.target.id) == -1){
                cateArr.push({id:e.target.id, var: e.target.value});

                cateArr.sort(function(a, b){
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
                prev.style.backgroundColor = "rgb(241 245 249)";
                prev.style.borderRadius = "0";
                prev.style.paddingLeft = "0";
                prev.style.paddingRight = "0";
    
                for(let i = 0; i < cateArr.length; i++){
                    if(cateArr[i].id == (e.target.id)){
                        cateArr.splice(i, 1);
                        i--;
                    }
                }

                if(cateArr.length < 1){
                    setCateArr([{id:'스포츠전체', var: 0}]);
                    let current = document.getElementById('스포츠전체');
                    current.style.color = "white";
                    current.style.backgroundColor = "#1c28f4";
                    current.style.borderRadius = "30px";
                    current.style.paddingLeft = "8px";
                    current.style.paddingRight = "8px";
                }
            }
        }
    }

    const TagClick = (e) => {
        const id = e.target.id;
        setCurrentClick(id);

        /* 버튼을 클릭 할 경우 전체 버튼의 색이 사라지고 클릭한 버튼에 파란색 배경색이 생기도록 설정 */

        if(tagArr.findIndex(i => i.id == e.target.id) == -1){
            tagArr.push({id:e.target.id, var: e.target.value});

            tagArr.sort(function(a, b){
                return a.var - b.var;
            });

            let current = document.getElementById(e.target.id);
            current.style.color = "white";
            current.style.backgroundColor = "#1c28f4";
            current.style.borderRadius = "30px";
            current.style.paddingLeft = "8px";
            current.style.paddingRight = "8px";

            let tagLi = document.getElementById('tagLi');
            tagLi.classList.remove('hidden');
        } else {

            /* 이미 클릭 된 버튼을 누를 경우 파란색 배경 사라지도록 설정 */
            let prev = document.getElementById(e.target.id);
            prev.style.color = "black";
            prev.style.backgroundColor = "rgb(241 245 249)";
            prev.style.borderRadius = "0";
            prev.style.paddingLeft = "0";
            prev.style.paddingRight = "0";

            for(let i = 0; i < tagArr.length; i++){
                if(tagArr[i].id == (e.target.id)){
                    tagArr.splice(i, 1);
                    i--;
                }
            }

            if(tagArr.length < 1){
                let tagLi = document.getElementById('tagLi');
                tagLi.classList.add('hidden');
            }
        }
    }


    const Reset = (e) => {
        setArr([{id:'전체', var: 0}]);
        setCateArr([{id:'스포츠전체', var: 0}]);

        if(arr.length > 0){
            for(let i = 0; i < arr.length; i++){
                let prev = document.getElementById(arr[i].id);
                prev.style.color = "black";
                prev.style.backgroundColor = "rgb(241 245 249)";
                prev.style.borderRadius = "0";
                prev.style.paddingLeft = "0";
                prev.style.paddingRight = "0";
            }

            setArr([{id:'전체', var: 1}]);
            let current = document.getElementById('전체');
            current.style.color = "white";
            current.style.backgroundColor = "#1c28f4";
            current.style.borderRadius = "30px";
            current.style.paddingLeft = "8px";
            current.style.paddingRight = "8px";
        }

        if(cateArr.length > 0){
            for(let i = 0; i < cateArr.length; i++){
                let prev = document.getElementById(cateArr[i].id);
                prev.style.color = "black";
                prev.style.backgroundColor = "rgb(241 245 249)";
                prev.style.borderRadius = "0";
                prev.style.paddingLeft = "0";
                prev.style.paddingRight = "0";
            }
            setCateArr([{id:'스포츠전체', var: 0}]);
            let current = document.getElementById('스포츠전체');
            current.style.color = "white";
            current.style.backgroundColor = "#1c28f4";
            current.style.borderRadius = "30px";
            current.style.paddingLeft = "8px";
            current.style.paddingRight = "8px";
        }

        if(tagArr.length > 0){
            for(let i = 0; i < tagArr.length; i++){
                let prev = document.getElementById(tagArr[i].id);
                prev.style.color = "black";
                prev.style.backgroundColor = "rgb(241 245 249)";
                prev.style.borderRadius = "0";
                prev.style.paddingLeft = "0";
                prev.style.paddingRight = "0";
            }
            setTagArr([]);
            let tagLi = document.getElementById('tagLi');
            tagLi.classList.add('hidden');
        }
        
    }

    const Delete = (e) => {
        if(e.target.innerHTML != '전체' && e.target.innerHTML != '스포츠전체'){
            (e.target).classList.add('hidden');
            for(let i = 0; i < arr.length; i++){
                if(arr[i].id == (e.target.innerHTML)){
                    arr.splice(i, 1);
                    i--;
                }
            }

            for(let i = 0; i < cateArr.length; i++){
                if(cateArr[i].id == (e.target.innerHTML)){
                    cateArr.splice(i, 1);
                    i--;
                }
            }

            for(let i = 0; i < tagArr.length; i++){
                if(tagArr[i].id == (e.target.innerHTML)){
                    tagArr.splice(i, 1);
                    i--;
                }
            }

            let prev = document.getElementById(e.target.innerHTML);
            prev.style.color = "black";
            prev.style.backgroundColor = "rgb(241 245 249)";
            prev.style.borderRadius = "0";
            prev.style.paddingLeft = "0";
            prev.style.paddingRight = "0";
        }

        if(arr.length < 1){
            setArr([{id:'전체', var: 0}]);
            let current = document.getElementById('전체');
            current.style.color = "white";
            current.style.backgroundColor = "#1c28f4";
            current.style.borderRadius = "30px";
            current.style.paddingLeft = "8px";
            current.style.paddingRight = "8px";
        }

        if(cateArr.length < 1){
            setCateArr([{id:'스포츠전체', var: 0}]);
            let current = document.getElementById('스포츠전체');
            current.style.color = "white";
            current.style.backgroundColor = "#1c28f4";
            current.style.borderRadius = "30px";
            current.style.paddingLeft = "8px";
            current.style.paddingRight = "8px";
        }

        if(tagArr.length < 1){
            let tagLi = document.getElementById('tagLi');
            tagLi.classList.add('hidden');
        }

    }

    return (
        <div className="max-w-screen-2xl w-4/5">
            {/* 플랫폼 카테고리 */}
            <div className="flex justify-center divide-y divide-slate-200">
                <div className="w-1/6 min-h-full bg-blue-100 p-4 border-b border-white font-semibold">플랫폼</div>
                <div className="w-4/5 border-r">
                    <ul className="flex p-2 pt-4">
                        <li className="mx-2.5 cursor-pointer bg-[#1c28f4] text-white rounded-full px-1.5" id="전체" onClick={platformClick}>전체</li>
                        <li className="mx-2.5 cursor-pointer" id="Youtube" value="1" onClick={platformClick}>Youtube</li>
                        <li className="mx-2.5 cursor-pointer" id="Instagram" value="2" onClick={platformClick}>Instagram</li>
                        <li className="mx-2.5 cursor-pointer" id="TikTok" value="3" onClick={platformClick}>TikTok</li>
                        <li className="mx-2.5 cursor-pointer" id="twitch" value="4" onClick={platformClick}>twitch</li>
                        <li className="mx-2.5 cursor-pointer" id="afreecaTV" value="5" onClick={platformClick}>afreecaTV</li>
                    </ul>
                </div>
            </div>

            {/* 검색어 카테고리 */}
            <div className="flex justify-center divide-y divide-slate-200">
                <div className="w-1/6 min-h-full bg-blue-100 p-4 border-b border-white font-semibold">스포츠</div>
                <div className="w-4/5 border-r">
                    <ul className="flex p-2 pt-4">
                        <li className="mx-2.5 cursor-pointer bg-[#1c28f4] text-white rounded-full px-1.5"  id="스포츠전체" onClick={CategoryClick}>스포츠 전체</li>
                        <li className="mx-2.5 cursor-pointer" id="야구" value="1" onClick={CategoryClick}>야구</li>
                        <li className="mx-2.5 cursor-pointer" id="축구" value="2" onClick={CategoryClick}>축구</li>
                        <li className="mx-2.5 cursor-pointer" id="배구" value="3" onClick={CategoryClick}>배구</li>
                        <li className="mx-2.5 cursor-pointer" id="농구" value="4" onClick={CategoryClick}>농구</li>
                        <li className="mx-2.5 cursor-pointer" id="미식축구" value="5" onClick={CategoryClick}>미식축구</li>
                        <li className="mx-2.5 cursor-pointer" id="하키" value="6" onClick={CategoryClick}>하키</li>
                        <li className="mx-2.5 cursor-pointer" id="스키점프" value="7" onClick={CategoryClick}>스키점프</li>
                        <li className="mx-2.5 cursor-pointer" id="골프" value="8" onClick={CategoryClick}>골프</li>
                        <li className="mx-2.5 cursor-pointer" id="볼링" value="9" onClick={CategoryClick}>볼링</li>
                        <li className="mx-2.5 cursor-pointer" id="당구" value="10" onClick={CategoryClick}>당구</li>
                    </ul>
                </div>
            </div>

            {/* 태그 카테고리 */}
            <div className="flex justify-center divide-y divide-slate-200">
                <div className="w-1/6 min-h-full bg-blue-100 p-4 border-b border-white font-semibold">추천 키워드</div>
                <div className="w-4/5 border-r ">
                    <ul className="flex p-2 pt-4">
                        <li className="mx-2.5 cursor-pointer" id="손흥민" value="1" onClick={TagClick}>#손흥민</li>
                        <li className="mx-2.5 cursor-pointer" id="맨시티" value="2" onClick={TagClick}>#맨시티</li>
                        <li className="mx-2.5 cursor-pointer" id="맨유" value="3" onClick={TagClick}>#맨유</li>
                        <li className="mx-2.5 cursor-pointer" id="축구중계" value="4" onClick={TagClick}>#축구중계</li>
                        <li className="mx-2.5 cursor-pointer" id="K리그" value="5" onClick={TagClick}>#K리그</li>
                        <li className="mx-2.5 cursor-pointer" id="FIFA" value="6" onClick={TagClick}>#FIFA</li>
                        <li className="mx-2.5 cursor-pointer" id="스포츠" value="7" onClick={TagClick}>#스포츠</li>
                        <li className="mx-2.5 cursor-pointer" id="풋살" value="8" onClick={TagClick}>#풋살</li>
                        <li className="mx-2.5 cursor-pointer" id="유니폼리뷰" value="9" onClick={TagClick}>#유니폼리뷰</li>
                        <li className="mx-2.5 cursor-pointer" id="축구분석" value="10" onClick={TagClick}>#축구분석</li>
                    </ul>
                </div>
            </div>

            {/* 선택한 필터 목록 */}
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
                        <li className="mx-2.5 cursor-pointer border border-sky-500 rounded-full px-1.5 flex"> 스포츠: {cateArr.map((i) => <p key={i.var} className="text-sky-500 ml-2" onClick={Delete}>{i.id}</p>)}</li>
                        <li className="mx-2.5 cursor-pointer border border-sky-500 rounded-full px-1.5 flex hidden" id="tagLi"> 키워드: {tagArr.map((i) => <p key={i.var} className="text-sky-500 ml-2" onClick={Delete}>{i.id}</p>)}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Category;