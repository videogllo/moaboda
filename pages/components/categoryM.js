import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

import VideoAd from "./videoAd";
import ResultList from "./resultList";
import Research from "./research";


export default function CategoryM({props}){
    // let URLSearch = new URLSearchParams(location.search);
    
    if(props != undefined && props != ''){
        const result = props.result[1];

        const [test, setTest] = useState();
        const [filterData, setFilterData] = useState([]);

        const [platformList, setPlatformList] = useState([]);
        const [categoryList, setCategoryList] = useState([]);

        const platformClick = (e) => {
            setTest(e.target.id);
            const selectTag = document.getElementById(e.target.id);

            console.log(selectTag);

            if(e.target.id == '전체1'){
                document.getElementById('전체1').classList.remove('prevStyle');
                document.getElementById('전체1').classList.add('currentStyle');

                for(let i = 0; i < platformList.length; i++){
                    document.getElementById(platformList[i]).classList.remove('currentStyle');
                    document.getElementById(platformList[i]).classList.add('prevStyle');
                }

                setPlatformList([]);
                filterData.length = 0;

                if(categoryList.length > 0){
                    addSearchFilter({platformList, categoryList}).then(data => {
                        const items = data.results[0];
                        setFilterData([items]);
                    });
                }

            } else {
                filterData.length = 0;
                document.getElementById('전체1').classList.remove('currentStyle');
                document.getElementById('전체1').classList.add('prevStyle');

                if(selectTag.className === 'prevStyle'){
                    selectTag.classList.remove('prevStyle');
                    selectTag.classList.add('currentStyle');
                    platformList.push((e.target.id).replace('1', ''));

                    for(let i = 0; i < platformList.length; i++){
                        console.log((platformList[i]).replace('1', ''));
                        if(result.filter((item) => item.platform === (platformList[i]).replace('1', '')).length > 0){
                            // setFilterData(...filterData, [result.filter((item) => item.platform === platformList[i])]);
                            filterData.push(result.filter((item) => item.platform === (platformList[i]).replace('1', '')));
                        }
                    }

                } else if(selectTag.className === 'currentStyle') {
                    setTest(e.target.id);
                    selectTag.classList.remove('currentStyle');
                    selectTag.classList.add('prevStyle');

                    for(let i = 0; i < platformList.length; i++){
                        if(platformList[i] === (e.target.id).replace('1', '')){
                            platformList.splice(i, 1);
                            i--;
                        }
                    }

                    for(let i = 0; i < platformList.length; i++){
                        console.log(platformList[i]);
                        if(result.filter((item) => item.platform === platformList[i]).length > 0){
                            // setFilterData(...filterData, [result.filter((item) => item.platform === platformList[i])]);
                            
                            if(filterData.length > 0){
                                setFilterData([result.filter((item) => item.platform === (platformList[i]).replace('1', ''))]);
                            } else {
                                filterData.push(result.filter((item) => item.platform === (platformList[i]).replace('1', '')));
                            }
                        }
                    }

                    if(platformList.length === 0){
                        setPlatformList([]);
                        filterData.length = 0;
                        document.getElementById('전체1').classList.remove('prevStyle');
                        document.getElementById('전체1').classList.add('currentStyle');
                    }

                }

                if(categoryList.length > 0){
                    addSearchFilter({platformList, categoryList}).then(data => {
                        const items = data.results[0];
                        setFilterData([items]);
                    });
                }
                
            }
            const ott = ['NETFLIX1', 'Disney+1', '왓챠1', '웨이브1', '티빙1', '쿠팡플레이1', '프라임 비디오1', '애플TV1'];
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
            if(e.target.id == '여자1' || e.target.id == '남자1'){
                alert('준비중입니다!');
            } else {
                if(selectTag.className === 'prevStyle'){
                    selectTag.classList.remove('prevStyle');
                    selectTag.classList.add('currentStyle');
                    categoryList.push((e.target.id).replace('1', ''));
    
                    document.getElementById('cateLi').classList.remove('hidden');
                    document.getElementById('cateLi').classList.add('flex');
    
                } else if(selectTag.className === 'currentStyle') {
                    selectTag.classList.remove('currentStyle');
                    selectTag.classList.add('prevStyle');
    
                    document.getElementById('cateLi').classList.remove('hidden');
                    document.getElementById('cateLi').classList.add('flex');
    
                    for(let i = 0; i < categoryList.length; i++){
                        if(categoryList[i] === (e.target.id).replace('1', '')){
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
    
                addSearchFilter({platformList, categoryList}).then(data => {
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
            /* category 선택 버튼 모두 원 상태로 복귀 */
            for(let i = 0; i < categoryList.length; i++){
                document.getElementById(categoryList[i] + '1').classList.remove('currentStyle');
                document.getElementById(categoryList[i] + '1').classList.add('prevStyle');
            }
            for(let i = 0; i < platformList.length; i++){
                console.log(platformList[i] + '1');
                document.getElementById(platformList[i] + '1').classList.remove('currentStyle');
                document.getElementById(platformList[i] + '1').classList.add('prevStyle');
            }
            
            document.getElementById('전체1').classList.remove('prevStyle');
            document.getElementById('전체1').classList.add('currentStyle');
            document.getElementById('크리에이터 성별sub').classList.remove('flex');
            document.getElementById('크리에이터 성별sub').classList.add('hidden');

            setPlatformList([]);
            setCategoryList([]);
            setFilterData([]);

            const subList = ['플랫폼sub', '인기sub', '게임sub', '스포츠sub', '취미sub', '엔터테인먼트sub', '일상sub', '리뷰sub', '크리에이터 성별sub'];
            for(let i = 0; i < subList.length; i++){
                document.getElementById(subList[i]).className = 'w-full border-t border-b mt-2 hidden';
            }
        }

        const displayBlock = (e) => {
            const targetTag = document.getElementById(e.target.id);
            const targetSub = document.getElementById(e.target.id+'sub');
            console.log(targetSub);
            const subList = ['플랫폼sub', '인기sub', '게임sub', '스포츠sub', '취미sub', '엔터테인먼트sub', '일상sub', '리뷰sub', '크리에이터 성별sub'];

            if(!(targetTag.className.includes('on'))){
                targetTag.classList.add('on');
                targetSub.className = 'w-full border-t border-b mt-2';

                for(let i = 0; i < subList.length; i++){
                    if(subList[i] != e.target.id+'sub'){
                        document.getElementById(subList[i]).className = 'w-full border-t border-b mt-2 hidden';
                    }
                }
            } else {
                targetTag.classList.remove('on');
                targetSub.className = 'w-full border-t border-b mt-2 hidden';
            }

        }
        
        return(
            <>
                <div className="flex overflow-auto justify-start" id='categoryScroll'>
                    <div className="flex text-center justify-start">
                        <div className="relative flex items-center min-w-[70px] h-[35px] ml-3" onClick={reset}>
                            <div className="flex items-center ">
                                <Image 
                                src="/image/etc/reset.png"
                                alt="logo"
                                width={15}
                                height={15}
                                ></Image>
                            </div>
                            <p className="flex cursor-pointer text-sm">초기화</p>
                        </div>
                        <div className="relative min-w-[110px] h-[35px] border border-slate-400 text-slate-400 px-4 py-1 mx-1 rounded-lg cursor-pointer" id="플랫폼" onClick={displayBlock}>
                            플랫폼
                        </div>
                        <div className="relative min-w-[110px] h-[35px] border border-slate-400 text-slate-400 px-4 py-1 mx-1 rounded-lg cursor-pointer" id="인기" onClick={displayBlock}>
                            인기
                        </div>
                        <div className="relative min-w-[110px] h-[35px] border border-slate-400 text-slate-400 px-4 py-1 mx-1 rounded-lg cursor-pointer" id="게임" onClick={displayBlock}>
                            게임
                        </div>
                        <div className="relative min-w-[110px] h-[35px] border border-slate-400 text-slate-400 px-4 py-1 mx-1 rounded-lg cursor-pointer" id="스포츠" onClick={displayBlock}>
                            스포츠
                        </div>
                        <div className="relative min-w-[110px] h-[35px] border border-slate-400 text-slate-400 px-4 py-1 mx-1 rounded-lg cursor-pointer" id="취미" onClick={displayBlock}>
                            취미
                        </div>
                        <div className="relative min-w-[130px] h-[35px] border border-slate-400 text-slate-400 px-4 py-1 mx-1 rounded-lg cursor-pointer" id="엔터테인먼트" onClick={displayBlock}>
                            엔터테인먼트
                        </div>
                        <div className="relative min-w-[110px] h-[35px] border border-slate-400 text-slate-400 px-4 py-1 mx-1 rounded-lg cursor-pointer" id="일상" onClick={displayBlock}>
                            일상
                        </div>
                        <div className="relative min-w-[110px] h-[35px] border border-slate-400 text-slate-400 px-4 py-1 mx-1 rounded-lg cursor-pointer" id="리뷰" onClick={displayBlock}>
                            리뷰
                        </div>
                        <div className="relative min-w-[140px] h-[35px] border border-slate-400 text-slate-400 px-4 py-1 mx-1 mr-5 rounded-lg cursor-pointer" id="크리에이터 성별" onClick={displayBlock}>
                            크리에이터 성별
                        </div>
                    </div>
                </div>
            <div className="w-full border-t border-b mt-2 hidden" id="플랫폼sub">
                <ul className="flex justify-center flex-wrap p-2 pt-4">
                    <li className="currentStyle" onClick={platformClick} id="전체1" value="0">전체</li>
                    <li className="prevStyle" onClick={platformClick} id="Youtube1" value="1">Youtube</li>
                    <li className="prevStyle" onClick={platformClick} id="Twitch1" value="2">Twitch</li>
                    <li className="prevStyle" onClick={platformClick} id="afreecaTV1" value="3">afreecaTV</li>
                </ul>
                <ul className="flex justify-center flex-wrap p-2">
                    <li className="prevStyle" onClick={platformClick} id="Shorts1" value="4">Shorts</li>
                    <li className="prevStyle" onClick={platformClick} id="TikTok1" value="5">TikTok</li>
                    <li className="prevStyle" onClick={platformClick} id="Instagram1" value="6">Instagram</li>
                    <li className="prevStyle" onClick={platformClick} id="kakaoTV1" value="7">kakaoTV</li>
                </ul>
                <ul className="flex justify-center flex-wrap p-2 pb-4">
                    <li className="prevStyle" onClick={platformClick} id="NETFLIX1" value="8">NETFLIX</li>
                    <li className="prevStyle" onClick={platformClick} id="Disney+1" value="9">Disney+</li>
                    <li className="prevStyle" onClick={platformClick} id="왓챠1" value="10">왓챠</li>
                    <li className="prevStyle" onClick={platformClick} id="웨이브1" value="11">웨이브</li>
                    <li className="prevStyle" onClick={platformClick} id="티빙1" value="12">티빙</li>
                    <li className="prevStyle" onClick={platformClick} id="쿠팡플레이1" value="13">쿠팡플레이</li>
                    <li className="prevStyle" onClick={platformClick} id="프라임 비디오1" value="14">프라임 비디오</li>
                    <li className="prevStyle" onClick={platformClick} id="애플TV1" value="15">애플TV</li>
                </ul>
            </div>

            <div className="w-full border-t border-b mt-2 hidden" id="인기sub">
                <ul className="flex justify-center p-2 py-4">
                    <li className="prevStyle" onClick={categoryClick} id="인기1" value="20">인기</li>
                </ul>
            </div>
            <div className="w-full border-t border-b mt-2 hidden" id="게임sub">
                <ul className="flex justify-center flex-wrap p-2 py-4">
                    <li className="prevStyle" onClick={categoryClick} id="League of Legends1" value="21">League of Legends</li>
                    <li className="prevStyle" onClick={categoryClick} id="배그1" value="22">배그</li>
                    <li className="prevStyle" onClick={categoryClick} id="스타크래프트1" value="23">스타크래프트</li>
                    <li className="prevStyle" onClick={categoryClick} id="오버워치1" value="24">오버워치</li>
                    <li className="prevStyle" onClick={categoryClick} id="피파1" value="25">피파</li>
                    <li className="prevStyle" onClick={categoryClick} id="리니지1" value="26">리니지</li>
                    <li className="prevStyle" onClick={categoryClick} id="카트라이더1" value="27">카트라이더</li>
                    <li className="prevStyle" onClick={categoryClick} id="바람의나라1" value="28">바람의나라</li>
                    <li className="prevStyle" onClick={categoryClick} id="메이플스토리1" value="29">메이플스토리</li>
                    <li className="prevStyle" onClick={categoryClick} id="패키지게임1" value="30">패키지게임</li>
                    <li className="prevStyle" onClick={categoryClick} id="서든어택1" value="31">서든어택</li>
                    <li className="prevStyle" onClick={categoryClick} id="모바일1" value="32">모바일</li>
                    <li className="prevStyle" onClick={categoryClick} id="기타1" value="33">기타</li>
                </ul>
            </div>
            <div className="w-full border-t border-b mt-2 hidden" id="스포츠sub">
                <ul className="flex justify-center flex-wrap p-2 py-4">
                    <li className="prevStyle" onClick={categoryClick} id="피트니스1" value="50">피트니스</li>
                    <li className="prevStyle" onClick={categoryClick} id="축구1" value="51">축구</li>
                    <li className="prevStyle" onClick={categoryClick} id="농구1" value="52">농구</li>
                    <li className="prevStyle" onClick={categoryClick} id="야구1" value="53">야구</li>
                    <li className="prevStyle" onClick={categoryClick} id="요가1" value="54">요가</li>
                    <li className="prevStyle" onClick={categoryClick} id="홈트1" value="55">홈트</li>
                </ul>
            </div>
            <div className="w-full border-t border-b mt-2 hidden" id="취미sub">
                <ul className="flex justify-center flex-wrap p-2 py-4">
                    <li className="prevStyle" onClick={categoryClick} id="패션1" value="70">패션</li>
                    <li className="prevStyle" onClick={categoryClick} id="요리1" value="71">요리</li>
                    <li className="prevStyle" onClick={categoryClick} id="산악/등산1" value="72">산악/등산</li>
                    <li className="prevStyle" onClick={categoryClick} id="자전거1" value="73">자전거</li>
                    <li className="prevStyle" onClick={categoryClick} id="자동차1" value="74">자동차</li>
                    <li className="prevStyle" onClick={categoryClick} id="오토바이1" value="75">오토바이</li>
                    <li className="prevStyle" onClick={categoryClick} id="만들기1" value="76">만들기</li>
                    <li className="prevStyle" onClick={categoryClick} id="공방1" value="77">공방</li>
                    <li className="prevStyle" onClick={categoryClick} id="IT/과학1" value="78">IT/과학</li>
                </ul>
            </div>
            <div className="w-full border-t border-b mt-2 hidden" id="엔터테인먼트sub">
                <ul className="flex justify-center flex-wrap p-2 py-4">
                    <li className="prevStyle" onClick={categoryClick} id="공식채널1" value="90">공식채널</li>
                    <li className="prevStyle" onClick={categoryClick} id="코미디1" value="91">코미디</li>
                    <li className="prevStyle" onClick={categoryClick} id="음악1" value="92">음악</li>
                    <li className="prevStyle" onClick={categoryClick} id="춤1" value="93">춤</li>
                    <li className="prevStyle" onClick={categoryClick} id="만화/애니1" value="94">만화/애니</li>
                    <li className="prevStyle" onClick={categoryClick} id="먹방1" value="95">먹방</li>
                    <li className="prevStyle" onClick={categoryClick} id="크리에이터1" value="96">크리에이터</li>
                    <li className="prevStyle" onClick={categoryClick} id="메이크업1" value="97">메이크업</li>
                    <li className="prevStyle" onClick={categoryClick} id="짤/숏1" value="98">짤/숏</li>
                    <li className="prevStyle" onClick={categoryClick} id="키즈1" value="99">키즈</li>
                    <li className="prevStyle" onClick={categoryClick} id="연예인1" value="100">연예인</li>
                    <li className="prevStyle" onClick={categoryClick} id="국내↔해외1" value="101">국내↔해외</li>
                    <li className="prevStyle" onClick={categoryClick} id="관찰1" value="102">관찰</li>
                </ul>
            </div>
            <div className="w-full border-t border-b mt-2 hidden" id="일상sub">
                <ul className="flex justify-center flex-wrap p-2 py-4">
                    <li className="prevStyle" onClick={categoryClick} id="브이로그1" value="120">브이로그</li>
                    <li className="prevStyle" onClick={categoryClick} id="동물1" value="121">동물</li>
                    <li className="prevStyle" onClick={categoryClick} id="커플/연인1" value="122">커플/연인</li>
                    <li className="prevStyle" onClick={categoryClick} id="겟레디윗미1" value="123">겟레디윗미</li>
                    <li className="prevStyle" onClick={categoryClick} id="학습/공부1" value="124">학습/공부</li>
                </ul>
            </div>
            <div className="w-full border-t border-b mt-2 hidden" id="리뷰sub">
                <ul className="flex justify-center flex-wrap p-2 py-4">
                    <li className="prevStyle" onClick={categoryClick} id="영화1" value="140">영화</li>
                    <li className="prevStyle" onClick={categoryClick} id="드라마1" value="141">드라마</li>
                    <li className="prevStyle" onClick={categoryClick} id="전자기기1" value="142">전자기기</li>
                    <li className="prevStyle" onClick={categoryClick} id="화장품1" value="143">화장품</li>
                    <li className="prevStyle" onClick={categoryClick} id="자동차1" value="144">자동차</li>
                    <li className="prevStyle" onClick={categoryClick} id="의류1" value="145">의류</li>
                </ul>
            </div>
            <div className="w-full border-t border-b mt-2 hidden" id="크리에이터 성별sub">
                <ul className="flex justify-center flex-wrap p-2 py-4">
                    <li className="prevStyle" onClick={categoryClick} id="남자1" value="160">남자</li>
                    <li className="prevStyle" onClick={categoryClick} id="여자1" value="161">여자</li>
                </ul>
            </div>

            {/* 결과 재검색 */}
            <div className="flex justify-center mt-7">
                <div className="w-[80%] md:w-[50%]">
                    <Research></Research>
                </div>
            </div>

            {/* 비디오광고 */}
            <div className="relative flex justify-center py-7">
                <VideoAd></VideoAd>
            </div>

            <div className="relative flex justify-center">
                {
                   platformList.length > 0 || filterData.length > 0 ? <ResultList filterData={filterData} /> : <ResultList result={result} />
                }
            </div>
            </>
        )
    } else {
        return('');
    }
}

export async function addSearchFilter({platformList, categoryList}) {

    console.log('함수 실행 확인!');
    console.log(platformList);
    console.log(categoryList);

    const filterResult = [];
    const twitchIds = [];
    const videoId = [];
    const result = [];
    const results = [];

    console.log('플랫폼 확인 : ' + platformList.includes('Youtube'));
    console.log('플랫폼 확인 : ' + platformList.includes('Twitch'));

    if(platformList.length === 0 || platformList.includes('Youtube')){
        for(let i = 0; i < categoryList.length; i++){
            if(categoryList[i] === '인기'){
                await fetch(
                    "https://www.googleapis.com/youtube/v3/videos?key=AIzaSyAvAXu6DTBlvCfY2qFTC6nb1hMEhcX1S_c&part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=kr"
                    // "https://www.googleapis.com/youtube/v3/videos?key=AIzaSyBLizbrwv_ltQLAD0Y4ovNP9HR1855hj18&part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=kr"
                )
                .then((response) => response.json())
                .then((data) => {
                    let items = data.items;
        
                    if (items) {
                        for (let i = 0; i < items.length; i++) {
                            result.push({
                                id: items[i].id, //영상 아이디
                                title: items[i].snippet.title, //영상 제목
                                channel: items[i].snippet.channelTitle, //채널명
                                url: items[i].snippet.thumbnails.medium.url, //썸네일 경로
                                date: items[i].snippet.publishedAt, //업로드 시간
                                tags: items[i].snippet.tags, //영상에 등록된 태그
                                platform: "Youtube", //플랫폼 종류
                            });
                        }
                    }
                });
            } else {
                await fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&key=AIzaSyAvAXu6DTBlvCfY2qFTC6nb1hMEhcX1S_c&q=" + categoryList[i])
                // await fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&key=AIzaSyBLizbrwv_ltQLAD0Y4ovNP9HR1855hj18&q=" + categoryList[i])
                // await fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&type=video&key=AIzaSyC11utgqze7bXLRbzE-xsG2KJCg8euCD18&q=" + categoryList[i])
                .then((response) => response.json())
                .then((data) => {
                    if(data.items != undefined){
                        let items = data.items;
                
                        for(let i = 0; i < items.length; i++){
                            videoId.push({id: items[i].id.videoId});
                        }
                    }
                });
            }
        }
    
        for(let i = 0 ; i < videoId.length; i++){
            await fetch("https://www.googleapis.com/youtube/v3/videos?key=AIzaSyAvAXu6DTBlvCfY2qFTC6nb1hMEhcX1S_c&part=snippet&id=" + videoId[i].id)
            // await fetch("https://www.googleapis.com/youtube/v3/videos?key=AIzaSyBLizbrwv_ltQLAD0Y4ovNP9HR1855hj18&part=snippet&id=" + videoId[i].id)
            // await fetch("https://www.googleapis.com/youtube/v3/videos?key=AIzaSyC11utgqze7bXLRbzE-xsG2KJCg8euCD18&part=snippet&id=" + videoId[i].id)
            .then((response) => response.json())
            .then((data) => {
                let items = data.items;
                let temp = ['', '', '']
    
                if(items[0].snippet.tags == undefined){
                    result.push({id: items[0].id, url: items[0].snippet.thumbnails.medium.url, title: items[0].snippet.title, channel: items[0].snippet.channelTitle, date: items[0].snippet.publishedAt, tags: temp, platform: 'Youtube'});
                } else {
                    result.push({id: items[0].id, url: items[0].snippet.thumbnails.medium.url, title: items[0].snippet.title, channel: items[0].snippet.channelTitle, date: items[0].snippet.publishedAt, tags: items[0].snippet.tags, platform: 'Youtube'});
                }
            });
        }

        results.push(result);
        console.log('youtube result : ', results);
    }


    if(platformList.length === 0 || platformList.includes('Twitch')){
        /* Twitch */
        for(let i = 0; i < categoryList.length; i++){
            if(categoryList[i] === '인기'){
                await fetch("https://api.twitch.tv/helix/streams?language=ko&first=9", {
                    method: "get",
                    headers: {
                        Authorization: "Bearer oimn0lk86ydwcxvqacucwhzfkq8hjo",
                        "Client-Id": "g901hktaiu6c4v5dt4vkjoptq5vjtk",
                    },
                })
                .then((response) => response.json())
                .then((data) => {
                    let items = data.data;
        
                    if (items) {
                        for (let i = 0; i < items.length; i++) {
                            result.push({id: items[i].id, url: items[i].thumbnail_url.replace('{width}x{height}', '350x200'), title: items[i].title, channel: items[i].user_name, date: items[i].started_at, link: items[i].user_login, platform: 'Twitch'});
                        }
                    }
                });
            } else {
                await fetch("https://api.twitch.tv/helix/search/categories?query=" + categoryList[i], {
                    method: 'get',
                    headers: {
                        'Authorization':'Bearer 09z7q6lphf4nrmu5rjfihquov5orow',
                        'Client-Id':'g901hktaiu6c4v5dt4vkjoptq5vjtk'
                    }
                })
                .then((response) => response.json())
                .then((data) => {
                    if(data.data != undefined){
                        let items = data.data;
                        for(let i = 0; i < items.length; i++){
                            twitchIds.push({id: items[i].id});
                        }
                    }
                });
            }
        }
        
        if(twitchIds.length < 1){
            for(let i = 0; i < categoryList.length; i++){
                await fetch("https://api.twitch.tv/helix/search/channels?query=" + categoryList[i], {
                method: 'get',
                headers: {
                    'Authorization':'Bearer 09z7q6lphf4nrmu5rjfihquov5orow',
                    'Client-Id':'g901hktaiu6c4v5dt4vkjoptq5vjtk'
                }
                })
                .then((response) => response.json())
                .then((data) => {
                    if(data.data != undefined){
                        let items = data.data;
            
                        for(let i = 0; i < items.length; i++){
                            if(items[i].game_id > 0){
                                twitchIds.push({id: items[i].game_id});
                            }
                        }
                    }
                });
            }
        }
    
        for(let i = 0; i < twitchIds.length; i++){
            await fetch("https://api.twitch.tv/helix/streams?language=ko&first=5&game_id=" + twitchIds[i].id, {
                method: 'get',
                headers: {
                    'Authorization':'Bearer 09z7q6lphf4nrmu5rjfihquov5orow',
                    'Client-Id':'g901hktaiu6c4v5dt4vkjoptq5vjtk'
                }
            })
            .then((response) => response.json())
            .then((data) => {
                let items = data.data;
                
                for(let i = 0; i < items.length; i++){
                    result.push({id: items[i].id, url: items[i].thumbnail_url.replace('{width}x{height}', '350x200'), title: items[i].title, channel: items[i].user_name, date: items[i].started_at, link: items[i].user_login, platform: 'Twitch'});
                }
            });
        }
    
        results.push([...new Set(result.map(JSON.stringify))].map(JSON.parse));

        console.log('twitch result : ', results);

    }

    return {results};
}