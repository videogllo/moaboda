import Image from "next/image";

function ResultListItem({item, platform}){
    let platformImg = '';
    if(platform == 'youtube'){
        platformImg = '/image/etc/youtube.png';
    } else if(platform == 'twitch'){
        platformImg = '/image/etc/twitch.png';

    }

    return(
        <div key={item.id} id={item.id} className="relative flex-col md:flex-row md:flex items-start py-8 border-b">
            <div className="flex justify-center w-[100%] md:w-[30%] md:mr-[15px]">
                <img id={item.id} src={item.url} width={450} height={150}/>
            </div>
            <div id={item.id} className="relative flex flex-col items-center md:py-2 md:pl-1.5 md:items-start">
                <h4 id={item.id} className="relative w-[100%] text-center font-extrabold mt-2.5 md:mt-1  md:text-lg md:text-left md:w-[350px] lg:text-lg lg:w-[500px] lg:h-[40px] truncate">{item.title}</h4>
                <p id={item.id} className="relative text-base">{item.channel}</p>
                {/* <ul className="relative flex mt-6 mb-5">
                    <li className="mr-2 bg-slate-200 text-blue-800 text-sm rounded-full px-2 pt-0.5">{item.tags[0]}</li>
                    <li className="mr-2 bg-slate-200 text-blue-800 text-sm rounded-full px-2 pt-0.5">{item.tags[1]}</li>
                    <li className="mr-2 bg-slate-200 text-blue-800 text-sm rounded-full px-2 pt-0.5">{item.tags[2]}</li>
                    <li className="mr-2 bg-slate-200 text-blue-800 text-sm rounded-full px-2 pt-0.5">{item.tags[3]}</li>
                </ul> */}
                <div id={item.id} className="relative w-[90px] h-[20px] my-4">
                    <Image id={item.id} src={platformImg} alt="logo" layout="fill" objectFit='contain'></Image>
                </div>
                <small id={item.id} className="relative">{item.date}</small>
            </div>
        </div>
    )
}


function ResultList({result, filterData}) {
    console.log('오긴 왔는지?ㅋㅋㅎㅎ??????');
    console.log('result : ', result);
    console.log('filterData : ', filterData);

    const youtubeClick = (e) => {
        const id = e.target.id;
        location.href='https://www.youtube.com/watch?v=' + id;
    }

    const twitchClick = (e) => {
        const id = e.target.id;
        location.href='https://www.twitch.tv/videos/' + id;
    }
    
    if(filterData != undefined && filterData.length > 0 && filterData[0] != undefined){
        console.log('resultPage!!!!!!!!!!!!!! filterData');
        console.log(filterData);
        for(let i = 0; i < filterData.length; i++){
            console.log(filterData[i]);
            return (
                <div className=" w-full">
                    <ul>
                        {filterData[i].length < 1 ? '' :
                            filterData[i].map((item) => item.platform == 'Youtube' ? 
                            <li key={item.id} id={item.id} onClick={youtubeClick} ><ResultListItem item={item} platform={'youtube'}/></li>
                            : item.platform == 'Twitch' ? 
                            <li key={item.id} id={item.id} onClick={twitchClick} ><ResultListItem item={item} platform={'twitch'}/></li>
                            : ''
                        )}
                    </ul>
                </div>
            )  
        }

    } else if(result != undefined) {
        console.log('resultPage!!!!!!!!!!!!!! result');
        // console.log(result);
        return (
            <div className=" w-full">
                <ul>
                    {result.length < 1 ? '' :
                        result.map((item) => item.platform == 'Youtube' ? 
                        <li key={item.id} id={item.id} onClick={youtubeClick} ><ResultListItem item={item} platform={'youtube'}/></li>
                        : item.platform == 'Twitch' ? 
                        <li key={item.id} id={item.id} onClick={twitchClick} ><ResultListItem item={item} platform={'twitch'}/></li>
                        : ''
                    )}
                </ul>
            </div>
        )  
    } 
}

export default ResultList;
