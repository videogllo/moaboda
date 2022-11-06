//functional
import Image from "next/image";
import { useState } from "react";

//component
import Loading from "./loading";

const news = [
    {
        id: 1,
        from: "naver",
        title: "'슈룹' 방송 2주만에 드라마 화제성 1위…김혜수도 출연자 1위",
        description:
            "'슈룹'이 방송 2주 만에 드라마 화제성 부문 1위에 올랐다. 24일 한국방송콘텐츠 경쟁력 분석 전문 기관인 굿데이터코퍼레이션 측은 지난 17일부터 23일까지 방송 중이거나 예정인 드라마 22편과 출연자 324명을 대상으로 한 굿데이터 TV화제성 드라마 순위를 공개했다.",
        imgUrl: "/image/news/news1.jpg",
    },
    {
        id: 2,
        from: "naver",
        title: "이번주 넷플릭스 뭐보지?",
        description:
            "몽글몽글, 시큰시큰. 첫사랑을 떠올리게 만드는 넷플릭스 영화 <20세기 소녀>가 찾아온다. 1999년 17세, 그 시절 마음에 품고 있는 첫사랑의 기억을 소환해 순수하고 풋풋한 감성을 되살리는 순간이다. 이 영화를 통해 아역 배우에서 청춘 스타로 거듭난 김유정은 수지에 이어 오늘날의 ‘국민 첫사랑’ 자리를 꿰찰 전망이다.",
        imgUrl: "/image/news/news2.jpg",
    },
    {
        id: 3,
        from: "naver",
        title: "망 사용료 부담됐나…트위치 '한국서 화질 720p로 제한'",
        description:
            "아마존닷컴이 보유한 세계 최대 게임 방송 플랫폼 '트위치'가 서비스 비용 증가를 이유로 한국에서 최대 해상도를 1080p에서 720p로 축소하기로 했다.",
        imgUrl: "/image/news/news3.jpg",
    },
    {
        id: 4,
        from: "naver",
        title: "[HI★초점] 숏폼으로 뜨는 가수들",
        description:
            "최근 대중의 영상 시청 패턴이 급격하게 바뀐 가운데 다양한 영상 플랫폼들에 대한 니즈가 높아지며 일어난 변화다. 자연스럽게 과거 가수들의 홍보 수단으로 여겨졌던 TV·라디오 방송 출연 등의 필요성은 눈에 띄게 줄어들었다. 대신 가수들은 매 컴백 시기에 맞춰 각종 영상 콘텐츠, 웹예능 출연 등을 기획하며 보다 폭넓은 세대와의 소통에 나서는 중이다.",
        imgUrl: "/image/news/news4.jpg",
    },
];

const feedMenu = [
    {
        id: 1,
        title: "영화 / 드라마",
    },
    {
        id: 2,
        title: "크리에이터",
    },
    {
        id: 3,
        title: "플랫폼",
    },
];

const MainListNews = () => {
    const [data, setData] = useState("test"); //임시로 데이터 있게함 => default null로 변경할 것
    const [feed, setFeed] = useState(0); //현재 선택되있는 피드를 확인하기 위함 default: 0

    return (
        <div className="mt-8 md:mt-12">
            {/* <h1 className="text-2xl xl:text-3xl font-extrabold">
                영상 소식
            </h1> */}

            <div className="flex flex-col w-full">
                <div className="bg-slate-800 p-4 rounded-xl shadow-xl">
                    <div className="mx-auto">
                        <div className="items-baseline justify-between flex pb-4">
                            <h2 className="text-xl xl:text-2xl font-bold tracking-tight">
                                📰&nbsp;오늘의 피드
                            </h2>
                            <span className="isolate inline-flex rounded-md shadow-md text-xs">
                                {feedMenu.map((el, i) => (
                                    <div key={el.id}>
                                        {feed === i ? (
                                            <>
                                                {i === 0 && (
                                                    <button
                                                        type="button"
                                                        className="relative inline-flex items-center rounded-l-md border border-slate-300 bg-slate-900 px-4 py-2 font-medium text-slate-200 hover:bg-slate-800 focus:z-10 focus:border-slate-500 focus:outline-none focus:ring-1 focus:ring-slate-500 transition-all"
                                                    >
                                                        {el.title}
                                                    </button>
                                                )}
                                                {i > 0 &&
                                                    i < feedMenu.length - 1 && (
                                                        <button
                                                            type="button"
                                                            className="relative -ml-px inline-flex items-center border border-slate-300 bg-slate-900 px-4 py-2 font-medium text-slate-200 hover:bg-slate-800 focus:z-10 focus:border-slate-500 focus:outline-none focus:ring-1 focus:ring-slate-500 transition-all"
                                                        >
                                                            {el.title}
                                                        </button>
                                                    )}
                                                {i === feedMenu.length - 1 && (
                                                    <button
                                                        type="button"
                                                        className="relative -ml-px inline-flex items-center rounded-r-md border border-slate-300 bg-slate-900 px-4 py-2 font-medium text-slate-200 hover:bg-slate-800 focus:z-10 focus:border-slate-500 focus:outline-none focus:ring-1 focus:ring-slate-500 transition-all"
                                                    >
                                                        {el.title}
                                                    </button>
                                                )}
                                            </>
                                        ) : (
                                            <>
                                                {i === 0 && (
                                                    <button
                                                        type="button"
                                                        className="relative inline-flex items-center rounded-l-md border border-slate-300 bg-slate-700 px-4 py-2 font-medium text-slate-200 hover:bg-slate-800 focus:z-10 focus:border-slate-500 focus:outline-none focus:ring-1 focus:ring-slate-500 transition-all"
                                                        onClick={() => setFeed(i)}
                                                    >
                                                        {el.title}
                                                    </button>
                                                )}
                                                {i > 0 &&
                                                    i < feedMenu.length - 1 && (
                                                        <button
                                                            type="button"
                                                            className="relative -ml-px inline-flex items-center border border-slate-300 bg-slate-700 px-4 py-2 font-medium text-slate-200 hover:bg-slate-800 focus:z-10 focus:border-slate-500 focus:outline-none focus:ring-1 focus:ring-slate-500 transition-all"
                                                            onClick={() => setFeed(i)}
                                                        >
                                                            {el.title}
                                                        </button>
                                                    )}
                                                {i === feedMenu.length - 1 && (
                                                    <button
                                                        type="button"
                                                        className="relative -ml-px inline-flex items-center rounded-r-md border border-slate-300 bg-slate-700 px-4 py-2 font-medium text-slate-200 hover:bg-slate-800 focus:z-10 focus:border-slate-500 focus:outline-none focus:ring-1 focus:ring-slate-500 transition-all"
                                                        onClick={() => setFeed(i)}
                                                    >
                                                        {el.title}
                                                    </button>
                                                )}
                                            </>
                                        )}
                                    </div>
                                ))}
                            </span>
                        </div>

                        {data == null ? (
                            <Loading></Loading>
                        ) : (
                            <div className="flex items-start gap-4">
                                {news
                                    .filter((el) => el.id === 1)
                                    .map((el) => (
                                        <div
                                            key={el.id}
                                            className="flex flex-col w-1/2"
                                        >
                                            <div className="flex flex-col gap-2">
                                                <div className="relative rounded-lg hover:opacity-80 w-full h-60 lg:h-96 bg-slate-900">
                                                    <Image
                                                        src={el.imgUrl}
                                                        layout="fill"
                                                        objectFit="contain"
                                                        alt={el.title}
                                                        className="hover:scale-110 transition-all duration-500"
                                                    />
                                                </div>
                                                <div className="flex flex-col gap-1">
                                                    <div className="font-semibold line-clamp-2 text-base lg:text-lg">
                                                        {el.title}
                                                    </div>
                                                    <div className="text-xs lg:text-sm line-clamp-2">
                                                        {el.description}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                <div className="flex flex-col w-1/2 gap-4">
                                    {news
                                        .filter((el) => el.id > 1)
                                        .map((el) => (
                                            <div
                                                key={el.id}
                                                className="flex items-center gap-2"
                                            >
                                                <div className="relative rounded-lg hover:opacity-80 w-1/2 h-20 lg:h-32 bg-slate-900">
                                                    <Image
                                                        src={el.imgUrl}
                                                        layout="fill"
                                                        objectFit="contain"
                                                        alt={el.title}
                                                        className="hover:scale-110 transition-all duration-500"
                                                    />
                                                </div>
                                                <div className="w-1/2 flex flex-col gap-1">
                                                    <div className="font-semibold w-full line-clamp-2 text-base lg:text-lg">
                                                        {el.title}
                                                    </div>
                                                    <div className="text-xs lg:text-sm line-clamp-2">
                                                        {el.description}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default MainListNews;
