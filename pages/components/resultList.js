import Image from "next/image";

function ResultListItem({item, platform}){

    const youtubeImg = '/image/etc/youtube.svg';
    const twitchImg = '/image/etc/twitch.svg';

    return(
        <div key={item.id} id={item.id} className="relative flex-col md:flex-row md:flex items-start py-3 border-b">
            <div className="flex justify-center w-[100%] md:w-[30%] md:mr-[15px]">
                <img id={item.id} src={item.url} width={450} height={150}/>
            </div>
            <div id={item.id} className="relative flex flex-col items-center md:w-[60%] md:h-[190px] md:py-2 md:pl-1.5 md:items-start">
                <h4 id={item.id} className="relative w-[100%] text-center font-extrabold  md:text-lg md:text-left md:w-[350px] lg:text-lg lg:w-[500px] lg:h-[40px] truncate">{item.title}</h4>
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


function ResultList({props, test}) {

    const youtubeClick = (e) => {
        const id = e.target.id;
        location.href='https://www.youtube.com/watch?v=' + id;
    }

    const twitchClick = (e) => {
        const id = e.target.id;
        console.log(id);
        location.href='https://www.twitch.tv/videos/' + id;
    }

    let youtube = null;
    let twitch =null;

    
    if(test != undefined && test != null){
        for(let i = 0; i < test.length; i++){
            if(Object.keys(test[i]) == "Youtube"){
                youtube = test[i].Youtube;
            } else if(Object.keys(test[i]) == "Twitch"){
                twitch = test[i].Twitch;
            }
        }
    }else if(props != undefined && props != null){
        youtube = props[1].Youtube;
        twitch = props[2].Twitch;
    
    } 
    
    return (
        <div className=" w-full md:w-[58%] ">
            <ul>
                {youtube != null ? youtube[0].id == '' ? '' : youtube.map((item) => <li key={item.id} id={item.id} onClick={youtubeClick}><ResultListItem item={item} platform={'youtube'}/></li>) : ''}
                {twitch != null ? twitch[0].id == '' ? '' : twitch.map((item) => <li key={item.id} id={item.id} onClick={twitchClick}><ResultListItem item={item} platform={'twitch'}/></li>) : ''}
            </ul>
        </div>
    )  
}

export default ResultList;
