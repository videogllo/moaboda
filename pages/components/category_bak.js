import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

import VideoAd from "./videoAd";
import ResultList from "./resultList";
import Research from "./research";

import * as filter from "../api/filter";

const people = [
    {
        name: "Lindsay Walton",
        title: "Front-end Developer",
        email: "lindsay.walton@example.com",
        role: "Member",
    },
    // More people...
];

function Category_bak({props, queryValue}){
    // let URLSearch = new URLSearchParams(location.search);

    if(props != undefined && props != ''){
        const resultData = props.result[0];

        const [test, setTest] = useState();
        const [filterData, setFilterData] = useState([]);

        const [platformList, setPlatformList] = useState([]);
        const [categoryList, setCategoryList] = useState([]);

        const platformClick = (e) => {
            setTest(e.target.id);
            const selectTag = document.getElementById(e.target.id);

            if(e.target.id == '전체'){
                document.getElementById('전체').classList.remove('prevStyle');
                document.getElementById('전체').classList.add('currentStyle');

                for(let i = 0; i < platformList.length; i++){
                    document.getElementById(platformList[i]).classList.remove('currentStyle');
                    document.getElementById(platformList[i]).classList.add('prevStyle');
                }

                setPlatformList([]);
                filterData.length = 0;

                if(categoryList.length > 0){
                    const filterData = filter.addSearchFilter({platformList, categoryList});
                    filterData.then(data => {
                        const items = data.results[0];
                        if(items.length > 0){
                            setFilterData([items]);
                        } else {
                            setFilterData([]);
                        }
                    });
                }

            } else {
                filterData.length = 0;
                document.getElementById('전체').classList.remove('currentStyle');
                document.getElementById('전체').classList.add('prevStyle');

                if(selectTag.className === 'prevStyle'){
                    selectTag.classList.remove('prevStyle');
                    selectTag.classList.add('currentStyle');
                    platformList.push(e.target.id);

                    for(let i = 0; i < platformList.length; i++){
                        console.log(platformList[i]);
                        if(resultData.filter((item) => item.platform === platformList[i]).length > 0){
                            // setFilterData(...filterData, [result.filter((item) => item.platform === platformList[i])]);
                            filterData.push(resultData.filter((item) => item.platform === platformList[i]));
                        }
                    }

                } else if(selectTag.className === 'currentStyle') {
                    setTest(e.target.id);
                    selectTag.classList.remove('currentStyle');
                    selectTag.classList.add('prevStyle');

                    for(let i = 0; i < platformList.length; i++){
                        if(platformList[i] === e.target.id){
                            platformList.splice(i, 1);
                            i--;
                        }
                    }

                    for(let i = 0; i < platformList.length; i++){
                        console.log(platformList[i]);
                        if(resultData.filter((item) => item.platform === platformList[i]).length > 0){
                            // setFilterData(...filterData, [result.filter((item) => item.platform === platformList[i])]);
                            
                            if(filterData.length > 0){
                                setFilterData([resultData.filter((item) => item.platform === platformList[i])]);
                            } else {
                                filterData.push(resultData.filter((item) => item.platform === platformList[i]));
                            }
                        }
                    }

                    if(platformList.length === 0){
                        setPlatformList([]);
                        filterData.length = 0;
                        document.getElementById('전체').classList.remove('prevStyle');
                        document.getElementById('전체').classList.add('currentStyle');
                    }

                }

                if(categoryList.length > 0){
                    const filterData = filter.addSearchFilter({platformList, categoryList});
                    filterData.then(data => {
                        const items = data.results[0];
                        if(items.length > 0){
                            setFilterData([items]);
                        } else {
                            setFilterData([]);
                        }
                    });
                }
                
            }
            const ott = ['NETFLIX', 'Disney+', '왓챠', '웨이브', '티빙', '쿠팡플레이', '프라임 비디오', '애플TV'];
            if(platformList.map((item) => ott.includes(item)).includes(true)){
                document.getElementById('genderDiv').classList.remove('flex')
                document.getElementById('genderDiv').classList.add('hidden')
            } else {
                document.getElementById('genderDiv').classList.remove('hidden')
                document.getElementById('genderDiv').classList.add('flex')
            }
           
        }

        const categoryClick = (e) => {
            setTest(e.target.id);
            const selectTag = document.getElementById(e.target.id);
            if(e.target.id == '여자' || e.target.id == '남자'){
                alert('준비중입니다!');
            } else {
                if(selectTag.className === 'prevStyle'){
                    selectTag.classList.remove('prevStyle');
                    selectTag.classList.add('currentStyle');
                    categoryList.push(e.target.id);
    
                    document.getElementById('cateLi').classList.remove('hidden');
                    document.getElementById('cateLi').classList.add('flex');
    
                } else if(selectTag.className === 'currentStyle') {
                    selectTag.classList.remove('currentStyle');
                    selectTag.classList.add('prevStyle');
    
                    document.getElementById('cateLi').classList.remove('hidden');
                    document.getElementById('cateLi').classList.add('flex');
    
                    for(let i = 0; i < categoryList.length; i++){
                        if(categoryList[i] === e.target.id){
                            categoryList.splice(i, 1);
                            i--;
                        }
                    }
    
                    if(categoryList.length === 0){
                        setCategoryList([]);
    
                        document.getElementById('cateLi').classList.remove('flex');
                        document.getElementById('cateLi').classList.add('hidden');
                    }
                }
    
                const filterData = filter.addSearchFilter({platformList, categoryList});
                filterData.then(data => {
                    const items = data.results[0];
                    if(items.length > 0){
                        setFilterData([items]);
                    } else {
                        setFilterData([]);
                    }
                });
            }
        }

        const reset = (e) => {
            /* platform 선택 버튼 모두 원 상태로 복귀 */
            for(let i = 0; i < platformList.length; i++){
                document.getElementById(platformList[i]).classList.remove('currentStyle');
                document.getElementById(platformList[i]).classList.add('prevStyle');
            }

            document.getElementById('전체').classList.remove('prevStyle');
            document.getElementById('전체').classList.add('currentStyle');

            /* category 선택 버튼 모두 원 상태로 복귀 */
            for(let i = 0; i < categoryList.length; i++){
                document.getElementById(categoryList[i]).classList.remove('currentStyle');
                document.getElementById(categoryList[i]).classList.add('prevStyle');
            }

            document.getElementById('cateLi').classList.remove('flex');
            document.getElementById('cateLi').classList.add('hidden');

            setPlatformList([]);
            setCategoryList([]);
            setFilterData([]);
        }
        
        if(platformList != undefined|| filterData.length != undefined){
            return(
                <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[65%] 2xl:w-[60%] mx-auto flex-1 p-3 relative">
                    <div className="bg-slate-700 p-4">
                        <table className="min-w-full divide-y divide-gray-300">
                            <tbody className="divide-y divide-gray-600 bg-slate-800">
                                <tr className="divide-x divide-gray-600">
                                    <th className="whitespace-nowrap py-4 pl-4 pr-4 font-semibold text-slate-50 sm:pl-6 w-1/3">
                                        플랫폼
                                    </th>
                                    <td className="whitespace-nowrap p-4 text-sm text-slate-50 list-none flex flex-wrap gap-2">
                                        <li
                                            className="currentStyle"
                                            onClick={platformClick}
                                            id="전체"
                                            value="0"
                                        >
                                            전체
                                        </li>
                                        <li
                                            className="prevStyle"
                                            onClick={platformClick}
                                            id="Youtube"
                                            value="1"
                                        >
                                            Youtube
                                        </li>
                                        <li
                                            className="prevStyle"
                                            onClick={platformClick}
                                            id="Twitch"
                                            value="2"
                                        >
                                            Twitch
                                        </li>
                                        <li
                                            className="prevStyle"
                                            onClick={platformClick}
                                            id="afreecaTV"
                                            value="3"
                                        >
                                            afreecaTV
                                        </li>
                                        <li
                                            className="prevStyle"
                                            onClick={platformClick}
                                            id="Shorts"
                                            value="4"
                                        >
                                            Shorts
                                        </li>
                                        <li
                                            className="prevStyle"
                                            onClick={platformClick}
                                            id="TikTok"
                                            value="5"
                                        >
                                            TikTok
                                        </li>
                                        <li
                                            className="prevStyle"
                                            onClick={platformClick}
                                            id="Instagram"
                                            value="6"
                                        >
                                            Instagram
                                        </li>
                                        <li
                                            className="prevStyle"
                                            onClick={platformClick}
                                            id="kakaoTV"
                                            value="7"
                                        >
                                            kakaoTV
                                        </li>
                                        <li
                                            className="prevStyle"
                                            onClick={platformClick}
                                            id="NETFLIX"
                                            value="8"
                                        >
                                            NETFLIX
                                        </li>
                                        <li
                                            className="prevStyle"
                                            onClick={platformClick}
                                            id="Disney+"
                                            value="9"
                                        >
                                            Disney+
                                        </li>
                                        <li
                                            className="prevStyle"
                                            onClick={platformClick}
                                            id="왓챠"
                                            value="10"
                                        >
                                            왓챠
                                        </li>
                                        <li
                                            className="prevStyle"
                                            onClick={platformClick}
                                            id="웨이브"
                                            value="11"
                                        >
                                            웨이브
                                        </li>
                                        <li
                                            className="prevStyle"
                                            onClick={platformClick}
                                            id="티빙"
                                            value="12"
                                        >
                                            티빙
                                        </li>
                                        <li
                                            className="prevStyle"
                                            onClick={platformClick}
                                            id="쿠팡플레이"
                                            value="13"
                                        >
                                            쿠팡플레이
                                        </li>
                                        <li
                                            className="prevStyle"
                                            onClick={platformClick}
                                            id="프라임 비디오"
                                            value="14"
                                        >
                                            프라임 비디오
                                        </li>
                                        <li
                                            className="prevStyle"
                                            onClick={platformClick}
                                            id="애플TV"
                                            value="15"
                                        >
                                            애플TV
                                        </li>
                                    </td>
                                </tr>
    
                                <tr className="divide-x divide-gray-600">
                                    <th className="whitespace-nowrap py-4 pl-4 pr-4 font-semibold text-slate-50 sm:pl-6 w-1/3">
                                        인기
                                    </th>
                                    <td className="whitespace-nowrap p-4 text-sm text-slate-50 list-none flex flex-wrap gap-2">
                                        <li
                                            className="prevStyle"
                                            onClick={categoryClick}
                                            id="인기"
                                            value="20"
                                        >
                                            인기
                                        </li>
                                    </td>
                                </tr>
    
                                <tr className="divide-x divide-gray-600">
                                    <th className="whitespace-nowrap py-4 pl-4 pr-4 font-semibold text-slate-50 sm:pl-6 w-1/3">
                                        게임
                                    </th>
                                    <td className="whitespace-nowrap p-4 text-sm text-slate-50 list-none flex flex-wrap gap-2">
                                        <li
                                            className="prevStyle"
                                            onClick={categoryClick}
                                            id="League of Legends"
                                            value="21"
                                        >
                                            League of Legends
                                        </li>
                                        <li
                                            className="prevStyle"
                                            onClick={categoryClick}
                                            id="배그"
                                            value="22"
                                        >
                                            배그
                                        </li>
                                        <li
                                            className="prevStyle"
                                            onClick={categoryClick}
                                            id="스타크래프트"
                                            value="23"
                                        >
                                            스타크래프트
                                        </li>
                                        <li
                                            className="prevStyle"
                                            onClick={categoryClick}
                                            id="오버워치"
                                            value="24"
                                        >
                                            오버워치
                                        </li>
                                        <li
                                            className="prevStyle"
                                            onClick={categoryClick}
                                            id="피파"
                                            value="25"
                                        >
                                            피파
                                        </li>
                                        <li
                                            className="prevStyle"
                                            onClick={categoryClick}
                                            id="리니지"
                                            value="26"
                                        >
                                            리니지
                                        </li>
                                        <li
                                            className="prevStyle"
                                            onClick={categoryClick}
                                            id="카트라이더"
                                            value="27"
                                        >
                                            카트라이더
                                        </li>
                                        <li
                                            className="prevStyle"
                                            onClick={categoryClick}
                                            id="바람의나라"
                                            value="28"
                                        >
                                            바람의나라
                                        </li>
                                        <li
                                            className="prevStyle"
                                            onClick={categoryClick}
                                            id="메이플스토리"
                                            value="29"
                                        >
                                            메이플스토리
                                        </li>
                                        <li
                                            className="prevStyle"
                                            onClick={categoryClick}
                                            id="패키지게임"
                                            value="30"
                                        >
                                            패키지게임
                                        </li>
                                        <li
                                            className="prevStyle"
                                            onClick={categoryClick}
                                            id="서든어택"
                                            value="31"
                                        >
                                            서든어택
                                        </li>
                                        <li
                                            className="prevStyle"
                                            onClick={categoryClick}
                                            id="모바일"
                                            value="32"
                                        >
                                            모바일
                                        </li>
                                        <li
                                            className="prevStyle"
                                            onClick={categoryClick}
                                            id="기타"
                                            value="33"
                                        >
                                            기타
                                        </li>
                                    </td>
                                </tr>
    
                                <tr className="divide-x divide-gray-600">
                                    <th className="whitespace-nowrap py-4 pl-4 pr-4 font-semibold text-slate-50 sm:pl-6 w-1/3">
                                        스포츠
                                    </th>
                                    <td className="whitespace-nowrap p-4 text-sm text-slate-50 list-none flex flex-wrap gap-2">
                                        <li
                                            className="prevStyle"
                                            onClick={categoryClick}
                                            id="피트니스"
                                            value="50"
                                        >
                                            피트니스
                                        </li>
                                        <li
                                            className="prevStyle"
                                            onClick={categoryClick}
                                            id="축구"
                                            value="51"
                                        >
                                            축구
                                        </li>
                                        <li
                                            className="prevStyle"
                                            onClick={categoryClick}
                                            id="농구"
                                            value="52"
                                        >
                                            농구
                                        </li>
                                        <li
                                            className="prevStyle"
                                            onClick={categoryClick}
                                            id="야구"
                                            value="53"
                                        >
                                            야구
                                        </li>
                                        <li
                                            className="prevStyle"
                                            onClick={categoryClick}
                                            id="요가"
                                            value="54"
                                        >
                                            요가
                                        </li>
                                        <li
                                            className="prevStyle"
                                            onClick={categoryClick}
                                            id="홈트"
                                            value="55"
                                        >
                                            홈트
                                        </li>
                                    </td>
                                </tr>
    
                                <tr className="divide-x divide-gray-600">
                                    <th className="whitespace-nowrap py-4 pl-4 pr-4 font-semibold text-slate-50 sm:pl-6 w-1/3">
                                        취미
                                    </th>
                                    <td className="whitespace-nowrap p-4 text-sm text-slate-50 list-none flex flex-wrap gap-2">
                                        <li
                                            className="prevStyle"
                                            onClick={categoryClick}
                                            id="패션"
                                            value="70"
                                        >
                                            패션
                                        </li>
                                        <li
                                            className="prevStyle"
                                            onClick={categoryClick}
                                            id="요리"
                                            value="71"
                                        >
                                            요리
                                        </li>
                                        <li
                                            className="prevStyle"
                                            onClick={categoryClick}
                                            id="산악/등산"
                                            value="72"
                                        >
                                            산악/등산
                                        </li>
                                        <li
                                            className="prevStyle"
                                            onClick={categoryClick}
                                            id="자전거"
                                            value="73"
                                        >
                                            자전거
                                        </li>
                                        <li
                                            className="prevStyle"
                                            onClick={categoryClick}
                                            id="자동차"
                                            value="74"
                                        >
                                            자동차
                                        </li>
                                        <li
                                            className="prevStyle"
                                            onClick={categoryClick}
                                            id="오토바이"
                                            value="75"
                                        >
                                            오토바이
                                        </li>
                                        <li
                                            className="prevStyle"
                                            onClick={categoryClick}
                                            id="만들기"
                                            value="76"
                                        >
                                            만들기
                                        </li>
                                        <li
                                            className="prevStyle"
                                            onClick={categoryClick}
                                            id="공방"
                                            value="77"
                                        >
                                            공방
                                        </li>
                                        <li
                                            className="prevStyle"
                                            onClick={categoryClick}
                                            id="IT/과학"
                                            value="78"
                                        >
                                            IT/과학
                                        </li>
                                    </td>
                                </tr>
    
                                <tr className="divide-x divide-gray-600">
                                    <th className="whitespace-nowrap py-4 pl-4 pr-4 font-semibold text-slate-50 sm:pl-6 w-1/3">
                                        엔터테인먼트
                                    </th>
                                    <td className="whitespace-nowrap p-4 text-sm text-slate-50 list-none flex flex-wrap gap-2">
                                        <li
                                            className="prevStyle"
                                            onClick={categoryClick}
                                            id="공식채널"
                                            value="90"
                                        >
                                            공식채널
                                        </li>
                                        <li
                                            className="prevStyle"
                                            onClick={categoryClick}
                                            id="코미디"
                                            value="91"
                                        >
                                            코미디
                                        </li>
                                        <li
                                            className="prevStyle"
                                            onClick={categoryClick}
                                            id="음악"
                                            value="92"
                                        >
                                            음악
                                        </li>
                                        <li
                                            className="prevStyle"
                                            onClick={categoryClick}
                                            id="춤"
                                            value="93"
                                        >
                                            춤
                                        </li>
                                        <li
                                            className="prevStyle"
                                            onClick={categoryClick}
                                            id="만화/애니"
                                            value="94"
                                        >
                                            만화/애니
                                        </li>
                                        <li
                                            className="prevStyle"
                                            onClick={categoryClick}
                                            id="먹방"
                                            value="95"
                                        >
                                            먹방
                                        </li>
                                        <li
                                            className="prevStyle"
                                            onClick={categoryClick}
                                            id="크리에이터"
                                            value="96"
                                        >
                                            크리에이터
                                        </li>
                                        <li
                                            className="prevStyle"
                                            onClick={categoryClick}
                                            id="메이크업"
                                            value="97"
                                        >
                                            메이크업
                                        </li>
                                        <li
                                            className="prevStyle"
                                            onClick={categoryClick}
                                            id="짤/숏"
                                            value="98"
                                        >
                                            짤/숏
                                        </li>
                                        <li
                                            className="prevStyle"
                                            onClick={categoryClick}
                                            id="키즈"
                                            value="99"
                                        >
                                            키즈
                                        </li>
                                        <li
                                            className="prevStyle"
                                            onClick={categoryClick}
                                            id="연예인"
                                            value="100"
                                        >
                                            연예인
                                        </li>
                                        <li
                                            className="prevStyle"
                                            onClick={categoryClick}
                                            id="국내↔해외"
                                            value="101"
                                        >
                                            국내↔해외
                                        </li>
                                        <li
                                            className="prevStyle"
                                            onClick={categoryClick}
                                            id="관찰"
                                            value="102"
                                        >
                                            관찰
                                        </li>
                                    </td>
                                </tr>
    
                                <tr className="divide-x divide-gray-600">
                                    <th className="whitespace-nowrap py-4 pl-4 pr-4 font-semibold text-slate-50 sm:pl-6 w-1/3">
                                        일상
                                    </th>
                                    <td className="whitespace-nowrap p-4 text-sm text-slate-50 list-none flex flex-wrap gap-2">
                                        <li
                                            className="prevStyle"
                                            onClick={categoryClick}
                                            id="브이로그"
                                            value="120"
                                        >
                                            브이로그
                                        </li>
                                        <li
                                            className="prevStyle"
                                            onClick={categoryClick}
                                            id="동물"
                                            value="121"
                                        >
                                            동물
                                        </li>
                                        <li
                                            className="prevStyle"
                                            onClick={categoryClick}
                                            id="커플/연인"
                                            value="122"
                                        >
                                            커플/연인
                                        </li>
                                        <li
                                            className="prevStyle"
                                            onClick={categoryClick}
                                            id="겟레디윗미"
                                            value="123"
                                        >
                                            겟레디윗미
                                        </li>
                                        <li
                                            className="prevStyle"
                                            onClick={categoryClick}
                                            id="학습/공부"
                                            value="124"
                                        >
                                            학습/공부
                                        </li>
                                    </td>
                                </tr>
    
                                <tr className="divide-x divide-gray-600">
                                    <th className="whitespace-nowrap py-4 pl-4 pr-4 font-semibold text-slate-50 sm:pl-6 w-1/3">
                                        리뷰
                                    </th>
                                    <td className="whitespace-nowrap p-4 text-sm text-slate-50 list-none flex flex-wrap gap-2">
                                        <li
                                            className="prevStyle"
                                            onClick={categoryClick}
                                            id="영화"
                                            value="140"
                                        >
                                            영화
                                        </li>
                                        <li
                                            className="prevStyle"
                                            onClick={categoryClick}
                                            id="드라마"
                                            value="141"
                                        >
                                            드라마
                                        </li>
                                        <li
                                            className="prevStyle"
                                            onClick={categoryClick}
                                            id="전자기기"
                                            value="142"
                                        >
                                            전자기기
                                        </li>
                                        <li
                                            className="prevStyle"
                                            onClick={categoryClick}
                                            id="화장품"
                                            value="143"
                                        >
                                            화장품
                                        </li>
                                        <li
                                            className="prevStyle"
                                            onClick={categoryClick}
                                            id="자동차"
                                            value="144"
                                        >
                                            자동차
                                        </li>
                                        <li
                                            className="prevStyle"
                                            onClick={categoryClick}
                                            id="의류"
                                            value="145"
                                        >
                                            의류
                                        </li>
                                    </td>
                                </tr>
    
                                <tr className="divide-x divide-gray-600 table-row" id="genderDiv">
                                    <th className="whitespace-nowrap py-4 pl-4 pr-4 font-semibold text-slate-50 sm:pl-6 w-1/3">
                                        크리에이터 성별
                                    </th>
                                    <td className="whitespace-nowrap p-4 text-sm text-slate-50 list-none flex flex-wrap gap-2">
                                        <li
                                            className="prevStyle"
                                            onClick={categoryClick}
                                            id="남자"
                                            value="160"
                                        >
                                            남자
                                        </li>
                                        <li
                                            className="prevStyle"
                                            onClick={categoryClick}
                                            id="여자"
                                            value="161"
                                        >
                                            여자
                                        </li>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="flex">
                            <div className="flex flex-wrap lg:flex-nowrap justify-center items-center text-center ">
                                <p className="p-1 mr-3 text-sm hidden md:flex whitespace-nowrap">선택한 필터</p>
                                <div className="flex items-center whitespace-nowrap" onClick={reset}>
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
                            <div className="w-[78%] lg:w-[82%]">
                                <ul className="flex p-2">
                                    <li className="mx-2.5 cursor-pointer border border-sky-500 text-gray-500 rounded-full px-1.5 flex"> 플랫폼: {platformList.length < 1 ? <p className="text-sky-500 ml-2" >전체</p> : platformList.map((i, index) => <p key={i+index} className="text-sky-500 ml-2" >{i}</p>)}</li>
                                    <li className="mx-2.5 cursor-pointer border border-sky-500 text-gray-500 rounded-full px-1.5 flex hidden" id="cateLi">  {categoryList.map((i, index) => <p key={i+index} className="text-sky-500 mx-1">{i}</p>)}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
    
                    {/* 결과 재검색 */}
                    <div className="flex justify-end mt-12 ">
                        
                        <div className="flex items-center">
                            {/* <p className="whitespace-nowrap mr-2">결과 내 재검색</p> */}
                            <Research queryValue={queryValue}></Research>
                        </div>
                    </div>
    
                    {/* 비디오광고 */}
                    <div className="relative flex justify-center w-full mt-12">
                        <VideoAd></VideoAd>
                    </div>
    
                    <div className="relative flex justify-center mt-12 w-full">
                        {platformList.length > 0 || filterData.length > 0 ? (
                            <ResultList filterData={filterData} />
                        ) : (
                            <ResultList result={resultData} />
                        )}
                    </div>
                </div>
            );
        }else {
            return('');
        }
    } else {
        return "";
    }
}

export default Category_bak;