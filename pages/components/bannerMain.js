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

const data = [
    {
        id: 1,
        title: "tencent1",
        imgUrl: "/image/banner/mainBanner1.jpg",
        tarUrl: "https://www.netflix.com/kr/title/81040344",
    },
    {
        id: 2,
        title: "tencent2",
        imgUrl: "/image/banner/mainBanner2.jpg",
        tarUrl: "https://www.netflix.com/kr/title/81343748",
    },
    {
        id: 3,
        title: "tencent3",
        imgUrl: "/image/banner/mainBanner3.png",
        tarUrl: "https://www.youtube.com/channel/UC1B6SalAoiJD7eHfMUA9QrA",
    },
    {
        id: 4,
        title: "tencent4",
        imgUrl: "/image/banner/mainBanner4.png",
        tarUrl: "https://www.youtube.com/channel/UCdtRAcd3L_UpV4tMXCw63NQ",
    },
    {
        id: 5,
        title: "tencent5",
        imgUrl: "/image/banner/mainBanner5.png",
        tarUrl: "https://www.youtube.com/c/%EB%B9%A0%EB%8B%88%EB%B3%B4%ED%8B%80PaniBottle",
    },
];

const BannerMain = () => {
    return (
        <div className="mt-12">
            <div className="w-full rounded-lg">
                {data == null ? (
                    <Loading></Loading>
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
                            {data.sort(() => Math.random() - 0.5).map((el) => (
                                <SwiperSlide
                                    key={el.id}
                                    onClick={() => {
                                        window.open(el.tarUrl);
                                    }}
                                >
                                    <div className="relative h-40 sm:h-52 md:h-64 lg:h-72 w-full bg-slate-800/40 rounded-lg">
                                        <Image
                                            src={el.imgUrl}
                                            alt={el.title}
                                            layout="fill"
                                            objectFit="contain"
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
