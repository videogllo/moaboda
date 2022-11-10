const TikTokScraper = require('tiktok-scraper');

(async () => {
    try {
        const posts = await TikTokScraper.user(`moaboda2022`, {
            number: 100,
            by_user_id: true,
            sessionList: ['sid_tt=d538fab41c3541e8afc0cfebcaff729e;']
        });
        // console.log(posts.headers);
        const headers = posts.headers;
        console.log(headers);
        TikTokScraper.trend('WEB_VIDEO_URL', {headers}).then(function(resp) {console.log(resp)});

    } catch (error) {
        console.log(error);
    }
})();