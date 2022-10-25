import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

/** axios */
import axios from 'axios';

import VideoAd from "./videoAd"
import ResultList from "./resultList";

function Category({props}){
    
    if(props != undefined && props != ''){
        const result = props.result[1];

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
                setFilterData([]);

                if(categoryList.length > 0){
                    setFilterData(addSearchFilter({platformList, categoryList}));
                }
            } else {
                setTest(e.target.id);
                document.getElementById('전체').classList.remove('currentStyle');
                document.getElementById('전체').classList.add('prevStyle');

                if(selectTag.className === 'prevStyle'){
                    selectTag.classList.remove('prevStyle');
                    selectTag.classList.add('currentStyle');
                    platformList.push(e.target.id);

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

                    if(platformList.length === 0){
                        setPlatformList([]);
                        setFilterData([]);
                        document.getElementById('전체').classList.remove('prevStyle');
                        document.getElementById('전체').classList.add('currentStyle');
                    }

                    if(categoryList.length > 0){
                        setFilterData(addSearchFilter({platformList, categoryList}));
                    }
                }

                setFilterData([]);
                console.log('platformList 수정? : ' , platformList);
                console.log('platformList 수정? : ' , platformList.length);
                for(let i = 0; i < platformList.length; i++){
                    console.log(result.filter((item) => item.platform === platformList[i]));
                    if(result.filter((item) => item.platform === platformList[i]).length > 0){
                        setFilterData(...filterData, [result.filter((item) => item.platform === platformList[i])]);
                    }
                }
                console.log(filterData);
            }
        }

        const categoryClick = (e) => {
            setTest(e.target.id);
            const selectTag = document.getElementById(e.target.id);

            if(selectTag.className === 'prevStyle'){
                selectTag.classList.remove('prevStyle');
                selectTag.classList.add('currentStyle');
                categoryList.push(e.target.id);

            } else if(selectTag.className === 'currentStyle') {
                selectTag.classList.remove('currentStyle');
                selectTag.classList.add('prevStyle');

                for(let i = 0; i < categoryList.length; i++){
                    if(categoryList[i] === e.target.id){
                        categoryList.splice(i, 1);
                        i--;
                    }
                }

                if(categoryList.length === 0){
                    setCategoryList([]);
                }
            }

            setFilterData(addSearchFilter({platformList, categoryList}));

            console.log('카테고리는???');
            console.log(categoryList);
            console.log('filterData : ' , filterData);
        }

        const addSearchFilter = async({platformList, categoryList}) => {

            console.log('함수 실행 확인!');
            console.log(platformList);
            console.log(categoryList);

            for(let i = 0; i < categoryList.length; i++){
                const response = await axios.get("https://api.twitch.tv/helix/search/channels?query=" + categoryList[i],{
                    headers: {
                        'Authorization':'Bearer 09z7q6lphf4nrmu5rjfihquov5orow',
                        'Client-Id':'g901hktaiu6c4v5dt4vkjoptq5vjtk'
                    }
                });
                console.log(response.data.data);


            }
        
        
            // /* Twitch */
            // await fetch("https://api.twitch.tv/helix/search/categories?query=" + req.query.q, {
            //     method: 'get',
            //     headers: {
            //         'Authorization':'Bearer 09z7q6lphf4nrmu5rjfihquov5orow',
            //         'Client-Id':'g901hktaiu6c4v5dt4vkjoptq5vjtk'
            //     }
            // })
            // .then((response) => response.json())
            // .then((data) => {
            //     if(data.data != undefined){
            //         let items = data.data;
            
            //         for(let i = 0; i < items.length; i++){
            //             twitchCateIds.push({id: items[i].id});
            //         }
            //     }
            // });
        
            // if(twitchCateIds.length < 1){
            //     await fetch("https://api.twitch.tv/helix/search/channels?query=" + req.query.q, {
            //     method: 'get',
            //     headers: {
            //         'Authorization':'Bearer 09z7q6lphf4nrmu5rjfihquov5orow',
            //         'Client-Id':'g901hktaiu6c4v5dt4vkjoptq5vjtk'
            //     }
            //     })
            //     .then((response) => response.json())
            //     .then((data) => {
            //         if(data.data != undefined){
            //             let items = data.data;
            
            //             for(let i = 0; i < items.length; i++){
            //                 if(items[i].game_id > 0){
            //                     twitchCateIds.push({id: items[i].game_id});
            //                 }
            //             }
            //         }
            //     });
            // }
        
            // for(let i = 0; i < twitchCateIds.length; i++){
            //     await fetch("https://api.twitch.tv/helix/streams?language=ko&first=5&game_id=" + twitchCateIds[i].id, {
            //         method: 'get',
            //         headers: {
            //             'Authorization':'Bearer 09z7q6lphf4nrmu5rjfihquov5orow',
            //             'Client-Id':'g901hktaiu6c4v5dt4vkjoptq5vjtk'
            //         }
            //     })
            //     .then((response) => response.json())
            //     .then((data) => {
            //         let items = data.data;
                    
            //         for(let i = 0; i < items.length; i++){
            //             result.push({id: items[i].id, url: items[i].thumbnail_url.replace('{width}x{height}', '350x200'), title: items[i].title, channel: items[i].user_name, date: items[i].started_at, link: items[i].user_login, platform: 'Twitch'});
            //         }
            //     });
            // }
            
            // results.push([...new Set(result.map(JSON.stringify))].map(JSON.parse));
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
                                <li className="currentStyle" onClick={platformClick} id="전체" value="0">전체</li>
                                <li className="prevStyle" onClick={platformClick} id="Youtube" value="1">Youtube</li>
                                <li className="prevStyle" onClick={platformClick} id="Twitch" value="2">Twitch</li>
                                <li className="prevStyle" onClick={platformClick} id="afreecaTV" value="3">afreecaTV</li>
                            </ul>
                            <ul className="flex p-2 pt-4">
                                <li className="prevStyle" onClick={platformClick} id="Shorts" value="4">Shorts</li>
                                <li className="prevStyle" onClick={platformClick} id="TikTok" value="5">TikTok</li>
                                <li className="prevStyle" onClick={platformClick} id="Instagram" value="6">Instagram</li>
                                <li className="prevStyle" onClick={platformClick} id="kakaoTV" value="7">kakaoTV</li>
                            </ul>
                            <ul className="flex p-2 pt-4">
                                <li className="prevStyle" onClick={platformClick} id="NETFLIX" value="8">NETFLIX</li>
                                <li className="prevStyle" onClick={platformClick} id="Disney+" value="9">Disney+</li>
                                <li className="prevStyle" onClick={platformClick} id="왓챠" value="10">왓챠</li>
                                <li className="prevStyle" onClick={platformClick} id="웨이브" value="11">웨이브</li>
                                <li className="prevStyle" onClick={platformClick} id="티빙" value="12">티빙</li>
                                <li className="prevStyle" onClick={platformClick} id="쿠팡플레이" value="13">쿠팡플레이</li>
                                <li className="prevStyle" onClick={platformClick} id="프라임 비디오" value="14">프라임 비디오</li>
                                <li className="prevStyle" onClick={platformClick} id="애플TV" value="15">애플TV</li>
                            </ul>
                        </div>
                    </div>

                    {/* 카테고리 */}
                    <div className="flex justify-center divide-y divide-slate-200">
                        <div className="w-[13%] min-h-full bg-blue-600 p-4 border-t border-l border-white font-semibold">인기</div>
                        <div className="w-[85%] border-r">
                            <ul className="flex p-2 pt-4">
                                <li className="prevStyle" onClick={categoryClick} id="인기" value="20">인기</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex justify-center divide-y divide-slate-200">
                        <div className="w-[13%] min-h-full bg-blue-600 p-4 border-t border-l border-white font-semibold">게임</div>
                        <div className="w-[85%] border-r">
                            <ul className="flex p-2 pt-4">
                                <li className="prevStyle" onClick={categoryClick} id="League of Legends" value="21">League of Legends</li>
                                <li className="prevStyle" onClick={categoryClick} id="배그" value="22">배그</li>
                                <li className="prevStyle" onClick={categoryClick} id="스타크래프트" value="23">스타크래프트</li>
                                <li className="prevStyle" onClick={categoryClick} id="오버워치" value="24">오버워치</li>
                                <li className="prevStyle" onClick={categoryClick} id="피파" value="25">피파</li>
                                <li className="prevStyle" onClick={categoryClick} id="리니지" value="26">리니지</li>
                                <li className="prevStyle" onClick={categoryClick} id="카트라이더" value="27">카트라이더</li>
                                <li className="prevStyle" onClick={categoryClick} id="바람의나라" value="28">바람의나라</li>
                                <li className="prevStyle" onClick={categoryClick} id="메이플스토리" value="29">메이플스토리</li>
                                <li className="prevStyle" onClick={categoryClick} id="패키지게임" value="30">패키지게임</li>
                                <li className="prevStyle" onClick={categoryClick} id="서든어택" value="31">서든어택</li>
                                <li className="prevStyle" onClick={categoryClick} id="모바일" value="32">모바일</li>
                                <li className="prevStyle" onClick={categoryClick} id="기타" value="33">기타</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex justify-center divide-y divide-slate-200">
                        <div className="w-[13%] min-h-full bg-blue-600 p-4 border-t border-l border-white font-semibold">스포츠</div>
                        <div className="w-[85%] border-r">
                            <ul className="flex p-2 pt-4">
                                <li className="prevStyle" onClick={platformClick} id="피트니스" value="50">피트니스</li>
                                <li className="prevStyle" onClick={platformClick} id="축구" value="51">축구</li>
                                <li className="prevStyle" onClick={platformClick} id="농구" value="52">농구</li>
                                <li className="prevStyle" onClick={platformClick} id="야구" value="53">야구</li>
                                <li className="prevStyle" onClick={platformClick} id="요가" value="54">요가</li>
                                <li className="prevStyle" onClick={platformClick} id="홈트" value="55">홈트</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex justify-center divide-y divide-slate-200">
                        <div className="w-[13%] min-h-full bg-blue-600 p-4 border-t border-l border-white font-semibold">취미</div>
                        <div className="w-[85%] border-r">
                            <ul className="flex p-2 pt-4">
                                <li className="prevStyle" onClick={platformClick} id="패션" value="70">패션</li>
                                <li className="prevStyle" onClick={platformClick} id="요리" value="71">요리</li>
                                <li className="prevStyle" onClick={platformClick} id="산악/등산" value="72">산악/등산</li>
                                <li className="prevStyle" onClick={platformClick} id="자전거" value="73">자전거</li>
                                <li className="prevStyle" onClick={platformClick} id="자동차" value="74">자동차</li>
                                <li className="prevStyle" onClick={platformClick} id="오토바이" value="75">오토바이</li>
                                <li className="prevStyle" onClick={platformClick} id="만들기" value="76">만들기</li>
                                <li className="prevStyle" onClick={platformClick} id="공방" value="77">공방</li>
                                <li className="prevStyle" onClick={platformClick} id="IT/과학" value="78">IT/과학</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex justify-center divide-y divide-slate-200">
                        <div className="w-[13%] min-h-full bg-blue-600 p-4 border-t border-l border-white font-semibold">엔터테인먼트</div>
                        <div className="w-[85%] border-r">
                            <ul className="flex p-2 pt-4">
                                <li className="prevStyle" onClick={platformClick} id="공식채널" value="90">공식채널</li>
                                <li className="prevStyle" onClick={platformClick} id="코미디" value="91">코미디</li>
                                <li className="prevStyle" onClick={platformClick} id="음악" value="92">음악</li>
                                <li className="prevStyle" onClick={platformClick} id="춤" value="93">춤</li>
                                <li className="prevStyle" onClick={platformClick} id="만화/애니" value="94">만화/애니</li>
                                <li className="prevStyle" onClick={platformClick} id="먹방" value="95">먹방</li>
                                <li className="prevStyle" onClick={platformClick} id="크리에이터" value="96">크리에이터</li>
                                <li className="prevStyle" onClick={platformClick} id="메이크업" value="97">메이크업</li>
                                <li className="prevStyle" onClick={platformClick} id="짤/숏" value="98">짤/숏</li>
                                <li className="prevStyle" onClick={platformClick} id="키즈" value="99">키즈</li>
                                <li className="prevStyle" onClick={platformClick} id="연예인" value="100">연예인</li>
                                <li className="prevStyle" onClick={platformClick} id="국내↔해외" value="101">국내↔해외</li>
                                <li className="prevStyle" onClick={platformClick} id="관찰" value="102">관찰</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex justify-center divide-y divide-slate-200">
                        <div className="w-[13%] min-h-full bg-blue-600 p-4 border-t border-l border-white font-semibold">일상</div>
                        <div className="w-[85%] border-r">
                            <ul className="flex p-2 pt-4">
                                <li className="prevStyle" onClick={platformClick} id="브이로그" value="120">브이로그</li>
                                <li className="prevStyle" onClick={platformClick} id="동물" value="121">동물</li>
                                <li className="prevStyle" onClick={platformClick} id="커플/연인" value="122">커플/연인</li>
                                <li className="prevStyle" onClick={platformClick} id="겟레디윗미" value="123">겟레디윗미</li>
                                <li className="prevStyle" onClick={platformClick} id="학습/공부" value="124">학습/공부</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex justify-center divide-y divide-slate-200">
                        <div className="w-[13%] min-h-full bg-blue-600 p-4 border-t border-l border-white font-semibold">리뷰</div>
                        <div className="w-[85%] border-r">
                            <ul className="flex p-2 pt-4">
                                <li className="prevStyle" onClick={platformClick} id="영화" value="140">영화</li>
                                <li className="prevStyle" onClick={platformClick} id="드라마" value="141">드라마</li>
                                <li className="prevStyle" onClick={platformClick} id="전자기기" value="142">전자기기</li>
                                <li className="prevStyle" onClick={platformClick} id="화장품" value="143">화장품</li>
                                <li className="prevStyle" onClick={platformClick} id="자동차" value="144">자동차</li>
                                <li className="prevStyle" onClick={platformClick} id="의류" value="145">의류</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* 비디오광고 */}
            <div className="relative flex justify-center py-7">
                    <VideoAd></VideoAd>
            </div>

            <div className="relative flex justify-center">
                {
                   platformList.length > 0 ? <ResultList filterData={filterData} /> : <ResultList result={result} />
                }
            </div>
            </>
        )
    } else {
        return('');
    }
}

export default Category;