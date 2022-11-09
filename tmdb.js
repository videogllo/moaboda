const axios = require('axios');

axios({
    method: 'get',
    url: 'https://api.themoviedb.org/3/search/movie?api_key=e134931ac620c57b8200b44c971fd541&language=ko-KR&query=%EB%84%B7%ED%94%8C%EB%A6%AD%EC%8A%A4&page=1&include_adult=false',
})
.then(function (response) {
    console.log(response.data);
});