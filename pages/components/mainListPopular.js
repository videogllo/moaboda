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

    if (data !== null) {
        return (
            <div className="mt-12">
                <h1 className="text-2xl font-extrabold font-NanumSquareNeo">
                    지금 인기있는 영상
                </h1>

                <div className="bg-slate-300 p-4 mt-4 rounded-xl shadow-xl">
                    <div className="mx-auto">
                        <div className="items-baseline justify-between flex pb-2">
                            <h2 className="text-xl font-bold tracking-tight text-gray-900">
                                Youtube
                            </h2>
                            <a
                                href="#"
                                className="text-sm font-semibold text-blue-800 hover:text-blue-700"
                            >
                                More
                                <span aria-hidden="true"> &rarr;</span>
                            </a>
                        </div>

                        <Swiper
                            slidesPerView={3}
                            spaceBetween={20}
                            // slidesPerGroup={3}
                            loop={true}
                            mousewheel={true}
                            loopFillGroupWithBlank={true}
                            pagination={{
                                type: "progressbar",
                            }}
                            modules={[Pagination, Mousewheel]}
                            className="mySwiper"
                        >
                            {data.result[0].youtube.map((i) => (
                                <a
                                    key={i.id}
                                    href={i.url}
                                    className="group cursor-pointer"
                                >
                                    <SwiperSlide>
                                        <img
                                            src={i.url}
                                            alt={i.title}
                                            className="h-full w-full object-cover object-center cursor-grab hover:opacity-90 duration-150 ease-in-out p-0.5 md:p-1 bg-slate-800 rounded-lg"
                                            width={100}
                                            height={100}
                                        />
                                    </SwiperSlide>
                                </a>
                            ))}
                        </Swiper>
                    </div>
                </div>

                <div className="bg-slate-300 p-4 mt-4 rounded-xl shadow-xl">
                    <div className="mx-auto">
                        <div className="items-baseline justify-between flex pb-2">
                            <h2 className="text-xl font-bold tracking-tight text-gray-900">
                                Twitch
                            </h2>
                            <a
                                href="#"
                                className="text-sm font-semibold text-blue-800 hover:text-blue-700"
                            >
                                More
                                <span aria-hidden="true"> &rarr;</span>
                            </a>
                        </div>

                        <Swiper
                            slidesPerView={3}
                            spaceBetween={20}
                            // slidesPerGroup={3}
                            loop={true}
                            mousewheel={true}
                            loopFillGroupWithBlank={true}
                            pagination={{
                                type: "progressbar",
                            }}
                            modules={[Pagination, Mousewheel]}
                            className="mySwiper"
                        >
                            {data.result[1].twitch.map((i) => (
                                <a
                                    key={i.id}
                                    href={i.url}
                                    className="group cursor-pointer"
                                >
                                    <SwiperSlide>
                                        <img
                                            src={i.url}
                                            alt={i.title}
                                            className="h-full w-full object-cover object-center cursor-grab hover:opacity-90 duration-150 ease-in-out p-0.5 md:p-1 bg-slate-800 rounded-lg"
                                            width={100}
                                            height={100}
                                        />
                                    </SwiperSlide>
                                </a>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        );
    }
};
export default MainListPopular;
