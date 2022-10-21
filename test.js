/* 트위치API 권한 설정 */
const axios = require('axios');

// 대분류
const ids = [];

// axios(
//     "https://api.twitch.tv/helix/search/categories?query=운동", {
//         method: 'get',
//         headers: {
//             'Authorization':'Bearer 09z7q6lphf4nrmu5rjfihquov5orow',
//             'Client-Id':'g901hktaiu6c4v5dt4vkjoptq5vjtk'
//         }
// }).then(res => {
//     console.log(res.data);

//     const items = res.data.data;

//     for(let i = 0; i < items.length; i++){
//         ids.push({id: items[i].id});
//     }
//     console.log(ids);
    
//     // 대분류 검색 결과에 해당하는 id를 기준으로 stream 검색(game_id)
//     for(let i = 0; i < ids.length; i++){
//         axios(
//             "https://api.twitch.tv/helix/streams?first=5&game_id=" + ids[i].id, {
//                 method: 'get',
//                 headers: {
//                     'Authorization':'Bearer 09z7q6lphf4nrmu5rjfihquov5orow',
//                     'Client-Id':'g901hktaiu6c4v5dt4vkjoptq5vjtk'
//                 }
//         }).then(res => {
//             console.log(res.data);
//         });
    
//     }
// });
axios(
    "https://api.twitch.tv/helix/search/channels?query=침착맨", {
        method: 'get',
        headers: {
            'Authorization':'Bearer 09z7q6lphf4nrmu5rjfihquov5orow',
            'Client-Id':'g901hktaiu6c4v5dt4vkjoptq5vjtk'
        }
}).then(res => {
    console.log(res.data);

    const items = res.data.data;

});




