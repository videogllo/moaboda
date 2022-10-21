//funcional
import { useState, useEffect } from "react";

//swiper
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Mousewheel } from "swiper";

//component
import Loading from "./loading";

const MainListPopular = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        async function fnMainList() {
            await fetch("/api/main")
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    setData(data);
                });
        }
        fnMainList();
    }, []);

    return (
        <>
            <h1 className="text-2xl xl:text-3xl font-extrabold font-NanumSquareNeo">
                지금 인기있는 영상
            </h1>

            <div className="flex flex-col gap-6 mt-6">
                <div className="bg-slate-300 p-4 rounded-xl shadow-xl">
                    <div className="mx-auto">
                        <div className="items-baseline justify-between flex pb-2">
                            <h2 className="text-xl xl:text-2xl font-bold tracking-tight text-gray-900">
                                Youtube
                            </h2>
                            <a
                                href="#"
                                className="text-xs md:text-sm font-semibold text-blue-800 hover:text-blue-700"
                            >
                                More
                                <span aria-hidden="true"> &rarr;</span>
                            </a>
                        </div>

                        {data == null ? (
                            <Loading></Loading>
                        ) : (
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={20}
                                loop={true}
                                loopedSlides={4}
                                mousewheel={true}
                                loopFillGroupWithBlank={true}
                                breakpoints={{
                                    480: {
                                        slidesPerView: 2,
                                    },
                                    768: {
                                        slidesPerView: 3,
                                    },
                                    1280: {
                                        slidesPerView: 4,
                                    },
                                    1536: {
                                        slidesPerView: 5,
                                    },
                                }}
                                pagination={{
                                    type: "progressbar",
                                }}
                                modules={[Pagination, Mousewheel]}
                                className="mySwiper-youtube"
                            >
                                {data.result[0].youtube.map((i) => (
                                    <a
                                        key={i.id}
                                        href={i.url}
                                        className="group cursor-pointer"
                                    >
                                        <SwiperSlide>
                                            <div className="relative">
                                                <img
                                                    src={i.url}
                                                    alt={i.title}
                                                    className="h-full w-full object-cover object-center cursor-grab hover:opacity-80 duration-150 ease-in-out p-[2px] bg-slate-800 rounded-lg"
                                                    layout="fill"
                                                    objectFit="contain"
                                                />
                                            </div>
                                            <div className="absolute bottom-0 bg-black/70 w-full rounded-b-lg">
                                                <p className="w-5/6 text-slate-100 text-xs md:text-sm truncate mx-auto font-NanumSquareNeo font-semibold p-1">
                                                    {i.title}
                                                </p>
                                            </div>
                                        </SwiperSlide>
                                    </a>
                                ))}
                            </Swiper>
                        )}
                    </div>
                </div>

                <div className="bg-slate-300 p-4 rounded-xl shadow-xl">
                    <div className="mx-auto">
                        <div className="items-baseline justify-between flex pb-2">
                            <h2 className="text-xl xl:text-2xl font-bold tracking-tight text-gray-900">
                                Twitch
                            </h2>
                            <a
                                href="#"
                                className="text-xs md:text-sm font-semibold text-blue-800 hover:text-blue-700"
                            >
                                More
                                <span aria-hidden="true"> &rarr;</span>
                            </a>
                        </div>

                        {data == null ? (
                            <Loading></Loading>
                        ) : (
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={20}
                                loop={true}
                                mousewheel={true}
                                loopFillGroupWithBlank={true}
                                breakpoints={{
                                    480: {
                                        slidesPerView: 2,
                                    },
                                    768: {
                                        slidesPerView: 3,
                                    },
                                    1280: {
                                        slidesPerView: 4,
                                    },
                                    1536: {
                                        slidesPerView: 5,
                                    },
                                }}
                                pagination={{
                                    type: "progressbar",
                                }}
                                modules={[Pagination, Mousewheel]}
                                className="mySwiper-twitch"
                            >
                                {data.result[1].twitch.map((i) => (
                                    <a
                                        key={i.id}
                                        href={i.url}
                                        className="group cursor-pointer"
                                    >
                                        <SwiperSlide>
                                            <div className="relative">
                                                <img
                                                    src={i.url}
                                                    alt={i.title}
                                                    className="h-full w-full object-cover object-center cursor-grab hover:opacity-80 duration-150 ease-in-out p-[2px] bg-slate-800 rounded-lg"
                                                />
                                            </div>
                                            <div className="absolute bottom-0 bg-black/70 w-full rounded-b-lg">
                                                <p className="w-5/6 text-slate-100 text-xs md:text-sm truncate mx-auto font-NanumSquareNeo font-semibold py-1">
                                                    {i.title}
                                                </p>
                                            </div>
                                        </SwiperSlide>
                                    </a>
                                ))}
                            </Swiper>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};
export default MainListPopular;
