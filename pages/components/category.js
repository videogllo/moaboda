import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

/** 카테고리 JSON */
import jsonList from "../api/category.json";

function Category({props}){


    if(props != undefined && props != null){

        const mainCategory = props.result[0].mainCategory;
        // const mainCategory = '영화';
    
        const [currentClick, setCurrentClick] = useState();
        const [platformList, setPlatformList] = useState([{id:'전체', var: 0}]);
        const [categoryList, setcategoryList] = useState([]);
        const [tagList, setTagList] = useState([]);
    
        const platformClick = (e) => {
    
            const id = e.target.id;
            setCurrentClick(id);
    
            /* 전체 버튼을 누를 경우 지금까지 눌렀던 모든 버튼의 배경 색이 사라지고 전체 버튼에만 배경색이 생기도록 설정 */
            if(e.target.id == '전체'){
    
                if(platformList.length > 0){
                    for(let i = 0; i < platformList.length; i++){
                        let prev = document.getElementById(platformList[i].id);
                        prev.classList.remove('currentStyle');
                        prev.classList.add('prevStyle');
                    }
                }
                setPlatformList([{id:'전체', var: 0}]);
                let current = document.getElementById('전체');
                current.classList.remove('prevStyle');
                current.classList.add('currentStyle');
    
            } else {
    
                /* 버튼을 클릭 할 경우 전체 버튼의 색이 사라지고 클릭한 버튼에 파란색 배경색이 생기도록 설정 */
                if(platformList[0].id == '전체'){
                    platformList.splice(0, 1);
                    let prev = document.getElementById('전체');
                    prev.classList.remove('currentStyle');
                    prev.classList.add('prevStyle');
                }
    
                if(platformList.findIndex(i => i.id == e.target.id) == -1){
                    platformList.push({id:e.target.id, var: e.target.value});
    
                    platformList.sort(function(a, b){
                        return a.var - b.var;
                    });
    
                    let current = document.getElementById(e.target.id);
                    current.classList.remove('prevStyle');
                    current.classList.add('currentStyle');
                } else {
    
                    /* 이미 클릭 된 버튼을 누를 경우 파란색 배경 사라지도록 설정 */
                    let prev = document.getElementById(e.target.id);
                    prev.classList.remove('currentStyle');
                    prev.classList.add('prevStyle');
        
                    for(let i = 0; i < platformList.length; i++){
                        if(platformList[i].id == (e.target.id)){
                            platformList.splice(i, 1);
                            i--;
                        }
                    }
    
                    if(platformList.length < 1){
                        setPlatformList([{id:'전체', var: 0}]);
                        let current = document.getElementById('전체');
                        current.classList.remove('prevStyle');
                        current.classList.add('currentStyle');
                    }
                }
            }
        }
    
        const CategoryClick = (e) => {
    
            console.log(categoryList);
            const id = e.target.id;
            setCurrentClick(id);
    
            /* 버튼을 클릭 할 경우 전체 버튼의 색이 사라지고 클릭한 버튼에 파란색 배경색이 생기도록 설정 */
    
            if(categoryList.findIndex(i => i.id == e.target.id) == -1){
                categoryList.push({id:e.target.id, var: e.target.value});
    
                categoryList.sort(function(a, b){
                    return a.var - b.var;
                });
    
                let current = document.getElementById(e.target.id);
                current.classList.remove('prevStyle');
                current.classList.add('currentStyle');
    
                let cateLi = document.getElementById('cateLi');
                cateLi.classList.remove('hidden');
            } else {
    
                /* 이미 클릭 된 버튼을 누를 경우 파란색 배경 사라지도록 설정 */
                let prev = document.getElementById(e.target.id);
                prev.classList.remove('currentStyle');
                prev.classList.add('prevStyle');
    
                for(let i = 0; i < categoryList.length; i++){
                    if(categoryList[i].id == (e.target.id)){
                        categoryList.splice(i, 1);
                        i--;
                    }
                }
    
                if(categoryList.length < 1){
                    setTagList([]);
                    let cateLi = document.getElementById('cateLi');
                    cateLi.classList.add('hidden');
                }
            }
        }
    
        const TagClick = (e) => {
            const id = e.target.id;
            setCurrentClick(id);
    
            /* 버튼을 클릭 할 경우 전체 버튼의 색이 사라지고 클릭한 버튼에 파란색 배경색이 생기도록 설정 */
    
            if(tagList.findIndex(i => i.id == e.target.id) == -1){
                tagList.push({id:e.target.id, var: e.target.value});
    
                tagList.sort(function(a, b){
                    return a.var - b.var;
                });
    
                let current = document.getElementById(e.target.id);
                current.classList.remove('prevStyle');
                current.classList.add('currentStyle');
    
                let tagLi = document.getElementById('tagLi');
                tagLi.classList.remove('hidden');
            } else {
    
                /* 이미 클릭 된 버튼을 누를 경우 파란색 배경 사라지도록 설정 */
                let prev = document.getElementById(e.target.id);
                prev.classList.remove('currentStyle');
                prev.classList.add('prevStyle');
    
                for(let i = 0; i < tagList.length; i++){
                    if(tagList[i].id == (e.target.id)){
                        tagList.splice(i, 1);
                        i--;
                    }
                }
    
                if(tagList.length < 1){
                    let tagList = document.getElementById('tagLi');
                    tagList.classList.add('hidden');
                }
            }
        }
        
        const Reset = (e) => {
            if(platformList.length > 0){
                for(let i = 0; i < platformList.length; i++){
                    let prev = document.getElementById(platformList[i].id);
                    prev.classList.remove('currentStyle');
                    prev.classList.add('prevStyle');
                }
    
                setPlatformList([{id:'전체', var: 1}]);
                let current = document.getElementById('전체');
                current.classList.remove('prevStyle');
                current.classList.add('currentStyle');
            }
    
            if(categoryList.length > 0){
                for(let i = 0; i < categoryList.length; i++){
                    let prev = document.getElementById(categoryList[i].id);
                    prev.classList.remove('currentStyle');
                    prev.classList.add('prevStyle');
                }
                setcategoryList([]);
                let cateLi = document.getElementById('cateLi');
                cateLi.classList.add('hidden');
            }
    
            for(let i = 0; i < tagList.length; i++){
                let prev = document.getElementById(tagList[i].id);
                prev.classList.remove('currentStyle');
                prev.classList.add('prevStyle');
            }
            if(tagList.length > 0){
    
                setTagList([]);
                let tagList = document.getElementById('tagLi');
                tagList.classList.add('hidden');
            }
            
        }
    
        const Delete = (e) => {
            if(e.target.innerHTML != '전체'){
                (e.target).classList.add('hidden');
                for(let i = 0; i < platformList.length; i++){
                    if(platformList[i].id == (e.target.innerHTML)){
                        platformList.splice(i, 1);
                        i--;
                    }
                }
    
                for(let i = 0; i < categoryList.length; i++){
                    if(categoryList[i].id == (e.target.innerHTML)){
                        categoryList.splice(i, 1);
                        i--;
                    }
                }
    
                for(let i = 0; i < tagList.length; i++){
                    if(tagList[i].id == (e.target.innerHTML)){
                        tagList.splice(i, 1);
                        i--;
                    }
                }
    
                let prev = document.getElementById(e.target.innerHTML);
                prev.classList.remove('currentStyle');
                prev.classList.add('prevStyle');
            }
    
            if(platformList.length < 1){
                setPlatformList([{id:'전체', var: 0}]);
                let current = document.getElementById('전체');
                current.classList.remove('prevStyle');
                current.classList.add('currentStyle');
            }
    
            if(categoryList.length < 1){
                let cateLi = document.getElementById('cateLi');
                cateLi.classList.add('hidden');
            }
    
            if(tagList.length < 1){
                let tagLi = document.getElementById('tagLi');
                tagLi.classList.add('hidden');
            }
        }
        return (
            <div className="w-[57%]">
                <div className="flex justify-center divide-y divide-slate-200 w-full">
                    <div className="w-[13%] min-h-full bg-blue-600 p-4 border-t border-l border-white font-semibold">플랫폼</div>
                    <div className="w-[85%] border-r">
                        <ul className="flex p-2 pt-4">
                            {jsonList.플랫폼.map((item, index) => 
                                item == "전체" ? <li key={index} className="currentStyle" value={index+1} id={item} onClick={platformClick}>{item}</li> : <li key={index} className="prevStyle" value={index+1} id={item} onClick={platformClick}>{item}</li>
                            )}
                        </ul>
                    </div>
                </div>
                {
                    mainCategory == '' ? '' : 
                    <div className="flex justify-center divide-y divide-slate-200">
                        <div className="w-[13%] min-h-full bg-blue-600 p-4 border-t border-l border-white font-semibold">{mainCategory}</div>
                        <div className="w-[85%] border-r">
                            <ul className="flex p-2 pt-4">
                                {mainCategory == "게임" ?
                                    jsonList.대분류[0].게임.map((item, index) => 
                                    <li key={index} className="prevStyle" value={index} id={item} onClick={CategoryClick}>{item}</li>
                                    ) 
                                    : mainCategory == "스포츠" ?
                                    jsonList.대분류[0].스포츠.map((item, index) => 
                                    <li key={index} className="prevStyle" value={index} id={item} onClick={CategoryClick}>{item}</li>
                                    ) 
                                    : mainCategory == "영화" ?
                                    jsonList.대분류[0].영화.map((item, index) => 
                                    <li key={index} className="prevStyle" value={index} id={item} onClick={CategoryClick}>{item}</li>
                                    ) 
                                    : mainCategory == "음악" ?
                                    jsonList.대분류[0].음악.map((item, index) => 
                                    <li key={index} className="prevStyle" value={index} id={item} onClick={CategoryClick}>{item}</li>
                                    ) 
                                    : mainCategory == "일상" ?
                                    jsonList.대분류[0].일상.map((item, index) => 
                                    <li key={index} className="prevStyle" value={index} id={item} onClick={CategoryClick}>{item}</li>
                                    ) 
                                    : mainCategory == "크리에이티브" ?
                                    jsonList.대분류[0].크리에이티브.map((item, index) => 
                                    <li key={index} className="prevStyle" value={index} id={item} onClick={CategoryClick}>{item}</li>
                                    ) 
                                    : mainCategory == "학습" ?
                                    jsonList.대분류[0].학습.map((item, index) => 
                                    <li key={index} className="prevStyle" value={index} id={item} onClick={CategoryClick}>{item}</li>
                                    ) 
                                    : ""
                                }
                            </ul>
                        </div>
                    </div>
                }
                {
                    mainCategory == '' ? '' : 
                    <div className="flex justify-center divide-y divide-slate-200">
                        <div className="w-[13%] min-h-full bg-blue-600 p-4 border-t border-l border-white font-semibold">추천 키워드</div>
                        <div className="w-[85%] border-r ">
                            <ul className="flex p-2 pt-4">
                                {mainCategory == "게임" ?
                                    jsonList.태그[0].게임.map((item, index) => 
                                    <li key={index} className="prevStyle" value={index} id={item} onClick={TagClick}>{'#' + item}</li>
                                    ) 
                                    : mainCategory == "스포츠" ?
                                    jsonList.태그[0].스포츠.map((item, index) => 
                                    <li key={index} className="prevStyle" value={index} id={item} onClick={TagClick}>{'#' + item}</li>
                                    ) 
                                    : mainCategory == "영화" ?
                                    jsonList.태그[0].영화.map((item, index) => 
                                    <li key={index} className="prevStyle" value={index} id={item} onClick={TagClick}>{'#' + item}</li>
                                    ) 
                                    : mainCategory == "음악" ?
                                    jsonList.태그[0].음악.map((item, index) => 
                                    <li key={index} className="prevStyle" value={index} id={item} onClick={TagClick}>{'#' + item}</li>
                                    ) 
                                    : mainCategory == "일상" ?
                                    jsonList.태그[0].일상.map((item, index) => 
                                    <li key={index} className="prevStyle" value={index} id={item} onClick={TagClick}>{'#' + item}</li>
                                    ) 
                                    : mainCategory == "크리에이티브" ?
                                    jsonList.태그[0].크리에이티브.map((item, index) => 
                                    <li key={index} className="prevStyle" value={index} id={item} onClick={TagClick}>{'#' + item}</li>
                                    ) 
                                    : mainCategory == "학습" ?
                                    jsonList.태그[0].학습.map((item, index) => 
                                    <li key={index} className="prevStyle" value={index} id={item} onClick={TagClick}>{'#' + item}</li>
                                    ) 
                                    : ""
                                }
                            </ul>
                        </div>
                    </div>
                }
                
                <div className="flex justify-center ">
                <div className="flex w-[13%] items-center border-y border-l bg-white text-gray-500 text-center ">
                    <p className="p-2 font-semibold mr-3">선택한 필터</p>
                    <div className="flex items-center" onClick={Reset}>
                        <div className="flex items-center">
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
                <div className="w-[85%] border-y border-r bg-white">
                    <ul className="flex p-2">
                        <li className="mx-2.5 cursor-pointer border border-sky-500 text-gray-500 rounded-full px-1.5 flex"> 플랫폼: {platformList.map((i) => <p key={i.var} className="text-sky-500 ml-2" onClick={Delete}>{i.id}</p>)}</li>
                        <li className="mx-2.5 cursor-pointer border border-sky-500 text-gray-500 rounded-full px-1.5 flex hidden" id="cateLi"> {mainCategory}: {categoryList.map((i) => <p key={i.var} className="text-sky-500 ml-2" onClick={Delete}>{i.id}</p>)}</li>
                        <li className="mx-2.5 cursor-pointer border border-sky-500 text-gray-500 rounded-full px-1.5 flex hidden" id="tagLi"> 키워드: {tagList.map((i) => <p key={i.var} className="text-sky-500 ml-2" onClick={Delete}>{i.id}</p>)}</li>
                    </ul>
                </div>
                </div>
            </div>
        )
    } else {
        return('');
    }
}

export default Category;