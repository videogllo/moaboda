import React, { useState } from "react";

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
                    // "https://www.googleapis.com/youtube/v3/videos?key=AIzaSyAvAXu6DTBlvCfY2qFTC6nb1hMEhcX1S_c&part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=kr"
                    "https://www.googleapis.com/youtube/v3/videos?key=AIzaSyBLizbrwv_ltQLAD0Y4ovNP9HR1855hj18&part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=kr"
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
                // await fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&key=AIzaSyAvAXu6DTBlvCfY2qFTC6nb1hMEhcX1S_c&q=" + categoryList[i])
                // await fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&key=AIzaSyBLizbrwv_ltQLAD0Y4ovNP9HR1855hj18&q=" + categoryList[i])
                await fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&type=video&key=AIzaSyC11utgqze7bXLRbzE-xsG2KJCg8euCD18&q=" + categoryList[i])
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
            // await fetch("https://www.googleapis.com/youtube/v3/videos?key=AIzaSyAvAXu6DTBlvCfY2qFTC6nb1hMEhcX1S_c&part=snippet&id=" + videoId[i].id)
            // await fetch("https://www.googleapis.com/youtube/v3/videos?key=AIzaSyBLizbrwv_ltQLAD0Y4ovNP9HR1855hj18&part=snippet&id=" + videoId[i].id)
            await fetch("https://www.googleapis.com/youtube/v3/videos?key=AIzaSyC11utgqze7bXLRbzE-xsG2KJCg8euCD18&part=snippet&id=" + videoId[i].id)
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


// const [test, setTest] = useState();
// const [filterData, setFilterData] = useState([]);

// const [platformList, setPlatformList] = useState([]);
// const [categoryList, setCategoryList] = useState([]);

export const platformClick = (e) => {
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
            addSearchFilter({platformList, categoryList}).then(data => {
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
                    
                    if(filterData.length > 0){
                        setFilterData([result.filter((item) => item.platform === platformList[i])]);
                    } else {
                        filterData.push(result.filter((item) => item.platform === platformList[i]));
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
    const ott = ['NETFLIX', 'Disney+', '왓챠', '웨이브', '티빙', '쿠팡플레이', '프라임 비디오', '애플TV'];
    if(platformList.map((item) => ott.includes(item)).includes(true)){
        document.getElementById('genderDiv').classList.remove('flex')
        document.getElementById('genderDiv').classList.add('hidden')
    } else {
        document.getElementById('genderDiv').classList.remove('hidden')
        document.getElementById('genderDiv').classList.add('flex')
    }
    
}

export const categoryClick = (e) => {
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

export const reset = (e) => {
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