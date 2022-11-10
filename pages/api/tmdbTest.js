const axios = require("axios");

let tmdbIds = [];
let results = [];
axios.all([axios.get("https://api.themoviedb.org/3/trending/all/day?api_key=e134931ac620c57b8200b44c971fd541&language=ko-KR&page=1"),
axios.get("https://api.themoviedb.org/3/trending/all/day?api_key=e134931ac620c57b8200b44c971fd541&language=ko-KR&page=2"),
axios.get("https://api.themoviedb.org/3/trending/all/day?api_key=e134931ac620c57b8200b44c971fd541&language=ko-KR&page=3"),
axios.get("https://api.themoviedb.org/3/trending/all/day?api_key=e134931ac620c57b8200b44c971fd541&language=ko-KR&page=4"),
axios.get("https://api.themoviedb.org/3/trending/all/day?api_key=e134931ac620c57b8200b44c971fd541&language=ko-KR&page=5")])
.then(function(resp){
    resp.map((i) => i.data.results.map((j) => tmdbIds.push(j.id)));
    // console.log(tmdbIds);
    tmdbIds.map((id) => {
        axios.get("https://api.themoviedb.org/3/movie/" + id + "?api_key=e134931ac620c57b8200b44c971fd541&language=ko")
        .then(function(resp) {
            if((resp.data.homepage).includes('netflix')){
                // console.log(resp.data);
                results.push({
                    id: resp.data.id,                                                                       //영상 아이디
                    title: resp.data.title,                                                                 //영상 제목
                    href: resp.data.homepage,                                                               //영상 주소
                    imgUrl: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/'+resp.data.poster_path,   //썸네일 경로
                    channel: '/image/ott/neflix.svg',                                                       //채널명
                    quality: resp.data.popularity,                                                          //총 재생수
                    date: resp.data.release_date,                                                           //업로드일
                    tag: resp.data.genres,                                                                  //영상에 등록된 태그
                    platform: "Netflix",                                                                    //플랫폼 종류
                });
            } else if((resp.data.homepage).includes('disney')){
                results.push({
                    id: resp.data.id,                                                                       //영상 아이디
                    title: resp.data.title,                                                                 //영상 제목
                    href: resp.data.homepage,                                                               //영상 주소
                    imgUrl: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/'+resp.data.poster_path,   //썸네일 경로
                    channel: '/image/ott/neflix.svg',                                                       //채널명
                    quality: resp.data.popularity,                                                          //총 재생수
                    date: resp.data.release_date,                                                           //업로드일
                    tag: resp.data.genres,                                                                  //영상에 등록된 태그
                    platform: "Disney",                                                                     //플랫폼 종류
                });
            } else if((resp.data.homepage).includes('wavve')){
                results.push({
                    id: resp.data.id,                                                                       //영상 아이디
                    title: resp.data.title,                                                                 //영상 제목
                    href: resp.data.homepage,                                                               //영상 주소
                    imgUrl: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/'+resp.data.poster_path,   //썸네일 경로
                    channel: '/image/ott/neflix.svg',                                                       //채널명
                    quality: resp.data.popularity,                                                          //총 재생수
                    date: resp.data.release_date,                                                           //업로드일
                    tag: resp.data.genres,                                                                  //영상에 등록된 태그
                    platform: "Wavve",                                                                     //플랫폼 종류
                });
            }
            // console.log(results.map((i) => i.platform));
        })
        .catch(function(resp) {
            axios.get("https://api.themoviedb.org/3/tv/" + id + "?api_key=e134931ac620c57b8200b44c971fd541&language=ko")
            .then(function(resp){
                if((resp.data.homepage).includes('netflix')){
                    results.push({
                        id: resp.data.id,                                                                       //영상 아이디
                        title: resp.data.title,                                                                 //영상 제목
                        href: resp.data.homepage,                                                               //영상 주소
                        imgUrl: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/'+resp.data.poster_path,   //썸네일 경로
                        channel: '/image/ott/neflix.svg',                                                       //채널명
                        quality: resp.data.popularity,                                                          //총 재생수
                        date: resp.data.last_episode_to_air,                                                    //업로드일
                        tag: resp.data.genres,                                                                  //영상에 등록된 태그
                        platform: "Netflix",                                                                    //플랫폼 종류
                    })
                } else if((resp.data.homepage).includes('disney')){
                    results.push({
                        id: resp.data.id,                                                                       //영상 아이디
                        title: resp.data.title,                                                                 //영상 제목
                        href: resp.data.homepage,                                                               //영상 주소
                        imgUrl: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/'+resp.data.poster_path,   //썸네일 경로
                        channel: '/image/ott/neflix.svg',                                                       //채널명
                        quality: resp.data.popularity,                                                          //총 재생수
                        date: resp.data.last_episode_to_air,                                                    //업로드일
                        tag: resp.data.genres,                                                                  //영상에 등록된 태그
                        platform: "Disney",                                                                    //플랫폼 종류
                    })
                } else if((resp.data.homepage).includes('wavve')){
                    results.push({
                        id: resp.data.id,                                                                       //영상 아이디
                        title: resp.data.title,                                                                 //영상 제목
                        href: resp.data.homepage,                                                               //영상 주소
                        imgUrl: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/'+resp.data.poster_path,   //썸네일 경로
                        channel: '/image/ott/neflix.svg',                                                       //채널명
                        quality: resp.data.popularity,                                                          //총 재생수
                        date: resp.data.last_episode_to_air,                                                    //업로드일
                        tag: resp.data.genres,                                                                  //영상에 등록된 태그
                        platform: "Wavve",                                                                    //플랫폼 종류
                    })
                }
                console.log(resp.data.homepage);
            })
        })

    })
})
