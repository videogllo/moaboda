/** 카테고리 JSON */
import jsonList from "../api/category.json";

export default async function handler(req, res) {
    let results = [];
    let videoId = [];
    let youtube = [];
    let twitch = [];
    let twitchCateIds = [];
    let afreecaTV = [];
    let Shorts = [];
    let TikTok = [];

    if(req.query.q == ''){
        res.send({result:'없음'});
    } else {

        if(jsonList.태그[0].게임.indexOf(req.query.q) >= 0 || jsonList.대분류[0].게임.indexOf(req.query.q) >= 0){
            results.push({mainCategory:"게임"});
        } else if(jsonList.태그[0].스포츠.indexOf(req.query.q) >= 0 || jsonList.대분류[0].스포츠.indexOf(req.query.q) >= 0){
            results.push({mainCategory:"스포츠"});
        } else if(jsonList.태그[0].영화.indexOf(req.query.q) >= 0 || jsonList.대분류[0].영화.indexOf(req.query.q) >= 0){
            results.push({mainCategory:"영화"});
        } else if(jsonList.태그[0].음악.indexOf(req.query.q) >= 0 || jsonList.대분류[0].음악.indexOf(req.query.q) >= 0){
            results.push({mainCategory:"음악"});
        } else if(jsonList.태그[0].일상.indexOf(req.query.q) >= 0 || jsonList.대분류[0].일상.indexOf(req.query.q) >= 0){
            results.push({mainCategory:"일상"});
        } else if(jsonList.태그[0].크리에이티브.indexOf(req.query.q) >= 0 || jsonList.대분류[0].크리에이티브.indexOf(req.query.q) >= 0){
            results.push({mainCategory:"크리에이티브"});
        } else if(jsonList.태그[0].학습.indexOf(req.query.q) >= 0 || jsonList.대분류[0].학습.indexOf(req.query.q) >= 0){
            results.push({mainCategory:"학습"});
        } else {
            results.push({mainCategory:""});
        }
    
    
        await fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&type=video&key=AIzaSyBLizbrwv_ltQLAD0Y4ovNP9HR1855hj18&q=" + req.query.q)
        .then((response) => response.json())
        .then((data) => {
            if(data.items != undefined){
                let items = data.items;
        
                for(let i = 0; i < items.length; i++){
                    videoId.push({id: items[i].id.videoId});
                }
            }
        });
    
        for(let i = 0 ; i < videoId.length; i++){
            await fetch("https://www.googleapis.com/youtube/v3/videos?key=AIzaSyBLizbrwv_ltQLAD0Y4ovNP9HR1855hj18&part=snippet&id=" + videoId[i].id)
            .then((response) => response.json())
            .then((data) => {
                let items = data.items;
                let temp = ['', '', '']
    
    
                if(items[0].snippet.tags == undefined){
                    youtube.push({id: items[0].id, url: items[0].snippet.thumbnails.medium.url, title: items[0].snippet.title, channel: items[0].snippet.channelTitle, date: items[0].snippet.publishedAt, tags: temp});
                } else {
                    youtube.push({id: items[0].id, url: items[0].snippet.thumbnails.medium.url, title: items[0].snippet.title, channel: items[0].snippet.channelTitle, date: items[0].snippet.publishedAt, tags: items[0].snippet.tags});
                }
            });
        }
    
        if(youtube.length > 0){
            results.push({Youtube:youtube});
        } else { 
            youtube.push({id: '', url: '', title: '', channel: '', date: '', tags: ''});
            results.push({Youtube:youtube});
        }
    
    
    
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
        
        if(twitch.length > 0){
            results.push({Twitch:[...new Set(twitch.map(JSON.stringify))].map(JSON.parse)});
        } else {
            twitch.push({id: '', url: '', title: '', channel: '', date: ''});
            results.push({Twitch:twitch});
        }
        
        afreecaTV.push({id: '', url: '', title: '', channel: '', date: ''});
        Shorts.push({id: '', url: '', title: '', channel: '', date: ''});
        TikTok.push({id: '', url: '', title: '', channel: '', date: ''});
        results.push({afreecaTV:afreecaTV});
        results.push({Shorts:Shorts});
        results.push({TikTok:TikTok});
        res.send({result: results});
    }
}