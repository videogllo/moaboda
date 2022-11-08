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
                    href: "https:www.naver.com",
                    imgUrl: "https://d2mgzmtdeipcjp.cloudfront.net/files/good_contents/2019/10/31/15724901350317.png",
                    tag: ["Youtube", "리그오브레전드"],
                },
                {
                    id: 2,
                    title: "태그가 배틀그라운드인 유튜브 동영상",
                    href: "https://www.naver.com",
                    imgUrl: "https://d2mgzmtdeipcjp.cloudfront.net/files/good_contents/2019/11/19/15741567197900.png",
                    tag: ["Youtube", "배틀그라운드"],
                },
                {
                    id: 3,
                    title: "태그가 축구인 유튜브 동영상",
                    href: "https://www.naver.com",
                    imgUrl: "https://post-phinf.pstatic.net/MjAxOTExMjJfMTAg/MDAxNTc0NDE3MTcyODE5.zZt8fGOZj6H9RTe3uoayEoTNPX8EKYCnbAwu_eiHx6cg.IuleD8-Wf9yqzHB58miRwvGebRXIvgB9zn4XCbYVeSwg.PNG/15724994848040.png?type=w1200",
                    tag: ["Youtube", "축구"],
                },
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
                    href: "https://www.naver.com",
                    imgUrl: "https://post-phinf.pstatic.net/MjAxOTExMjJfMjYx/MDAxNTc0NDE3MTcwNDc0.4tafZzzWpByV5UPSAYWftGeaJP0kL_7u_JnFjbl7rgcg.hn7udrF568oZQXSK-QmY0I96lP7N0b6XVuwhIWlHBssg.PNG/15724913295425.png?type=w1200",
                    tag: ["Twitch", "골프", "아이스하키"],
                },
                {
                    id: 5,
                    title: "태그가 축구, 배틀그라운드인 트위치 동영상",
                    href: "https://www.naver.com",
                    imgUrl: "https://post-phinf.pstatic.net/MjAxOTExMjJfMjc3/MDAxNTc0NDE3MTgxOTQ5.9oQaK-P3ePKJWgszOU0PIkBgjKbJR8xeMLqbkjaW_tsg.beUsZLV8EUhUjUeCfDjysGRW96imBC5iN-lGi3iJEv8g.PNG/15724913296905.png?type=w1200",
                    tag: ["Twitch", "축구", "배틀그라운드"],
                },
                {
                    id: 6,
                    title: "태그가 골프, 엘든링인 트위치 동영상",
                    href: "https://www.naver.com",
                    imgUrl: "https://post-phinf.pstatic.net/MjAxOTExMjJfMTMz/MDAxNTc0NDE3MjEzNTQw.sdFPr1APJoDJ0OHAu_KTfWzw2zBg4U1g5VE6rUz-ra4g.b4gk0INcEjg9r21Q1gtGiyD51x1NPWdFMxB27jJGsoQg.PNG/15741558624930.png?type=w1200",
                    tag: ["Twitch", "골프", "엘든링"],
                },
            );
        });

    result.push({ type: "Youtube", data: [youtube] });
    result.push({ type: "Twitch", data: [twitch] });

    // console.log("server : ", result)

    res.send(result); //client로 전달
}
