const axios = require("axios");

export default async function handler(req, res) {
    let result = []; //최종 리턴할 데이터
    let youtube = [];
    let twitch = [];

    //youtube
    await axios({
        method: "GET",
        url: "https://www.googleapis.com/youtube/v3/search",
        params: {
            part: "snippet",
            maxResults: 5, //기본5개 최대50개
            type: "video",
            key: "AIzaSyAvAXu6DTBlvCfY2qFTC6nb1hMEhcX1S_c", //api key
            // key:"AIzaSyBLizbrwv_ltQLAD0Y4ovNP9HR1855hj18", //api key2
            q: req.query.q, //사용자 검색어
        },
    })
        .then((res) => {
            let items = res.data.items;

            for (let i = 0; i < res.data.items.length; i++) {
                youtube.push({
                    id: items[i].id.videoId, //영상 아이디
                    title: items[i].snippet.title, //영상 제목
                    href:
                        "https://www.youtube.com/watch?v=" +
                        items[i].id.videoId, //영상 주소
                    imgUrl: items[i].snippet.thumbnails.high.url, //썸네일 경로
                });
            }
        })
        .catch((e) => {
            // console.log(e);
            youtube.push(
                {
                    id: 1,
                    title: "태그가 리그오브레전드인 유튜브 동영상",
                    href: "www.naver.com",
                    imgUrl: "http://localhost:3000/_next/image?url=%2Fimage%2Fbanner%2FmainBanner2.jpg&w=1920&q=75",
                    tag: ["Youtube", "리그오브레전드"],
                    // tag: ["리그오브레전드"],
                    type: "Youtube",
                },
                {
                    id: 2,
                    title: "태그가 배틀그라운드인 유튜브 동영상",
                    href: "www.naver.com",
                    imgUrl: "http://localhost:3000/_next/image?url=%2Fimage%2Fbanner%2FmainBanner1.jpg&w=1920&q=75",
                    tag: ["Youtube", "배틀그라운드"],
                    // tag: ["배틀그라운드"],
                    type: "Youtube",
                }
            );
        });

    //twitch
    await axios({
        method: "GET",
        url: "https://api.twitch.tv/helix/search/categories",
        headers: {
            Authorization: "Bearer 09z7q6lphf4nrmu5rjfihquov5orow",
            "Client-Id": "g901hktaiu6c4v5dt4vkjoptq5vjtk",
        },
        params: {
            q: req.query.q, //사용자 검색어
        },
    })
        .then((res) => {
            let items = res.data.items;

            // console.log("yogiyo : " , items)

            // for (let i = 0; i < res.data.items.length; i++) {
            //     twitch.push({
            //         id: items[i].id.videoId, //영상 아이디
            //         title: items[i].snippet.title, //영상 제목
            //         href:
            //             "https://www.youtube.com/watch?v=" +
            //             items[i].id.videoId, //영상 주소
            //         imgUrl: items[i].snippet.thumbnails.high.url, //썸네일 경로
            //     });
            // }
        })
        .catch((e) => {
            // console.log(e);
            twitch.push(
                {
                    id: 3,
                    title: "태그가 골프, 아이스하키인 트위치 동영상",
                    href: "www.naver.com",
                    imgUrl: "http://localhost:3000/_next/image?url=%2Fimage%2Fbanner%2FmainBanner3.png&w=1920&q=75",
                    tag: ["Twitch", "골프", "아이스하키"],
                    // tag: ["골프", "아이스하키"],
                    type: "Twitch",
                },
                {
                    id: 4,
                    title: "태그가 축구, 배틀그라운드인 트위치 동영상",
                    href: "www.naver.com",
                    imgUrl: "http://localhost:3000/_next/image?url=%2Fimage%2Fbanner%2FmainBanner4.png&w=1920&q=75",
                    tag: ["Twitch", "축구"],
                    // tag: ["축구", "배틀그라운드"],
                    type: "Twitch",
                }
            );
        });

    result.push({ type: "Youtube", data: [youtube] });
    result.push({ type: "Twitch", data: [twitch] });

    // console.log("server : ", result)

    res.send(result); //client로 전달

    // let result = [];
    // let results = [];
    // let videoId = [];
    // let twitchCateIds = [];

    // if((req.query.q).length > 0) {

    //     /* Youtube */
    //     // await fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&type=video&key=AIzaSyAvAXu6DTBlvCfY2qFTC6nb1hMEhcX1S_c&q=" + req.query.q)
    //     // await fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&type=video&key=AIzaSyBLizbrwv_ltQLAD0Y4ovNP9HR1855hj18&q=" + req.query.q)
    //     await fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&type=video&key=AIzaSyC11utgqze7bXLRbzE-xsG2KJCg8euCD18&q=" + req.query.q)
    //     .then((response) => response.json())
    //     .then((data) => {
    //         if(data.items != undefined){
    //             let items = data.items;

    //             for(let i = 0; i < items.length; i++){
    //                 videoId.push({id: items[i].id.videoId});
    //             }
    //         }
    //     });

    //     for(let i = 0 ; i < videoId.length; i++){
    //         // await fetch("https://www.googleapis.com/youtube/v3/videos?key=AIzaSyAvAXu6DTBlvCfY2qFTC6nb1hMEhcX1S_c&part=snippet&id=" + videoId[i].id)
    //         // await fetch("https://www.googleapis.com/youtube/v3/videos?key=AIzaSyBLizbrwv_ltQLAD0Y4ovNP9HR1855hj18&part=snippet&id=" + videoId[i].id)
    //         await fetch("https://www.googleapis.com/youtube/v3/videos?key=AIzaSyC11utgqze7bXLRbzE-xsG2KJCg8euCD18&part=snippet&id=" + videoId[i].id)
    //         .then((response) => response.json())
    //         .then((data) => {
    //             let items = data.items;
    //             let temp = ['', '', '']

    //             if(items[0].snippet.tags == undefined){
    //                 result.push({id: items[0].id, url: items[0].snippet.thumbnails.medium.url, title: items[0].snippet.title, channel: items[0].snippet.channelTitle, date: items[0].snippet.publishedAt, tags: temp, platform: 'Youtube'});
    //             } else {
    //                 result.push({id: items[0].id, url: items[0].snippet.thumbnails.medium.url, title: items[0].snippet.title, channel: items[0].snippet.channelTitle, date: items[0].snippet.publishedAt, tags: items[0].snippet.tags, platform: 'Youtube'});
    //             }
    //         });
    //     }

    //     /* Twitch */
    //     await fetch("https://api.twitch.tv/helix/search/categories?query=" + req.query.q, {
    //         method: 'get',
    //         headers: {
    //             'Authorization':'Bearer 09z7q6lphf4nrmu5rjfihquov5orow',
    //             'Client-Id':'g901hktaiu6c4v5dt4vkjoptq5vjtk'
    //         }
    //     })
    //     .then((response) => response.json())
    //     .then((data) => {
    //         if(data.data != undefined){
    //             let items = data.data;

    //             for(let i = 0; i < items.length; i++){
    //                 twitchCateIds.push({id: items[i].id});
    //             }
    //         }
    //     });

    //     if(twitchCateIds.length < 1){
    //         await fetch("https://api.twitch.tv/helix/search/channels?query=" + req.query.q, {
    //         method: 'get',
    //         headers: {
    //             'Authorization':'Bearer 09z7q6lphf4nrmu5rjfihquov5orow',
    //             'Client-Id':'g901hktaiu6c4v5dt4vkjoptq5vjtk'
    //         }
    //         })
    //         .then((response) => response.json())
    //         .then((data) => {
    //             if(data.data != undefined){
    //                 let items = data.data;

    //                 for(let i = 0; i < items.length; i++){
    //                     if(items[i].game_id > 0){
    //                         twitchCateIds.push({id: items[i].game_id});
    //                     }
    //                 }
    //             }
    //         });
    //     }

    //     for(let i = 0; i < twitchCateIds.length; i++){
    //         await fetch("https://api.twitch.tv/helix/streams?language=ko&first=5&game_id=" + twitchCateIds[i].id, {
    //             method: 'get',
    //             headers: {
    //                 'Authorization':'Bearer 09z7q6lphf4nrmu5rjfihquov5orow',
    //                 'Client-Id':'g901hktaiu6c4v5dt4vkjoptq5vjtk'
    //             }
    //         })
    //         .then((response) => response.json())
    //         .then((data) => {
    //             let items = data.data;

    //             for(let i = 0; i < items.length; i++){
    //                 result.push({id: items[i].id, url: items[i].thumbnail_url.replace('{width}x{height}', '350x200'), title: items[i].title, channel: items[i].user_name, date: items[i].started_at, link: items[i].user_login, platform: 'Twitch'});
    //             }
    //         });
    //     }

    //     results.push([...new Set(result.map(JSON.stringify))].map(JSON.parse));
    //     res.send({result: results });
    // }
}
