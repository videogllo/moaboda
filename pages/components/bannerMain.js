//swiper
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Mousewheel, Autoplay } from "swiper";

//component
import Loading from "./loading";

//functional
import { useState } from "react";

const BannerMain = () => {
    // const [data, setData] = useState(null);
    const [data, setData] = useState([
        {
            id: 1,
            name: "첫번째광고",
            imgUrl: "https://picsum.photos/1920/600",
            tarUrl: "https://picsum.photos/1920/600",
        },
        {
            id: 2,
            name: "두번째광고",
            imgUrl: "https://picsum.photos/1919/600",
            tarUrl: "https://picsum.photos/1919/600",
        },
        {
            id: 3,
            name: "세번째광고",
            imgUrl: "https://picsum.photos/1918/600",
            tarUrl: "https://picsum.photos/1918/600",
        },
    ]);

    return (
        <div className="mt-12">
            <div className="w-full rounded-lg">
                {data == null ? (
                    <Loading></Loading>
                ) : (
                    <Swiper
                        loop={true}
                        mousewheel={true}
                        slidesPerView={"auto"}
                        centeredSlides={true}
                        spaceBetween={20}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination, Mousewheel, Autoplay]}
                        className="mySwiper-bannerMain"
                    >
                        {data.map((i) => (
                            <a
                                key={i.id}
                                href="#"
                                className="group cursor-pointer"
                            >
                                <SwiperSlide
                                    onClick={() => {
                                        window.open(i.tarUrl);
                                    }}
                                >
                                    <div className="relative">
                                        <img
                                            src={i.imgUrl}
                                            alt={i.name}
                                            className="h-full w-full object-cover object-center cursor-grab hover:opacity-80 duration-150 ease-in-out"
                                        />
                                    </div>
                                </SwiperSlide>
                            </a>
                        ))}
                    </Swiper>
                )}
            </div>
        </div>
    );
};
export default BannerMain;
