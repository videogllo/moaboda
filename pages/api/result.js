export default async function handler(req, res) {
    let results = [];
    let videoId = [];
    let youtube = [];
    let twitch = [];
    let twitchCateIds = [];

    // await fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&type=video&key=AIzaSyBLizbrwv_ltQLAD0Y4ovNP9HR1855hj18&q=" + req.query.q)
    // .then((response) => response.json())
    // .then((data) => {
    //     if(data.items != undefined){
    //         let items = data.items;
    
    //         for(let i = 0; i < items.length; i++){
    //             videoId.push({id: items[i].id.videoId});
    //         }
    //     }
    // });

    // for(let i = 0 ; i < videoId.length; i++){
    //     await fetch("https://www.googleapis.com/youtube/v3/videos?key=AIzaSyBLizbrwv_ltQLAD0Y4ovNP9HR1855hj18&part=snippet&id=" + videoId[i].id)
    //     .then((response) => response.json())
    //     .then((data) => {
    //         let items = data.items;
    //         let temp = ['', '', '']


    //         if(items[0].snippet.tags == undefined){
    //             youtube.push({id: items[0].id, url: items[0].snippet.thumbnails.medium.url, title: items[0].snippet.title, channel: items[0].snippet.channelTitle, date: items[0].snippet.publishedAt, tags: temp});
    //         } else {
    //             youtube.push({id: items[0].id, url: items[0].snippet.thumbnails.medium.url, title: items[0].snippet.title, channel: items[0].snippet.channelTitle, date: items[0].snippet.publishedAt, tags: items[0].snippet.tags});
    //         }
    //     });
    // }
    // results.push({youtube:youtube});



    await fetch("https://api.twitch.tv/helix/search/categories?query=" + req.query.q, {
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
            twitchCateIds.push({id: items[i].id});
        }
    });


    if(twitchCateIds.length < 1){
        await fetch("https://api.twitch.tv/helix/search/channels?query=" + req.query.q, {
        method: 'get',
        headers: {
            'Authorization':'Bearer 09z7q6lphf4nrmu5rjfihquov5orow',
            'Client-Id':'g901hktaiu6c4v5dt4vkjoptq5vjtk'
        }
        })
        .then((response) => response.json())
        .then((data) => {
            let items = data.data;

            if(data.status != 404){
                for(let i = 0; i < items.length; i++){
                    if(items[i].game_id > 0){
                        twitchCateIds.push({id: items[i].game_id});
                    }
                }
            }
        });
    }

    
    for(let i = 0; i < twitchCateIds.length; i++){
        await fetch("https://api.twitch.tv/helix/streams?language=ko&first=5&game_id=" + twitchCateIds[i].id, {
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
                twitch.push({id: items[i].id, url: items[i].thumbnail_url.replace('{width}x{height}', '350x200'), title: items[i].title, channel: items[i].user_name, date: items[i].started_at, link: items[i].user_login});
            }
        });
    }
    
    results.push({twitch:[...new Set(twitch.map(JSON.stringify))].map(JSON.parse)});
    
    if(youtube.length < 1){
        youtube.push({id: '', url: '', title: '', channel: '', date: '', tags: ''});
        results.push({youtube:youtube});
    }

    if(twitch.length < 1){
        twitch.push({id: '', url: '', title: '', channel: '', date: ''});
        results.push({twitch:twitch});
    }

    res.send({result: results});
}