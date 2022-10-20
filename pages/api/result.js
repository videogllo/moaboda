export default async function handler(req, res) {
    let results = [];
    let videoId = [];
    let youtube = [];

    await fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&type=video&key=AIzaSyBLizbrwv_ltQLAD0Y4ovNP9HR1855hj18&q=" + req.query.q)
    .then((response) => response.json())
    .then((data) => {
        let items = data.items;

        for(let i = 0; i < items.length; i++){
            videoId.push({id: items[i].id.videoId});
        }
    });

    for(let i = 0 ; i < videoId.length; i++){
        await fetch("https://www.googleapis.com/youtube/v3/videos?key=AIzaSyBLizbrwv_ltQLAD0Y4ovNP9HR1855hj18&part=snippet&id=" + videoId[i].id)
        .then((response) => response.json())
        .then((data) => {
            let items = data.items;
            console.log(items[0].snippet.tags);
            youtube.push({id: items[0].id, url: items[0].snippet.thumbnails.medium.url, title: items[0].snippet.title, channel: items[0].snippet.channelTitle, date: items[0].snippet.publishedAt, tags: items[0].snippet.tags});
        });
    }
    results.push({youtube:youtube});



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

        console.log(data);

        if(data.status = 401){
            
        } else {
            for(let i = 0; i < items.length; i++){
                if(items[i].title != ''){
                    twitch.push({id: items[i].id, url: items[i].thumbnail_url.replace("{width}x{height}", "440x240"), title: items[i].title});
                }
            }
        }
        results.push({twitch:twitch});
    });

    res.send({result: results});
}
