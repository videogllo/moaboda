const axios = require("axios");

export default async function handler(req, res) {
    let result = []; //최종 리턴할 데이터
    let youtube = [];
    let twitch = [];

    //youtube
    await axios({
        method: "GET",
        // url: "https://www.googleapis.com/youtube/v3/search",
        params: {
            part: "snippet",
            maxResults: 5, //기본5개 최대50개
            type: "video",
            // key: "AIzaSyAvAXu6DTBlvCfY2qFTC6nb1hMEhcX1S_c", //api key
            key:"AIzaSyBLizbrwv_ltQLAD0Y4ovNP9HR1855hj18", //api key2
            q: req.query.q, //사용자 검색어
        },
    })
        .then((res) => {
            // let items = res.data.items;

            // for (let i = 0; i < res.data.items.length; i++) {
            //     youtube.push({
            //         id: items[i].id.videoId, //영상 아이디
            //         title: items[i].snippet.title, //영상 제목
            //         href:
            //             "https://www.youtube.com/watch?v=" +
            //             items[i].id.videoId, //영상 주소
            //         imgUrl: items[i].snippet.thumbnails.high.url, //썸네일 경로
            //         // tag: items[i].snippet.tags.push("Youtube"),
            //     });
            // }
        })
        .catch((e) => {
            youtube.push(
                {
                    id: 1,
                    title: "태그가 리그오브레전드인 유튜브 동영상",
                    href: "www.naver.com",
                    imgUrl: "http://localhost:3000/_next/image?url=%2Fimage%2Fbanner%2FmainBanner2.jpg&w=1920&q=75",
                    tag: ["Youtube", "리그오브레전드"],
                },
                {
                    id: 2,
                    title: "태그가 배틀그라운드인 유튜브 동영상",
                    href: "www.naver.com",
                    imgUrl: "http://localhost:3000/_next/image?url=%2Fimage%2Fbanner%2FmainBanner1.jpg&w=1920&q=75",
                    tag: ["Youtube", "배틀그라운드"],
                },
                // {
                //     id: 3,
                //     title: "태그가 축구인 유튜브 동영상",
                //     href: "www.naver.com",
                //     imgUrl: "http://localhost:3000/_next/image?url=%2Fimage%2Fbanner%2FmainBanner1.jpg&w=1920&q=75",
                //     tag: ["Youtube", "축구"],
                // },
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
            // let items = res.data.items;

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
                    id: 4,
                    title: "태그가 골프, 아이스하키인 트위치 동영상",
                    href: "www.naver.com",
                    imgUrl: "http://localhost:3000/_next/image?url=%2Fimage%2Fbanner%2FmainBanner3.png&w=1920&q=75",
                    tag: ["Twitch", "골프", "아이스하키"],
                },
                {
                    id: 5,
                    title: "태그가 축구, 배틀그라운드인 트위치 동영상",
                    href: "www.naver.com",
                    imgUrl: "http://localhost:3000/_next/image?url=%2Fimage%2Fbanner%2FmainBanner4.png&w=1920&q=75",
                    tag: ["Twitch", "축구", "배틀그라운드"],
                },
                // {
                //     id: 6,
                //     title: "태그가 골프, 엘든링인 트위치 동영상",
                //     href: "www.naver.com",
                //     imgUrl: "http://localhost:3000/_next/image?url=%2Fimage%2Fbanner%2FmainBanner4.png&w=1920&q=75",
                //     tag: ["Twitch", "골프", "엘든링"],
                // },
            );
        });

    result.push({ type: "Youtube", data: [youtube] });
    result.push({ type: "Twitch", data: [twitch] });

    // console.log("server : ", result)

    res.send(result); //client로 전달
}
