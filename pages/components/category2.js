import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

/** axios */
import axios from 'axios';

/** 카테고리 JSON */
import jsonList from "../api/category.json";

import VideoAd from "./videoAd"
import ResultList from "./resultList";

function Category({props}){
    const [searchState, setSearchState] = useState({
        passingTags: {
          "플랫폼": {
            '비디오': {
                "전체": true,
                "Youtube": false,
                "Twitch": false,
                "afreecaTV" : false,
            },
            '숏': {
                "Shorts" : false,
                "TikTok" : false,
                "Instagram" : false,
                "kakaoTV": false,
            },
            '스트리밍': {
                "NETFLIX" : false,
                "Disney+" : false,
                "왓챠" : false,
                "웨이브" : false,
                "티빙" : false,
                "쿠팡플레이" : false,
                "프라임 비디오" : false,
                "애플TV" : false,
                "HBO max" : false,
            }
          },
          대분류: {
            "음악": {
                "K-pop" : false,
                "R&B" : false,
                "HipHop" : false,
                "발라드" : false,
                "ost" : false,
                "인디" : false,
                "팝송" : false,
            },
            "영화": {
                "영화" : false,
                "한국영화" : false,
                "외국영화" : false,
                "영화소개" : false,
                "영화리뷰" : false,
                "영화추천" : false,
                "액션" : false,
                "스릴러" : false,
                "공포" : false,
                "로맨스" : false,
                "로맨틱코미디" : false,
                "판타지" : false,
            },
            "게임": {
                "롤" : false,
                "리그오브레전드" : false,
                "배틀그라운드" : false,
                "오버워치" : false,
                "디아블로" : false,
                "GTA" : false,
                "다크소울" : false,
                "FIFA" : false,
                "피파" : false,
                "메이플" : false,
                "카트라이더" : false,
                "크레이지아케이드" : false,
            },
            "스포츠": {
                "홈트" : false,
                "축구" : false,
                "야구" : false,
                "배구" : false,
                "족구" : false,
                "볼링" : false,
                "탁구" : false,
                "하키" : false,
                "컬링" : false,
                "펜싱" : false,
                "수영" : false,
                "운동" : false,
            },
            "학습" : {
                "개발" : false,
                "코딩" : false,
                "국어" : false,
                "수학" : false,
                "영어" : false,
                "과탐" : false,
                "사탐" : false,
                "고등" : false,
                "중등" : false,
                "초등" : false,
                "직장인학습" : false,
                "알고리즘" : false,
            },
            "일상" : {
                "브이로그" : false,
                "GRWM" : false,
                "겟레디윗미" : false,
            },
            "크리에이티브" : {
                "MBC" : false,
                "SBS" : false,
                "워크맨" : false,
                "숏박스" : false,
                "오킹" : false,
                "릴카" : false,
                "감스트" : false,
                "런닝맨" : false,
                "동네놈들" : false,
                "GCL" : false,
            }
          },
          "태그": {
            1: false,
            2: false,
          },
        },
    });

    const allFilterClickListener = (e, filterProp) => {
        let name = e.target.id;
        console.log(name);

        if(name === "전체"){
            setSearchState(... searchState.passingTags, searchState.passingTags.플랫폼.비디오.전체 = true);
        }
    }

    if(props != undefined && props != null){
        return(
            <>
                <div className="flex justify-center">
                    {/* 플랫폼 */}
                    <div className="w-full md:w-[59%]">
                        <div className="flex justify-center divide-y divide-slate-200 w-full">
                            <div className="w-[13%] min-h-full bg-blue-600 p-4 border-t border-l border-white font-semibold">플랫폼</div>
                            <div className="w-[85%] border-r">
                                <ul className="flex p-2 pt-4">
                                    {jsonList.플랫폼[0].비디오.map((item, index) => 
                                        item == "전체" ? <li key={index} className="currentStyle" value={index+1} id={item} onClick={allFilterClickListener}>{item}</li> : <li key={index} className="prevStyle" value={index+1} id={item} onClick={allFilterClickListener}>{item}</li>
                                    )}
                                </ul>
                                <ul className="flex p-2 pt-4">
                                    {jsonList.플랫폼[0].숏.map((item, index) => 
                                        <li key={index} className="prevStyle" value={index+5} id={item} onClick={allFilterClickListener}>{item}</li>
                                    )}
                                    </ul>
                                <ul className="flex p-2 pt-4">
                                    {jsonList.플랫폼[0].스트리밍.map((item, index) => 
                                        <li key={index} className="prevStyle" value={index+10} id={item} onClick={allFilterClickListener}>{item}</li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* 대분류 */}


                    {/* 태그 */}


                </div>
            </>
        )
    }
      
}

export default Category;