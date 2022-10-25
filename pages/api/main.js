export default async function handler(req, res) {
    let results = [];

    await fetch(
        "https://www.googleapis.com/youtube/v3/videos?key=AIzaSyBLizbrwv_ltQLAD0Y4ovNP9HR1855hj18&part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=kr&maxResults=10"
    )
        .then((response) => response.json())
        .then((data) => {
            let items = data.items;

            if (items) {
                for (let i = 0; i < items.length; i++) {
                    results.push({
                        id: items[i].id, //영상 아이디
                        href: "https://www.youtube.com/watch?v=" + items[i].id, //영상 주소
                        type: "Youtube", //플랫폼 종류
                        type2: "Static", //실시간 스트리밍 유무
                        title: items[i].snippet.title, //영상 제목
                        channelName: items[i].snippet.channelTitle, //채널명
                        uploadDate: items[i].snippet.publishedAt, //업로드 시간
                        imgUrl: items[i].snippet.thumbnails.medium.url, //썸네일 경로
                        tag: items[i].snippet.tags, //영상에 등록된 태그
                        playTime: items[i].contentDetails.duration, //재생시간
                        viewCount: items[i].statistics.viewCount, //총 재생수
                        hit: items[i].statistics.viewCount, //videoowl의 인기도 점수
                    });
                }
            }
        });

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
                    results.push({
                        id: items[i].id, //영상 아이디
                        type: "Twitch", //플랫폼 종류
                        type2: "Live", //실시간 스트리밍 유무
                        title: items[i].title, //영상 제목
                        imgUrl: items[i].thumbnail_url.replace(
                            "{width}x{height}",
                            "640x480"
                        ), //썸네일 경로
                        channelName: items[i].user_name, //채널명
                        viewerCount: items[i].viewer_count, //시청자 수 (라이브 영상만 해당)
                        startTime: items[i].started_at, //라이브 시작 시간 (라이브 영상만 해당)
                        tag: items[i].tag_ids, //영상에 등록된 태그(트위치는 정의된 태그가 없어서 현재 의미x => 서칭해봐야됨)
                        hit: items[i].viewer_count, //videoowl의 인기도 점수
                    });
                }
            }
        });

    console.log(results);

    res.send({ result: results });
}
