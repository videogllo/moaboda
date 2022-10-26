//swiper
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay, Navigation } from "swiper";

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
            imgUrl: "/image/banner/mainBanner1.jpg",
            tarUrl: "https://www.netflix.com/kr/title/81040344",
        },
        {
            id: 2,
            title: "tencent",
            imgUrl: "/image/banner/mainBanner2.jpg",
            tarUrl: "https://www.netflix.com/kr/title/81343748",
        },
        {
            id: 3,
            title: "tencent",
            imgUrl: "/image/banner/mainBanner3.png",
            tarUrl: "https://www.youtube.com/channel/UC1B6SalAoiJD7eHfMUA9QrA",
        },
        {
            id: 4,
            title: "tencent",
            imgUrl: "/image/banner/mainBanner4.png",
            tarUrl: "https://www.youtube.com/channel/UCdtRAcd3L_UpV4tMXCw63NQ",
        },
        {
            id: 5,
            title: "tencent",
            imgUrl: "/image/banner/mainBanner5.png",
            tarUrl: "https://www.youtube.com/c/%EB%B9%A0%EB%8B%88%EB%B3%B4%ED%8B%80PaniBottle",
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
                        modules={[Pagination, Autoplay, Navigation]}
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
                                    <div className="relative h-32 sm:h-48 md:h-64 lg:h-80 w-full bg-slate-800/40">
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
