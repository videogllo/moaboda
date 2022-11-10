const TikTokScraper = require('tiktok-scraper');

let results = [];
export default async function handler(req, res) {
    (async () => {
        try {
            const posts = await TikTokScraper.trend(`moaboda2022`, {
                number: 100,
                by_user_id: true,
                sessionList: ['sid_tt=d538fab41c3541e8afc0cfebcaff729e;']
            });
            let headers = posts.headers;
            headers.referer = 'https://www.tiktok.com/ko-KR/';
            console.log(headers);
    
            const tiktok = await TikTokScraper.trend('WEB_VIDEO_URL', {headers}).then(function(resp) {
                resp.collector.map((data) => {

                    results.push({
                        id: data.id,
                        title: data.text,
                        href: data.webVideoUrl,
                        imgUrl: data.covers.origin,
                        channel: data.authorMeta.name,
                        quality: data.playCount,
                        date: new Date(data.createTime * 1000),
                        tag: data.hashtags,
                        platform: "TikTok"
                    });
                })
            });
    
            const test = tiktok;

            console.log(results);
            res.send({ result: results });
    
        } catch (error) {
            console.log(error);
        }
    })();
}

// const now = new Date();
// const create = new Date(1667388658 * 1000);
// console.log(create);