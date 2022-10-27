import Image from "next/image";
import * as filter from "../api/filter";

const Category_mob = () => {
    return(
        <>
            <div className="flex overflow-auto justify-start" id='categoryScroll'>
                    <div className="flex text-center justify-start">
                        <div className="relative flex items-center min-w-[70px] h-[35px] ml-3" onClick={filter.reset}>
                            <div className="flex items-center ">
                                <Image 
                                src="/image/etc/reset.png"
                                alt="logo"
                                width={15}
                                height={15}
                                ></Image>
                            </div>
                            <p className="flex cursor-pointer text-sm">초기화</p>
                        </div>
                        <div className="relative min-w-[110px] h-[35px] border border-slate-400 text-slate-400 px-4 py-1 mx-1 rounded-lg cursor-pointer" id="플랫폼" onClick={displayBlock}>
                            플랫폼
                        </div>
                        <div className="relative min-w-[110px] h-[35px] border border-slate-400 text-slate-400 px-4 py-1 mx-1 rounded-lg cursor-pointer" id="인기" onClick={displayBlock}>
                            인기
                        </div>
                        <div className="relative min-w-[110px] h-[35px] border border-slate-400 text-slate-400 px-4 py-1 mx-1 rounded-lg cursor-pointer" id="게임" onClick={displayBlock}>
                            게임
                        </div>
                        <div className="relative min-w-[110px] h-[35px] border border-slate-400 text-slate-400 px-4 py-1 mx-1 rounded-lg cursor-pointer" id="스포츠" onClick={displayBlock}>
                            스포츠
                        </div>
                        <div className="relative min-w-[110px] h-[35px] border border-slate-400 text-slate-400 px-4 py-1 mx-1 rounded-lg cursor-pointer" id="취미" onClick={displayBlock}>
                            취미
                        </div>
                        <div className="relative min-w-[130px] h-[35px] border border-slate-400 text-slate-400 px-4 py-1 mx-1 rounded-lg cursor-pointer" id="엔터테인먼트" onClick={displayBlock}>
                            엔터테인먼트
                        </div>
                        <div className="relative min-w-[110px] h-[35px] border border-slate-400 text-slate-400 px-4 py-1 mx-1 rounded-lg cursor-pointer" id="일상" onClick={displayBlock}>
                            일상
                        </div>
                        <div className="relative min-w-[110px] h-[35px] border border-slate-400 text-slate-400 px-4 py-1 mx-1 rounded-lg cursor-pointer" id="리뷰" onClick={displayBlock}>
                            리뷰
                        </div>
                        <div className="relative min-w-[140px] h-[35px] border border-slate-400 text-slate-400 px-4 py-1 mx-1 mr-5 rounded-lg cursor-pointer" id="크리에이터 성별" onClick={displayBlock}>
                            크리에이터 성별
                        </div>
                    </div>
                </div>
            <div className="w-full border-t border-b mt-2 hidden" id="플랫폼sub">
                <ul className="flex justify-center flex-wrap p-2 pt-4">
                    <li className="currentStyle" onClick={filter.platformClick} id="전체1" value="0">전체</li>
                    <li className="prevStyle" onClick={filter.platformClick} id="Youtube1" value="1">Youtube</li>
                    <li className="prevStyle" onClick={filter.platformClick} id="Twitch1" value="2">Twitch</li>
                    <li className="prevStyle" onClick={filter.platformClick} id="afreecaTV1" value="3">afreecaTV</li>
                </ul>
                <ul className="flex justify-center flex-wrap p-2">
                    <li className="prevStyle" onClick={filter.platformClick} id="Shorts1" value="4">Shorts</li>
                    <li className="prevStyle" onClick={filter.platformClick} id="TikTok1" value="5">TikTok</li>
                    <li className="prevStyle" onClick={filter.platformClick} id="Instagram1" value="6">Instagram</li>
                    <li className="prevStyle" onClick={filter.platformClick} id="kakaoTV1" value="7">kakaoTV</li>
                </ul>
                <ul className="flex justify-center flex-wrap p-2 pb-4">
                    <li className="prevStyle" onClick={filter.platformClick} id="NETFLIX1" value="8">NETFLIX</li>
                    <li className="prevStyle" onClick={filter.platformClick} id="Disney+1" value="9">Disney+</li>
                    <li className="prevStyle" onClick={filter.platformClick} id="왓챠1" value="10">왓챠</li>
                    <li className="prevStyle" onClick={filter.platformClick} id="웨이브1" value="11">웨이브</li>
                    <li className="prevStyle" onClick={filter.platformClick} id="티빙1" value="12">티빙</li>
                    <li className="prevStyle" onClick={filter.platformClick} id="쿠팡플레이1" value="13">쿠팡플레이</li>
                    <li className="prevStyle" onClick={filter.platformClick} id="프라임 비디오1" value="14">프라임 비디오</li>
                    <li className="prevStyle" onClick={filter.platformClick} id="애플TV1" value="15">애플TV</li>
                </ul>
            </div>

            <div className="w-full border-t border-b mt-2 hidden" id="인기sub">
                <ul className="flex justify-center p-2 py-4">
                    <li className="prevStyle" onClick={filter.categoryClick} id="인기1" value="20">인기</li>
                </ul>
            </div>
            <div className="w-full border-t border-b mt-2 hidden" id="게임sub">
                <ul className="flex justify-center flex-wrap p-2 py-4">
                    <li className="prevStyle" onClick={filter.categoryClick} id="League of Legends1" value="21">League of Legends</li>
                    <li className="prevStyle" onClick={filter.categoryClick} id="배그1" value="22">배그</li>
                    <li className="prevStyle" onClick={filter.categoryClick} id="스타크래프트1" value="23">스타크래프트</li>
                    <li className="prevStyle" onClick={filter.categoryClick} id="오버워치1" value="24">오버워치</li>
                    <li className="prevStyle" onClick={filter.categoryClick} id="피파1" value="25">피파</li>
                    <li className="prevStyle" onClick={filter.categoryClick} id="리니지1" value="26">리니지</li>
                    <li className="prevStyle" onClick={filter.categoryClick} id="카트라이더1" value="27">카트라이더</li>
                    <li className="prevStyle" onClick={filter.categoryClick} id="바람의나라1" value="28">바람의나라</li>
                    <li className="prevStyle" onClick={filter.categoryClick} id="메이플스토리1" value="29">메이플스토리</li>
                    <li className="prevStyle" onClick={filter.categoryClick} id="패키지게임1" value="30">패키지게임</li>
                    <li className="prevStyle" onClick={filter.categoryClick} id="서든어택1" value="31">서든어택</li>
                    <li className="prevStyle" onClick={filter.categoryClick} id="모바일1" value="32">모바일</li>
                    <li className="prevStyle" onClick={filter.categoryClick} id="기타1" value="33">기타</li>
                </ul>
            </div>
            <div className="w-full border-t border-b mt-2 hidden" id="스포츠sub">
                <ul className="flex justify-center flex-wrap p-2 py-4">
                    <li className="prevStyle" onClick={filter.categoryClick} id="피트니스1" value="50">피트니스</li>
                    <li className="prevStyle" onClick={filter.categoryClick} id="축구1" value="51">축구</li>
                    <li className="prevStyle" onClick={filter.categoryClick} id="농구1" value="52">농구</li>
                    <li className="prevStyle" onClick={filter.categoryClick} id="야구1" value="53">야구</li>
                    <li className="prevStyle" onClick={filter.categoryClick} id="요가1" value="54">요가</li>
                    <li className="prevStyle" onClick={filter.categoryClick} id="홈트1" value="55">홈트</li>
                </ul>
            </div>
            <div className="w-full border-t border-b mt-2 hidden" id="취미sub">
                <ul className="flex justify-center flex-wrap p-2 py-4">
                    <li className="prevStyle" onClick={filter.categoryClick} id="패션1" value="70">패션</li>
                    <li className="prevStyle" onClick={filter.categoryClick} id="요리1" value="71">요리</li>
                    <li className="prevStyle" onClick={filter.categoryClick} id="산악/등산1" value="72">산악/등산</li>
                    <li className="prevStyle" onClick={filter.categoryClick} id="자전거1" value="73">자전거</li>
                    <li className="prevStyle" onClick={filter.categoryClick} id="자동차1" value="74">자동차</li>
                    <li className="prevStyle" onClick={filter.categoryClick} id="오토바이1" value="75">오토바이</li>
                    <li className="prevStyle" onClick={filter.categoryClick} id="만들기1" value="76">만들기</li>
                    <li className="prevStyle" onClick={filter.categoryClick} id="공방1" value="77">공방</li>
                    <li className="prevStyle" onClick={filter.categoryClick} id="IT/과학1" value="78">IT/과학</li>
                </ul>
            </div>
            <div className="w-full border-t border-b mt-2 hidden" id="엔터테인먼트sub">
                <ul className="flex justify-center flex-wrap p-2 py-4">
                    <li className="prevStyle" onClick={filter.categoryClick} id="공식채널1" value="90">공식채널</li>
                    <li className="prevStyle" onClick={filter.categoryClick} id="코미디1" value="91">코미디</li>
                    <li className="prevStyle" onClick={filter.categoryClick} id="음악1" value="92">음악</li>
                    <li className="prevStyle" onClick={filter.categoryClick} id="춤1" value="93">춤</li>
                    <li className="prevStyle" onClick={filter.categoryClick} id="만화/애니1" value="94">만화/애니</li>
                    <li className="prevStyle" onClick={filter.categoryClick} id="먹방1" value="95">먹방</li>
                    <li className="prevStyle" onClick={filter.categoryClick} id="크리에이터1" value="96">크리에이터</li>
                    <li className="prevStyle" onClick={filter.categoryClick} id="메이크업1" value="97">메이크업</li>
                    <li className="prevStyle" onClick={filter.categoryClick} id="짤/숏1" value="98">짤/숏</li>
                    <li className="prevStyle" onClick={filter.categoryClick} id="키즈1" value="99">키즈</li>
                    <li className="prevStyle" onClick={filter.categoryClick} id="연예인1" value="100">연예인</li>
                    <li className="prevStyle" onClick={filter.categoryClick} id="국내↔해외1" value="101">국내↔해외</li>
                    <li className="prevStyle" onClick={filter.categoryClick} id="관찰1" value="102">관찰</li>
                </ul>
            </div>
            <div className="w-full border-t border-b mt-2 hidden" id="일상sub">
                <ul className="flex justify-center flex-wrap p-2 py-4">
                    <li className="prevStyle" onClick={filter.categoryClick} id="브이로그1" value="120">브이로그</li>
                    <li className="prevStyle" onClick={filter.categoryClick} id="동물1" value="121">동물</li>
                    <li className="prevStyle" onClick={filter.categoryClick} id="커플/연인1" value="122">커플/연인</li>
                    <li className="prevStyle" onClick={filter.categoryClick} id="겟레디윗미1" value="123">겟레디윗미</li>
                    <li className="prevStyle" onClick={filter.categoryClick} id="학습/공부1" value="124">학습/공부</li>
                </ul>
            </div>
            <div className="w-full border-t border-b mt-2 hidden" id="리뷰sub">
                <ul className="flex justify-center flex-wrap p-2 py-4">
                    <li className="prevStyle" onClick={filter.categoryClick} id="영화1" value="140">영화</li>
                    <li className="prevStyle" onClick={filter.categoryClick} id="드라마1" value="141">드라마</li>
                    <li className="prevStyle" onClick={filter.categoryClick} id="전자기기1" value="142">전자기기</li>
                    <li className="prevStyle" onClick={filter.categoryClick} id="화장품1" value="143">화장품</li>
                    <li className="prevStyle" onClick={filter.categoryClick} id="자동차1" value="144">자동차</li>
                    <li className="prevStyle" onClick={filter.categoryClick} id="의류1" value="145">의류</li>
                </ul>
            </div>
            <div className="w-full border-t border-b mt-2 hidden" id="크리에이터 성별sub">
                <ul className="flex justify-center flex-wrap p-2 py-4">
                    <li className="prevStyle" onClick={filter.categoryClick} id="남자1" value="160">남자</li>
                    <li className="prevStyle" onClick={filter.categoryClick} id="여자1" value="161">여자</li>
                </ul>
            </div>
        </>
    )
}

export default Category_mob;