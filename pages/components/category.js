import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

/** axios */
import axios from 'axios';

/** 카테고리 JSON */
import jsonList from "../api/category.json";

import VideoAd from "./videoAd"
import ResultList from "./resultList";

function Category({props}){
    
    if(props != undefined && props != ''){
        const result = props.result[1];
        const mainCategory = props.result[0].mainCategory;

        const [test, setTest] = useState();

        const [filterData, setFilterData] = useState([]);
        // const platformList = [];
        
        const [platformList, setPlatformList] = useState([]);
        const [categoryList, setCategoryList] = useState([]);
        const [tagList, setTagList] = useState([]);
        

        const platformClick = (e) => {

            let selectTag = document.getElementById(e.target.id);

            if(e.target.id != '전체'){
                setTest(e.target.id);
                setFilterData([]);

                document.getElementById('전체').classList.remove('currentStyle');
                document.getElementById('전체').classList.add('prevStyle');
    
                if(selectTag.className != 'currentStyle'){
                    if(jsonList.플랫폼[0].비디오.map((i) => i == e.target.id).includes(true) || jsonList.플랫폼[0].숏.map((i) => i == e.target.id).includes(true) || jsonList.플랫폼[0].스트리밍.map((i) => i == e.target.id).includes(true)){
                        platformList.push(e.target.id);
                    }

                    if(jsonList.대분류[0].게임.map((i) => i == e.target.id).includes(true) || jsonList.대분류[0].스포츠.map((i) => i == e.target.id).includes(true) || jsonList.대분류[0].영화.map((i) => i == e.target.id).includes(true) ||
                        jsonList.대분류[0].음악.map((i) => i == e.target.id).includes(true) || jsonList.대분류[0].일상.map((i) => i == e.target.id).includes(true) || jsonList.대분류[0].크리에이티브.map((i) => i == e.target.id).includes(true) ||
                        jsonList.대분류[0].학습.map((i) => i == e.target.id).includes(true)){
                            categoryList.push(e.target.id);
                    }

                    if(jsonList.태그[0].게임.map((i) => i == e.target.id).includes(true) || jsonList.태그[0].스포츠.map((i) => i == e.target.id).includes(true) || jsonList.태그[0].영화.map((i) => i == e.target.id).includes(true) ||
                        jsonList.태그[0].음악.map((i) => i == e.target.id).includes(true) || jsonList.태그[0].일상.map((i) => i == e.target.id).includes(true) || jsonList.태그[0].크리에이티브.map((i) => i == e.target.id).includes(true) ||
                        jsonList.태그[0].학습.map((i) => i == e.target.id).includes(true)){
                            tagList.push(e.target.id);
                    }

                    // filterData.push(result.filter((item) => item.platform == e.target.id));
                    selectTag.classList.remove('prevStyle');
                    selectTag.classList.add('currentStyle');

                } else {
                    for(let i = 0; i < platformList.length; i++){
                        if(platformList[i] == (e.target.id)){
                            platformList.splice(i, 1);
                            i--;
                        } 
                    }
                    for(let i = 0; i < categoryList.length; i++){
                        if(categoryList[i] == (e.target.id)){
                            categoryList.splice(i, 1);
                            i--;
                        } 
                    }
                    for(let i = 0; i < tagList.length; i++){
                        if(tagList[i] == (e.target.id)){
                            tagList.splice(i, 1);
                            i--;
                        } 
                    }
                    // filterData.pop(filterData.filter((item) => item.platform == e.target.id));
                    selectTag.classList.remove('currentStyle');
                    selectTag.classList.add('prevStyle');

                    if(platformList.length < 1){
                        document.getElementById('전체').classList.remove('prevStyle');
                        document.getElementById('전체').classList.add('currentStyle');
                        setFilterData([]);
                    }
                }
                
                for(let i = 0; i < platformList.length; i++){
                    if(i > 0){
                        setFilterData(...filterData, result.filter((item) => item.platform == platformList[i]));
                    } else {
                        setFilterData(result.filter((item) => item.platform == platformList[i]));
                    }
                }
                console.log('!!!!!!!!!!!!!!!!!!!!!!');
                console.log(filterData);
                console.log(platformList);
                
            } else {
                selectTag.classList.remove('prevStyle');
                selectTag.classList.add('currentStyle');
    
                for(let i = 0; i < platformList.length; i++){
                    let deleteId = platformList[i];
                    document.getElementById(deleteId).classList.remove('currentStyle');
                    document.getElementById(deleteId).classList.add('prevStyle');
                }
                setPlatformList([]);
                setFilterData([]);
            }
        }
    
        return(
            <>
            <div className="flex justify-center">
                <div className="w-full md:w-[59%]">
                    {/* 플랫폼 */}
                    <div className="flex justify-center divide-y divide-slate-200 w-full">
                        <div className="w-[13%] min-h-full bg-blue-600 p-4 border-t border-l border-white font-semibold">플랫폼</div>
                        <div className="w-[85%] border-r">
                            <ul className="flex p-2 pt-4">
                                {jsonList.플랫폼[0].비디오.map((item, index) => 
                                    item == "전체" ? <li key={index} className="currentStyle" value={index+1} id={item} onClick={platformClick}>{item}</li> : <li key={index} className="prevStyle" value={index+1} id={item} onClick={platformClick}>{item}</li>
                                )}
                            </ul>
                            <ul className="flex p-2 pt-4">
                                {jsonList.플랫폼[0].숏.map((item, index) => 
                                    <li key={index} className="prevStyle" value={index+5} id={item} onClick={platformClick}>{item}</li>
                                )}
                                </ul>
                            <ul className="flex p-2 pt-4">
                                {jsonList.플랫폼[0].스트리밍.map((item, index) => 
                                   <li key={index} className="prevStyle" value={index+10} id={item} onClick={platformClick}>{item}</li>
                                )}
                            </ul>
                        </div>
                    </div>

                    {/* 카테고리 */}
                    {
                        mainCategory == '' ? '' : 
                        <div className="flex justify-center divide-y divide-slate-200">
                            <div className="w-[13%] min-h-full bg-blue-600 p-4 border-t border-l border-white font-semibold">{mainCategory}</div>
                            <div className="w-[85%] border-r">
                                <ul className="flex p-2 pt-4">
                                    {mainCategory == "게임" ?
                                        jsonList.대분류[0].게임.map((item, index) => 
                                        <li key={index} className="prevStyle" value={index} id={item} onClick={platformClick}>{item}</li>
                                        ) 
                                        : mainCategory == "스포츠" ?
                                        jsonList.대분류[0].스포츠.map((item, index) => 
                                        <li key={index} className="prevStyle" value={index} id={item} onClick={platformClick}>{item}</li>
                                        ) 
                                        : mainCategory == "영화" ?
                                        jsonList.대분류[0].영화.map((item, index) => 
                                        <li key={index} className="prevStyle" value={index} id={item} onClick={platformClick}>{item}</li>
                                        ) 
                                        : mainCategory == "음악" ?
                                        jsonList.대분류[0].음악.map((item, index) => 
                                        <li key={index} className="prevStyle" value={index} id={item} onClick={platformClick}>{item}</li>
                                        ) 
                                        : mainCategory == "일상" ?
                                        jsonList.대분류[0].일상.map((item, index) => 
                                        <li key={index} className="prevStyle" value={index} id={item} onClick={platformClick}>{item}</li>
                                        ) 
                                        : mainCategory == "크리에이티브" ?
                                        jsonList.대분류[0].크리에이티브.map((item, index) => 
                                        <li key={index} className="prevStyle" value={index} id={item} onClick={platformClick}>{item}</li>
                                        ) 
                                        : mainCategory == "학습" ?
                                        jsonList.대분류[0].학습.map((item, index) => 
                                        <li key={index} className="prevStyle" value={index} id={item} onClick={platformClick}>{item}</li>
                                        ) 
                                        : ""
                                    }
                                </ul>
                            </div>
                        </div>
                    }
                </div>
            </div>
            <div className="relative flex justify-center">
                {
                   filterData.length > 0 ? <ResultList filterData={filterData} /> : <ResultList result={result} />
                }
            </div>
            </>
        )
    } else {
        return('');
    }
}
export default Category;