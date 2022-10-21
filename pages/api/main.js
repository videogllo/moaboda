export default async function handler(req, res){
    let results = [];

    await fetch('https://www.googleapis.com/youtube/v3/videos?key=AIzaSyBLizbrwv_ltQLAD0Y4ovNP9HR1855hj18&part=snippet&chart=mostPopular&regionCode=kr&maxResults=9')
    .then((response) => response.json())
    .then((data) => {
        let items = data.items;
        let youtube = [];

        /**
         * dongseob - 빈값 에러 분기 추가
         * channelId - 채널ID
         * thumbnails.크기.url - 썸네일의 크기와 url
         * title - 영상 제목
         */
        if(items){
            for(let i = 0; i < items.length; i++){
                youtube.push({id: items[i].snippet.channelId, url: items[i].snippet.thumbnails.standard.url, title: items[i].snippet.title});
            }
        }
        // console.log('main으로 보낼 최종 youtube 데이터! : ', youtube);
        results.push({youtube:youtube});
    });

    await fetch("https://api.twitch.tv/helix/streams?language=ko&first=9", {
        method: 'get',
        headers: {
            'Authorization':'Bearer oimn0lk86ydwcxvqacucwhzfkq8hjo',
            'Client-Id':'g901hktaiu6c4v5dt4vkjoptq5vjtk'
        }
    })
    .then((response) => response.json())
    .then((data) => {
        let items = data.data;
        let twitch = [];

        /**
         * dongseob - 빈값 에러 분기 추가
         * id - 영상ID
         * thumbnail_url - 썸네일의 크기와 url ({width}x{height}값을 변경해주어 사용)
         * title - 영상 제목
         */
        if(items){
            for(let i = 0; i < items.length; i++){
                if(items[i].title != ''){
                    twitch.push({id: items[i].id, url: items[i].thumbnail_url.replace("{width}x{height}", "640x480"), title: items[i].title})
                }
            }
        }
        results.push({twitch:twitch});
    });

    console.log(results)

    res.send({result: results});
}