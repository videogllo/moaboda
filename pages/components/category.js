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

        const [twitchId, setTwitchId] = useState([]);

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

                // if(categoryList.length > 0){
                //     setFilterData(addSearchFilter({platformList, categoryList}));
                // }
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
                        if(result.filter((item) => item.platform === platformList[i]).length > 0){
                            // setFilterData(...filterData, [result.filter((item) => item.platform === platformList[i])]);
                            filterData.push(result.filter((item) => item.platform === platformList[i]));
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
                        if(result.filter((item) => item.platform === platformList[i]).length > 0){
                            // setFilterData(...filterData, [result.filter((item) => item.platform === platformList[i])]);
                            filterData.push(result.filter((item) => item.platform === platformList[i]));
                        }
                    }

                    if(platformList.length === 0){
                        setPlatformList([]);
                        filterData.length = 0;
                        document.getElementById('전체').classList.remove('prevStyle');
                        document.getElementById('전체').classList.add('currentStyle');
                    }

                    // if(categoryList.length > 0){
                    //     setFilterData(addSearchFilter({platformList, categoryList}));
                    // }
                }
                
            }
           
        }

        const categoryClick = (e) => {
            setTest(e.target.id);
            const selectTag = document.getElementById(e.target.id);
            
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

        //    addSearchFilter({platformList, categoryList});
        }

        const reset = (e) => {
            setPlatformList([]);
            setCategoryList([]);
        }

        const addSearchFilter = async({platformList, categoryList}) => {

            
            setFilterData([]);
            setTwitchId([]);

            console.log('함수 실행 확인!');
            console.log(platformList);
            console.log(categoryList);

            const filterResult = [];
            
            for(let i = 0; i < categoryList.length; i++){
                await axios.get("https://api.twitch.tv/helix/search/channels?query=" + categoryList[i],{
                    headers: {
                        'Authorization':'Bearer 09z7q6lphf4nrmu5rjfihquov5orow',
                        'Client-Id':'g901hktaiu6c4v5dt4vkjoptq5vjtk'
                    }
                })
                .then(function(response){
                    if(response.status == 200){
                        const items = response.data.data;
                        console.log('---------------------');
                        console.log(items.map((index) => index));

                        // for(let i = 0; i < items.length; i++){
                        //     let itemsArr = {id: items[i].id};
                        //     twitchId.push(itemsArr);
                        // }
                    }
                })
                .catch(function(error){
                    console.log(error);
                });
            }



            // console.log(typeof(twitchId));
            // console.log(twitchId.length);
            

            // if(twitchId.length < 1){
            //     for(let i = 0; i < categoryList.length; i++){
            //         axios.get("https://api.twitch.tv/helix/search/channels?query=" + categoryList[i], {
            //             headers: {
            //                 'Authorization':'Bearer 09z7q6lphf4nrmu5rjfihquov5orow',
            //                 'Client-Id':'g901hktaiu6c4v5dt4vkjoptq5vjtk'
            //             }
            //         })
            //         .then(function(response){
            //             if(response.status == 200){
            //                 const items = response.data.data;
    
            //                 for(let i = 0; i < items.length; i++){
            //                     if(items[i].game_id > 0){
            //                         twitchId.push({id: items[i].game_id});
            //                     }
            //                 }
            //             }
            //         })
            //         .catch(function(error){
            //             console.log(error);
            //         });
            //     }
            // }

            // for(let i = 0; i < twitchId.length; i++){
            //     axios.get("https://api.twitch.tv/helix/streams?language=ko&first=5&game_id=" + twitchId[i].id, {
            //         headers: {
            //             'Authorization':'Bearer 09z7q6lphf4nrmu5rjfihquov5orow',
            //             'Client-Id':'g901hktaiu6c4v5dt4vkjoptq5vjtk'
            //         }
            //     })
            //     .then(function(response){
            //         if(response.status == 200){
            //             const items = response.data.data;

            //             for(let i = 0; i < items.length; i++){
            //                 filterResult.push({id: items[i].id, url: items[i].thumbnail_url.replace('{width}x{height}', '350x200'), title: items[i].title, channel: items[i].user_name, date: items[i].started_at, link: items[i].user_login, platform: 'Twitch'});
            //             }
            //         }
            //     })
            //     .catch(function(error){
            //         console.log(error);
            //     });
            // }
            
            // results.push([...new Set(filterResult.map(JSON.stringify))].map(JSON.parse));

        }
        
        
        return(
            <>
            <div className="flex justify-center">
                <div className="w-full md:w-[59%]">
                    <div className="flex justify-center divide-y divide-slate-200 w-full">
                        <div className="w-[16%] min-h-full bg-blue-600 p-4 border-t border-l border-white font-semibold">플랫폼</div>
                        <div className="w-[82%] border-r">
                            <ul className="flex flex-wrap p-2 pt-4">
                                <li className="currentStyle" onClick={platformClick} id="전체" value="0">전체</li>
                                <li className="prevStyle" onClick={platformClick} id="Youtube" value="1">Youtube</li>
                                <li className="prevStyle" onClick={platformClick} id="Twitch" value="2">Twitch</li>
                                <li className="prevStyle" onClick={platformClick} id="afreecaTV" value="3">afreecaTV</li>
                            </ul>
                            <ul className="flex flex-wrap p-2 pt-4">
                                <li className="prevStyle" onClick={platformClick} id="Shorts" value="4">Shorts</li>
                                <li className="prevStyle" onClick={platformClick} id="TikTok" value="5">TikTok</li>
                                <li className="prevStyle" onClick={platformClick} id="Instagram" value="6">Instagram</li>
                                <li className="prevStyle" onClick={platformClick} id="kakaoTV" value="7">kakaoTV</li>
                            </ul>
                            <ul className="flex flex-wrap p-2 pt-4">
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
                        <div className="w-[16%] min-h-full bg-blue-600 p-4 border-t border-l border-white font-semibold">인기</div>
                        <div className="w-[82%] border-r">
                            <ul className="flex p-2 pt-4">
                                <li className="prevStyle" onClick={categoryClick} id="인기" value="20">인기</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex justify-center divide-y divide-slate-200">
                        <div className="w-[16%] min-h-full bg-blue-600 p-4 border-t border-l border-white font-semibold">게임</div>
                        <div className="w-[82%] border-r">
                            <ul className="flex flex-wrap p-2 pt-4">
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
                        <div className="w-[16%] min-h-full bg-blue-600 p-4 border-t border-l border-white font-semibold">스포츠</div>
                        <div className="w-[82%] border-r">
                            <ul className="flex flex-wrap p-2 pt-4">
                                <li className="prevStyle" onClick={categoryClick} id="피트니스" value="50">피트니스</li>
                                <li className="prevStyle" onClick={categoryClick} id="축구" value="51">축구</li>
                                <li className="prevStyle" onClick={categoryClick} id="농구" value="52">농구</li>
                                <li className="prevStyle" onClick={categoryClick} id="야구" value="53">야구</li>
                                <li className="prevStyle" onClick={categoryClick} id="요가" value="54">요가</li>
                                <li className="prevStyle" onClick={categoryClick} id="홈트" value="55">홈트</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex justify-center divide-y divide-slate-200">
                        <div className="w-[16%] min-h-full bg-blue-600 p-4 border-t border-l border-white font-semibold">취미</div>
                        <div className="w-[82%] border-r">
                            <ul className="flex flex-wrap p-2 pt-4">
                                <li className="prevStyle" onClick={categoryClick} id="패션" value="70">패션</li>
                                <li className="prevStyle" onClick={categoryClick} id="요리" value="71">요리</li>
                                <li className="prevStyle" onClick={categoryClick} id="산악/등산" value="72">산악/등산</li>
                                <li className="prevStyle" onClick={categoryClick} id="자전거" value="73">자전거</li>
                                <li className="prevStyle" onClick={categoryClick} id="자동차" value="74">자동차</li>
                                <li className="prevStyle" onClick={categoryClick} id="오토바이" value="75">오토바이</li>
                                <li className="prevStyle" onClick={categoryClick} id="만들기" value="76">만들기</li>
                                <li className="prevStyle" onClick={categoryClick} id="공방" value="77">공방</li>
                                <li className="prevStyle" onClick={categoryClick} id="IT/과학" value="78">IT/과학</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex justify-center divide-y divide-slate-200">
                        <div className="w-[16%] min-h-full bg-blue-600 p-4 border-t border-l border-white font-semibold">엔터테인먼트</div>
                        <div className="w-[82%] border-r">
                            <ul className="flex flex-wrap p-2 pt-4">
                                <li className="prevStyle" onClick={categoryClick} id="공식채널" value="90">공식채널</li>
                                <li className="prevStyle" onClick={categoryClick} id="코미디" value="91">코미디</li>
                                <li className="prevStyle" onClick={categoryClick} id="음악" value="92">음악</li>
                                <li className="prevStyle" onClick={categoryClick} id="춤" value="93">춤</li>
                                <li className="prevStyle" onClick={categoryClick} id="만화/애니" value="94">만화/애니</li>
                                <li className="prevStyle" onClick={categoryClick} id="먹방" value="95">먹방</li>
                                <li className="prevStyle" onClick={categoryClick} id="크리에이터" value="96">크리에이터</li>
                                <li className="prevStyle" onClick={categoryClick} id="메이크업" value="97">메이크업</li>
                                <li className="prevStyle" onClick={categoryClick} id="짤/숏" value="98">짤/숏</li>
                                <li className="prevStyle" onClick={categoryClick} id="키즈" value="99">키즈</li>
                                <li className="prevStyle" onClick={categoryClick} id="연예인" value="100">연예인</li>
                                <li className="prevStyle" onClick={categoryClick} id="국내↔해외" value="101">국내↔해외</li>
                                <li className="prevStyle" onClick={categoryClick} id="관찰" value="102">관찰</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex justify-center divide-y divide-slate-200">
                        <div className="w-[16%] min-h-full bg-blue-600 p-4 border-t border-l border-white font-semibold">일상</div>
                        <div className="w-[82%] border-r">
                            <ul className="flex flex-wrap p-2 pt-4">
                                <li className="prevStyle" onClick={categoryClick} id="브이로그" value="120">브이로그</li>
                                <li className="prevStyle" onClick={categoryClick} id="동물" value="121">동물</li>
                                <li className="prevStyle" onClick={categoryClick} id="커플/연인" value="122">커플/연인</li>
                                <li className="prevStyle" onClick={categoryClick} id="겟레디윗미" value="123">겟레디윗미</li>
                                <li className="prevStyle" onClick={categoryClick} id="학습/공부" value="124">학습/공부</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex justify-center divide-y divide-slate-200">
                        <div className="w-[16%] min-h-full bg-blue-600 p-4 border-t border-l border-white font-semibold">리뷰</div>
                        <div className="w-[82%] border-r">
                            <ul className="flex flex-wrap p-2 pt-4">
                                <li className="prevStyle" onClick={categoryClick} id="영화" value="140">영화</li>
                                <li className="prevStyle" onClick={categoryClick} id="드라마" value="141">드라마</li>
                                <li className="prevStyle" onClick={categoryClick} id="전자기기" value="142">전자기기</li>
                                <li className="prevStyle" onClick={categoryClick} id="화장품" value="143">화장품</li>
                                <li className="prevStyle" onClick={categoryClick} id="자동차" value="144">자동차</li>
                                <li className="prevStyle" onClick={categoryClick} id="의류" value="145">의류</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex justify-center divide-y divide-slate-200">
                        <div className="w-[16%] min-h-full bg-blue-600 p-4 border-t border-l border-white font-semibold">크리에이터 성별</div>
                        <div className="w-[82%] border-r">
                            <ul className="flex flex-wrap p-2 pt-4">
                                <li className="prevStyle" onClick={categoryClick} id="영화" value="160">남자</li>
                                <li className="prevStyle" onClick={categoryClick} id="드라마" value="161">여자</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex justify-center ">
                        <div className="flex flex-wrap lg:flex-nowrap justify-center w-[20%] lg:w-[16%] items-center border-y border-l bg-white text-gray-500 text-center ">
                            <p className="p-1 mr-3 text-sm hidden md:flex">선택한 필터</p>
                            <div className="flex items-center" onClick={reset}>
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
                        <div className="w-[78%] lg:w-[82%] border-y border-r bg-white">
                            <ul className="flex p-2">
                                <li className="mx-2.5 cursor-pointer border border-sky-500 text-gray-500 rounded-full px-1.5 flex"> 플랫폼: {platformList.length < 1 ? <p className="text-sky-500 ml-2" >전체</p> : platformList.map((i, index) => <p key={i+index} className="text-sky-500 ml-2" >{i}</p>)}</li>
                                <li className="mx-2.5 cursor-pointer border border-sky-500 text-gray-500 rounded-full px-1.5 flex hidden" id="cateLi">  {categoryList.map((i, index) => <p key={i+index} className="text-sky-500 mx-1">{i}</p>)}</li>
                                {/* <li className="mx-2.5 cursor-pointer border border-sky-500 text-gray-500 rounded-full px-1.5 flex hidden" id="tagLi"> 키워드: {tagList.map((i) => <p key={i.var} className="text-sky-500 ml-2" onClick={Delete}>{i.id}</p>)}</li> */}
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