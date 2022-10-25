//swiper
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Mousewheel, Autoplay, Navigation } from "swiper";

//component
import Loading from "./loading";

//functional
import { useState } from "react";
import Image from "next/image";

const BannerMain = () => {
    // const [data, setData] = useState(null);
    const [data, setData] = useState([
        {
            id: 1,
            title: "tencent",
            imgUrl: "/image/banners/mainBanner1.png",
            tarUrl: "https://namu.wiki/w/%EB%A9%94%EB%A5%B4%EC%84%B8%EB%8D%B0%EC%8A%A4-%EB%B2%A4%EC%B8%A0%20G%ED%81%B4%EB%9E%98%EC%8A%A4",
        },
        {
            id: 2,
            title: "tencent",
            imgUrl: "/image/banners/mainBanner2.png",
            tarUrl: "https://namu.wiki/w/%EB%A9%94%EB%A5%B4%EC%84%B8%EB%8D%B0%EC%8A%A4-%EB%B2%A4%EC%B8%A0%20G%ED%81%B4%EB%9E%98%EC%8A%A4",
        },
        {
            id: 3,
            title: "tencent",
            imgUrl: "/image/banners/mainBanner3.png",
            tarUrl: "https://namu.wiki/w/%EB%A9%94%EB%A5%B4%EC%84%B8%EB%8D%B0%EC%8A%A4-%EB%B2%A4%EC%B8%A0%20G%ED%81%B4%EB%9E%98%EC%8A%A4",
        },
        {
            id: 4,
            title: "tencent",
            imgUrl: "/image/banners/mainBanner4.png",
            tarUrl: "https://namu.wiki/w/%EB%A9%94%EB%A5%B4%EC%84%B8%EB%8D%B0%EC%8A%A4-%EB%B2%A4%EC%B8%A0%20G%ED%81%B4%EB%9E%98%EC%8A%A4",
        },
        {
            id: 5,
            title: "tencent",
            imgUrl: "/image/banners/mainBanner5.png",
            tarUrl: "https://namu.wiki/w/%EB%A9%94%EB%A5%B4%EC%84%B8%EB%8D%B0%EC%8A%A4-%EB%B2%A4%EC%B8%A0%20G%ED%81%B4%EB%9E%98%EC%8A%A4",
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
                        navigation={true}
                        modules={[Pagination, Mousewheel, Autoplay, Navigation]}
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
                                    <div className="relative h-80 w-full bg-slate-800/40">
                                        {/* <img
                                            src={i.imgUrl}
                                            alt={i.name}
                                            className="h-32 w-full object-cover object-center cursor-grab hover:opacity-80 duration-150 ease-in-out"
                                        /> */}
                                        <Image src={i.imgUrl} alt={i.title} layout="fill" objectFit="contain"></Image>
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
