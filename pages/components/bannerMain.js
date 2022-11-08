//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay, Navigation } from "swiper";

//component
import Loading from "./loading";

//functional
import Image from "next/image";
import { useEffect, useState } from "react";

//image
import Banner1 from "../../public/image/banner/mainBanner1.jpg"
import Banner2 from "../../public/image/banner/mainBanner2.jpg"
import Banner3 from "../../public/image/banner/mainBanner3.png"

const dataOrigin = [
    {
        id: 1,
        title: "tencent1",
        imgUrl: Banner1,
        tarUrl: "https://www.netflix.com/kr/title/81040344",
    },
    {
        id: 2,
        title: "tencent2",
        imgUrl: Banner2,
        tarUrl: "https://www.netflix.com/kr/title/81343748",
    },
    {
        id: 3,
        title: "tencent3",
        imgUrl: Banner3,
        tarUrl: "https://www.youtube.com/channel/UC1B6SalAoiJD7eHfMUA9QrA",
    },
];

const BannerMain = () => {
    // const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        // setTimeout(() => {
        setData(dataOrigin);
        // }, 3000);
    }, []);

    return (
        <div className="mt-8 md:mt-12">
            <div className="w-full rounded-lg">
                {data.length === 0 ? (
                    // <Loading></Loading>
                    <div className="h-40 sm:h-52 md:h-64 lg:h-72 w-full bg-slate-800 rounded-lg relative animate-pulse2 shadow-lg"></div>
                ) : (
                    <>
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
                        >
                            {/* 슬라이드 무작위 셔플 */}
                            {data
                                .sort(() => Math.random() - 0.5)
                                .map((el) => (
                                    <SwiperSlide
                                        key={el.id}
                                        onClick={() => {
                                            window.open(el.tarUrl);
                                        }}
                                        className="cursor-pointer"
                                    >
                                        <div className="relative h-40 sm:h-52 md:h-64 lg:h-72 w-full bg-slate-800/40 rounded-lg">
                                            <Image
                                                src={el.imgUrl}
                                                alt={el.title}
                                                layout="fill"
                                                objectFit="contain"
                                                unoptimized={true}
                                                priority={true} //image LCP 해결
                                            ></Image>
                                        </div>
                                    </SwiperSlide>
                                ))}
                        </Swiper>
                    </>
                )}
            </div>
        </div>
    );
};
export default BannerMain;
