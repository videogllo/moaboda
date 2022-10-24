//functional
import Image from "next/image";
import { useState } from "react";
// import "@tailwindcss/line-clamp"; //enabled line-clamp

//component
import Loading from "./loading";


const news = [
    {
        from: "naver",
        title: "무신사 아웃렛, 월 사용자 수 100만명 돌파…고물가 여파",
        content:
            "고물가 여파로 합리적인 가격의 아웃렛을 찾는 소비자가 늘어나고 있다.",
        imgUrl: "/image/news/news1.jpg",
    },

    {
        sub: [
            {
                from: "naver",
                title: "엔데믹·해외여행 증가에 수영복 많이 팔린다…젝시믹스 판매량 3분기 72% ",
                content:
                    "9월 판매량도 전년비 30.1% 늘어 액티브웨어 브랜드 젝시믹스가 지난 3분기 스윔웨어",
                imgUrl: "/image/news/news2.jpg",
            },
            {
                from: "naver",
                title: "아모레, BTS 한정판 두번째 출시…립 슬리핑 마스크",
                content:
                    "두번째 협업 한정판 제품 BTS 콘셉트 라네즈 립 슬리핑 마스크 아모레퍼시픽이 방탄",
                imgUrl: "/image/news/news3.jpg",
            },
            {
                from: "naver",
                title: "W컨셉, SSG닷컴 럭셔리·프리미엄 상품 대거 확보",
                content:
                    "뷰티, 스포츠, 라이프 부문 강화 '룰루레몬', '맥', '까사미아' 등 SSG닷컴 상품 1만여 개",
                imgUrl: "/image/news/news4.jpg",
            },
        ],
    },
];

const test = "test";

const MainListNews = () => {
    const [data, setData] = useState("test"); //임시로 데이터 있게함 => default null로 변경할 것

    return (
        <div className="mt-12">
            {/* <h1 className="text-2xl xl:text-3xl font-extrabold font-NanumSquareNeo">
                영상 소식
            </h1> */}

            <div className="flex flex-col w-full">
                <div className="bg-slate-700 p-4 rounded-xl shadow-xl">
                    <div className="mx-auto">
                        <div className="items-baseline justify-between flex pb-2">
                            <h2 className="text-xl xl:text-2xl font-bold tracking-tight">
                                오늘의 피드
                            </h2>
                            <a
                                href="#"
                                className="text-xs md:text-sm font-semibold text-cyan-500 hover:text-cyan-700 transition-all"
                            >
                                더보기
                                <span aria-hidden="true"> &rarr;</span>
                            </a>
                        </div>
                        {data == null ? (
                            <Loading></Loading>
                        ) : (
                            <div className="flex items-start gap-4">
                                {news.map((el, i) => (
                                    <>
                                        <div
                                            key={i}
                                            className="flex flex-col w-1/2"
                                        >
                                            {i === 0 ? (
                                                <div className="flex flex-col gap-2">
                                                    <div className="relative rounded-lg hover:opacity-80 w-full h-60 lg:h-96 bg-slate-900">
                                                        <Image
                                                            src={el.imgUrl}
                                                            layout="fill"
                                                            objectFit="contain"
                                                            alt={el.title}
                                                        />
                                                    </div>
                                                    <div className="flex flex-col gap-1">
                                                        <div className="text-cyan-500 font-NanumSquareNeo font-semibold truncate text-base lg:text-lg">{el.title}</div>
                                                        <div className="text-xs lg:text-sm line-clamp-2">{el.content}</div>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="flex flex-col gap-4 item">
                                                    {el.sub.map((el) => (
                                                        <div className="flex items-center gap-2">
                                                            <div className="relative rounded-lg hover:opacity-80 w-1/2 h-20 lg:h-32 bg-slate-900">
                                                                <Image
                                                                    src={
                                                                        el.imgUrl
                                                                    }
                                                                    layout="fill"
                                                                    objectFit="contain"
                                                                    alt={
                                                                        el.title
                                                                    }
                                                                />
                                                            </div>
                                                            <div className="w-1/2 flex flex-col gap-1">
                                                                <div className="text-cyan-500 font-NanumSquareNeo font-semibold w-full truncate text-base lg:text-lg">
                                                                    {el.title}
                                                                </div>
                                                                <div className="text-xs lg:text-sm line-clamp-2">
                                                                    {el.content}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default MainListNews;
