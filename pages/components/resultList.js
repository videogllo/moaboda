import Image from "next/image";

function ResultListItem({item, platform}){

    const youtubeImg = '/image/etc/youtube.svg';
    const twitchImg = '/image/etc/twitch.svg';

    return(
        <div key={item.id} id={item.id} className="relative flex items-start py-3 border-b">
            <img id={item.id} src={item.url} width={350} height={200}/>
            <div id={item.id} className="relative h-[190px] py-2 pl-1.5">
                <h4 id={item.id} className="relative text-xl h-1/4 font-extrabold">{item.title}</h4>
                <p id={item.id} className="relative text-base">{item.channel}</p>
                {/* <ul className="relative flex mt-6 mb-5">
                    <li className="mr-2 bg-slate-200 text-blue-800 text-sm rounded-full px-2 pt-0.5">{item.tags[0]}</li>
                    <li className="mr-2 bg-slate-200 text-blue-800 text-sm rounded-full px-2 pt-0.5">{item.tags[1]}</li>
                    <li className="mr-2 bg-slate-200 text-blue-800 text-sm rounded-full px-2 pt-0.5">{item.tags[2]}</li>
                    <li className="mr-2 bg-slate-200 text-blue-800 text-sm rounded-full px-2 pt-0.5">{item.tags[3]}</li>
                </ul> */}
                <div id={item.id} className="relative w-[90px] h-[20px]">
                    <Image id={item.id} src={platform == 'youtube' ? youtubeImg : twitchImg} alt="logo" layout="fill" objectFit='contain'></Image>
                </div>
                <small id={item.id} className="relative">{item.date}</small>
            </div>
        </div>
    )
}


function ResultList({props}) {

    if(props != undefined && props != null){

        const youtube = props[1].youtube;
        const twitch = props[2].twitch;
    
        const youtubeClick = (e) => {
            const id = e.target.id;
            location.href='https://www.youtube.com/watch?v=' + id;
        }
    
        const twitchClick = (e) => {
            const id = e.target.id;
            console.log(id);
            location.href='https://www.twitch.tv/videos/' + id;
        }
    
        return (
            <div className="max-w-screen-2xl w-4/5">
                <ul>
                    {youtube[0].id == '' ? '' : youtube.map((item) => <li key={item.id} id={item.id} onClick={youtubeClick}><ResultListItem item={item} platform={'youtube'}/></li>)}
                    {twitch[0].id == '' ? '' : twitch.map((item) => <li key={item.id} id={item.id} onClick={twitchClick}><ResultListItem item={item} platform={'twitch'}/></li>)}
                </ul>
            </div>
        )  
    } else {
        return ('');
    }
}

export default ResultList;
