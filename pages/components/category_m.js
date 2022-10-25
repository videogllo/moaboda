import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

/** axios */
import axios from 'axios';

import VideoAd from "./videoAd"
import ResultList from "./resultList";

function CategoryM({props}){
    
    if(props != undefined && props != ''){
        const result = props.result[1];

        const [test, setTest] = useState();
        const [filterData, setFilterData] = useState([]);

        const [platformList, setPlatformList] = useState([]);
        const [categoryList, setCategoryList] = useState([]);

        const [twitchId, setTwitchId] = useState([]);

        const platformClick = (e) => {
            setTest(e.target.id);
            const selectTag = document.getElementById(e.target.id);

            if(e.target.id == '전체'){
                document.getElementById('전체').classList.remove('prevStyle');
                document.getElementById('전체').classList.add('currentStyle');

                for(let i = 0; i < platformList.length; i++){
                    document.getElementById(platformList[i]).classList.remove('currentStyle');
                    document.getElementById(platformList[i]).classList.add('prevStyle');
                }

                setPlatformList([]);
                filterData.length = 0;

                // if(categoryList.length > 0){
                //     setFilterData(addSearchFilter({platformList, categoryList}));
                // }
            } else {
                filterData.length = 0;
                document.getElementById('전체').classList.remove('currentStyle');
                document.getElementById('전체').classList.add('prevStyle');

                if(selectTag.className === 'prevStyle'){
                    selectTag.classList.remove('prevStyle');
                    selectTag.classList.add('currentStyle');
                    platformList.push(e.target.id);

                    for(let i = 0; i < platformList.length; i++){
                        console.log(platformList[i]);
                        if(result.filter((item) => item.platform === platformList[i]).length > 0){
                            // setFilterData(...filterData, [result.filter((item) => item.platform === platformList[i])]);
                            filterData.push(result.filter((item) => item.platform === platformList[i]));
                        }
                    }

                } else if(selectTag.className === 'currentStyle') {
                    setTest(e.target.id);
                    selectTag.classList.remove('currentStyle');
                    selectTag.classList.add('prevStyle');

                    for(let i = 0; i < platformList.length; i++){
                        if(platformList[i] === e.target.id){
                            platformList.splice(i, 1);
                            i--;
                        }
                    }

                    for(let i = 0; i < platformList.length; i++){
                        console.log(platformList[i]);
                        if(result.filter((item) => item.platform === platformList[i]).length > 0){
                            // setFilterData(...filterData, [result.filter((item) => item.platform === platformList[i])]);
                            filterData.push(result.filter((item) => item.platform === platformList[i]));
                        }
                    }

                    if(platformList.length === 0){
                        setPlatformList([]);
                        filterData.length = 0;
                        document.getElementById('전체').classList.remove('prevStyle');
                        document.getElementById('전체').classList.add('currentStyle');
                    }

                    // if(categoryList.length > 0){
                    //     setFilterData(addSearchFilter({platformList, categoryList}));
                    // }
                }
                
            }
           
        }

        const categoryClick = (e) => {
            setTest(e.target.id);
            const selectTag = document.getElementById(e.target.id);
            
            if(selectTag.className === 'prevStyle'){
                selectTag.classList.remove('prevStyle');
                selectTag.classList.add('currentStyle');
                categoryList.push(e.target.id);

                document.getElementById('cateLi').classList.remove('hidden');
                document.getElementById('cateLi').classList.add('flex');

            } else if(selectTag.className === 'currentStyle') {
                selectTag.classList.remove('currentStyle');
                selectTag.classList.add('prevStyle');

                document.getElementById('cateLi').classList.remove('hidden');
                document.getElementById('cateLi').classList.add('flex');

                for(let i = 0; i < categoryList.length; i++){
                    if(categoryList[i] === e.target.id){
                        categoryList.splice(i, 1);
                        i--;
                    }
                }

                if(categoryList.length === 0){
                    setCategoryList([]);
                    document.getElementById('cateLi').classList.remove('flex');
                    document.getElementById('cateLi').classList.add('hidden');
                }
            }

        //    addSearchFilter({platformList, categoryList});
        }

        const reset = (e) => {
            setPlatformList([]);
            setCategoryList([]);
        }

        const addSearchFilter = async({platformList, categoryList}) => {

            
            setFilterData([]);
            setTwitchId([]);

            console.log('함수 실행 확인!');
            console.log(platformList);
            console.log(categoryList);

            const filterResult = [];
            
            for(let i = 0; i < categoryList.length; i++){
                await axios.get("https://api.twitch.tv/helix/search/channels?query=" + categoryList[i],{
                    headers: {
                        'Authorization':'Bearer 09z7q6lphf4nrmu5rjfihquov5orow',
                        'Client-Id':'g901hktaiu6c4v5dt4vkjoptq5vjtk'
                    }
                })
                .then(function(response){
                    if(response.status == 200){
                        const items = response.data.data;
                        console.log('---------------------');
                        console.log(items.map((index) => index));

                        // for(let i = 0; i < items.length; i++){
                        //     let itemsArr = {id: items[i].id};
                        //     twitchId.push(itemsArr);
                        // }
                    }
                })
                .catch(function(error){
                    console.log(error);
                });
            }



            // console.log(typeof(twitchId));
            // console.log(twitchId.length);
            

            // if(twitchId.length < 1){
            //     for(let i = 0; i < categoryList.length; i++){
            //         axios.get("https://api.twitch.tv/helix/search/channels?query=" + categoryList[i], {
            //             headers: {
            //                 'Authorization':'Bearer 09z7q6lphf4nrmu5rjfihquov5orow',
            //                 'Client-Id':'g901hktaiu6c4v5dt4vkjoptq5vjtk'
            //             }
            //         })
            //         .then(function(response){
            //             if(response.status == 200){
            //                 const items = response.data.data;
    
            //                 for(let i = 0; i < items.length; i++){
            //                     if(items[i].game_id > 0){
            //                         twitchId.push({id: items[i].game_id});
            //                     }
            //                 }
            //             }
            //         })
            //         .catch(function(error){
            //             console.log(error);
            //         });
            //     }
            // }

            // for(let i = 0; i < twitchId.length; i++){
            //     axios.get("https://api.twitch.tv/helix/streams?language=ko&first=5&game_id=" + twitchId[i].id, {
            //         headers: {
            //             'Authorization':'Bearer 09z7q6lphf4nrmu5rjfihquov5orow',
            //             'Client-Id':'g901hktaiu6c4v5dt4vkjoptq5vjtk'
            //         }
            //     })
            //     .then(function(response){
            //         if(response.status == 200){
            //             const items = response.data.data;

            //             for(let i = 0; i < items.length; i++){
            //                 filterResult.push({id: items[i].id, url: items[i].thumbnail_url.replace('{width}x{height}', '350x200'), title: items[i].title, channel: items[i].user_name, date: items[i].started_at, link: items[i].user_login, platform: 'Twitch'});
            //             }
            //         }
            //     })
            //     .catch(function(error){
            //         console.log(error);
            //     });
            // }
            
            // results.push([...new Set(filterResult.map(JSON.stringify))].map(JSON.parse));

        }
        
        
        return(
            <>
            <div className="">
                <div>
                    <button className="flex items-center categoryBtn">
                        <Image 
                            src="/image/etc/reset.png"
                            alt="logo"
                            width={15}
                            height={15}
                            ></Image>
                        <p className="ml-1">초기화</p>
                    </button>
                </div>
                <button className="flex items-center categoryBtn">
                    <p>플랫폼</p>
                </button>
                <button className="flex items-center categoryBtn">
                    <p>인기</p>
                </button>
                <button className="flex items-center categoryBtn">
                    <p>게임</p>
                </button>
                <button className="flex items-center categoryBtn">
                    <p>스포츠</p>
                </button>
                <button className="flex items-center categoryBtn">
                    <p>취미</p>
                </button>
                <button className="flex items-center categoryBtn">
                    <p>엔터테인먼트</p>
                </button>
                <button className="flex items-center categoryBtn">
                    <p>일상</p>
                </button>
                <button className="flex items-center categoryBtn">
                    <p>리뷰</p>
                </button>
            </div>
            {/* 비디오광고 */}
            <div className="relative flex justify-center py-7">
                    <VideoAd></VideoAd>
            </div>

            <div className="relative flex justify-center">
                {
                   platformList.length > 0 ? <ResultList filterData={filterData} /> : <ResultList result={result} />
                }
            </div>
            </>
        )
    } else {
        return('');
    }
}

export default CategoryM;