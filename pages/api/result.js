export default async function handler(req, res) {
    let results = [];

    await fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&type=video&key=AIzaSyBLizbrwv_ltQLAD0Y4ovNP9HR1855hj18&q=" + req.query.q)
    .then((response) => response.json())
    .then((data) => {
        let items = data.items;
        let youtube = [];

        for(let i = 0; i < items.length; i++){
            // console.log(items[i]);
            youtube.push({id: items[i].snippet.channelId, url: items[i].snippet.thumbnails.high.url, title: items[i].snippet.title});
        }

        console.log('main으로 보낼 최종 youtube 데이터! : ', youtube);
        
        results.push({youtube:youtube});
    });

    await fetch("https://api.twitch.tv/helix/search/channels?first=5&query=" + req.query.q, {
        method: 'get',
        headers: {
            'Authorization':'Bearer oimn0lk86ydwcxvqacucwhzfkq8hjo',
        }
    })
    .then((response) => response.json())
    .then((data) => {
        let items = data.data;
        let twitch = [];

        if(data.status != 401){
            for(let i = 0; i < items.length; i++){
                if(items[i].title != ''){
                    twitch.push({id: items[i].id, url: items[i].thumbnail_url.replace("{width}x{height}", "440x240"), title: items[i].title})
                }
            }

        }
        results.push({twitch:twitch});
    });

    res.send({result: results});
}
