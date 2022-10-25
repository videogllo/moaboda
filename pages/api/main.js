export default async function handler(req, res) {
    let results = [];

    // await fetch(
    //     "https://www.googleapis.com/youtube/v3/videos?key=AIzaSyBLizbrwv_ltQLAD0Y4ovNP9HR1855hj18&part=snippet,contentDetails&chart=mostPopular&regionCode=kr&maxResults=10"
    // )
    //     .then((response) => response.json())
    //     .then((data) => {
    //         let items = data.items;

    //         if (items) {
    //             for (let i = 0; i < items.length; i++) {
    //                 results.push({
    //                     id: items[i].id,
    //                     title: items[i].snippet.title,
    //                     channelName: items[i].snippet.channelTitle,
    //                     url: items[i].snippet.thumbnails.standard.url,
    //                     uploadDate: items[i].snippet.publishedAt,
    //                     thumbnailUrl: items[i].snippet.thumbnails.standard.url,
    //                     tag: items[0].snippet.tags,
    //                     playTime: 
    //                 });
    //                 // youtube.push({id: items[i].snippet.channelId, url: items[i].snippet.thumbnails.standard.url, title: items[i].snippet.title});
    //             }
    //         }
    //     });

    await fetch("https://api.twitch.tv/helix/streams?language=ko&first=9", {
        method: "get",
        headers: {
            Authorization: "Bearer oimn0lk86ydwcxvqacucwhzfkq8hjo",
            "Client-Id": "g901hktaiu6c4v5dt4vkjoptq5vjtk",
        },
    })
        .then((response) => response.json())
        .then((data) => {
            let items = data.data;
            let twitch = [];

            if (items) {
                for (let i = 0; i < items.length; i++) {
                    if (items[i].title != "") {
                        twitch.push({
                            id: items[i].id,
                            url: items[i].thumbnail_url.replace(
                                "{width}x{height}",
                                "640x480"
                            ),
                            title: items[i].title,
                        });
                    }
                }
            }
            results.push({ twitch: twitch });
        });

    // console.log(results)

    res.send({ result: results });
}
