export default async function handler(req, res){
    let results = [];

    await fetch('https://www.googleapis.com/youtube/v3/videos?key=AIzaSyBLizbrwv_ltQLAD0Y4ovNP9HR1855hj18&part=snippet&chart=mostPopular&regionCode=kr')
    .then((response) => response.json())
    .then((data) => {
        let items = data.items;
        let youtube = [];

        for(let i = 0; i < items.length; i++){
            // console.log(items[i]);
            youtube.push({id: items[i].snippet.channelId, url: items[i].snippet.thumbnails.high.url, title: items[i].snippet.title});
        }

        // console.log('main으로 보낼 최종 youtube 데이터! : ', youtube);
        
        results.push({youtube:youtube});
    });

    await fetch("https://api.twitch.tv/helix/streams?language=ko&first=5", {
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

        for(let i = 0; i < items.length; i++){
            if(items[i].title != ''){
                twitch.push({id: items[i].id, url: items[i].thumbnail_url.replace("{width}x{height}", "440x240"), title: items[i].title})
            }
        }
        
        results.push({twitch:twitch});
    });

    res.send({result: results});
}