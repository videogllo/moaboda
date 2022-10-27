//asset
import Image from "next/image";
import { useEffect } from "react";

//statement
import { useRecoilState } from "recoil";
import { SELECT_FILTER } from "../../store/atom";

//swiper
// import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

//image assets
const iconData = [
    { name: "Youtube", imgUrl: "/image/icon/youtube.png" },
    { name: "Twitch", imgUrl: "/image/icon/twitch.png" },
    { name: "Shorts", imgUrl: "/image/icon/shorts.png" },
    { name: "Reels", imgUrl: "/image/icon/reels2.png" },
    { name: "Netflix", imgUrl: "/image/icon/netflix.png" },
    { name: "Tiktok", imgUrl: "/image/icon/tiktok.png" },
    { name: "AfreecaTV", imgUrl: "/image/icon/afreecaTV.png" },
    { name: "AppleTV", imgUrl: "/image/icon/appleTV.png" },
    { name: "Watcha", imgUrl: "/image/icon/watcha.png" },
    { name: "Wavve", imgUrl: "/image/icon/wavve.png" },
    { name: "CoupangPlay", imgUrl: "/image/icon/coupangPlay.png" },
    { name: "DisneyPlus", imgUrl: "/image/icon/disneyPlus.png" },
    { name: "HboMax", imgUrl: "/image/icon/hboMax.png" },
    { name: "PrimeVideo", imgUrl: "/image/icon/primeVideo.png" },
    { name: "Tving", imgUrl: "/image/icon/tving.png" },
];

const IconFilter = () => {
    const [SELECTFILTER, setSELECTFILTER] = useRecoilState(SELECT_FILTER);

    useEffect(() => {
        console.log(SELECTFILTER);
    }, [SELECTFILTER]);

    const selectFilter = (name) => {
        if (SELECTFILTER.includes(name)) {
            //중복된다면 배열에서 제거
            setSELECTFILTER(SELECTFILTER.filter((el) => el !== name));
        } else {
            //중복안되면 배열에 추가
            setSELECTFILTER((prev) => [...prev, name]);
        }
    };

    return (
        <div className="mt-12">
            <div className="flex items-center w-full">
                <div className="truncate">
                    {SELECTFILTER.length > 0 ? (
                        <>
                            {/* 필터 2개 이상 적용 */}
                            {SELECTFILTER.length > 1 ? (
                                <div className="flex truncate">
                                    <span className="text-xl xl:text-2xl font-bold tracking-tight">
                                        &nbsp;선택된 플랫폼에 대한 미디어 컨텐츠
                                    </span>
                                </div>
                            ) : (
                                //필터 1개 적용
                                <>
                                    {iconData
                                        .filter((el) =>
                                            SELECTFILTER.some(
                                                (el2) => el.name === el2
                                            )
                                        )
                                        .map((el) => (
                                            <div key={el.name}>
                                                <h2 className="text-xl xl:text-2xl font-bold tracking-tight">
                                                    {el.name}에서 검색된 미디어
                                                    컨텐츠
                                                </h2>
                                            </div>
                                        ))}
                                </>
                            )}
                        </>
                    ) : (
                        //필터 미적용
                        <>
                            <h2 className="text-xl xl:text-2xl font-bold tracking-tight">
                                인기 영화 및 TV 프로그램
                            </h2>
                        </>
                    )}
                </div>

                <div className="ml-auto">
                    <a
                        href="#"
                        className="text-xs md:text-sm font-semibold text-cyan-500 hover:text-cyan-700 transition-all whitespace-nowrap ml-4"
                        onClick={() => setSELECTFILTER([])}
                    >
                        초기화
                        <span aria-hidden="true">&nbsp;&#8635;</span>
                    </a>
                </div>
            </div>

            <div className="mt-2 w-full">
                {SELECTFILTER.length > 0 ? (
                    // 필터가 적용되었다면
                    <>
                        <Swiper
                            slidesPerView={10}
                            slidesPerGroup={10}
                            spaceBetween={10}
                            cssMode={true}
                            navigation={true}
                            breakpoints={{
                                0: {
                                    slidesPerView: 6,
                                    slidesPerGroup: 6,
                                    spaceBetween: 6,
                                },
                                640: {
                                    slidesPerView: 6,
                                    slidesPerGroup: 6,
                                    spaceBetween: 6,
                                },
                                768: {
                                    slidesPerView: 7,
                                    slidesPerGroup: 7,
                                    spaceBetween: 7,
                                },
                                1024: {
                                    slidesPerView: 8,
                                    slidesPerGroup: 8,
                                    spaceBetween: 8,
                                },
                                1280: {
                                    slidesPerView: 9,
                                    slidesPerGroup: 9,
                                    spaceBetween: 9,
                                },
                            }}
                            modules={[Navigation]}
                        >
                            {iconData.map((el) => (
                                <>
                                    <a
                                        key={el.id}
                                        href="#"
                                        className="group cursor-pointer"
                                    >
                                        <SwiperSlide>
                                            <button
                                                key={el.name}
                                                className={
                                                    // 배열에 있는 값과 선택한 아이콘이 같은 이름인지 구별
                                                    SELECTFILTER.includes(
                                                        el.name
                                                    )
                                                        ? "w-[50px] h-[50px] bg-slate-200 rounded-lg relative mx-2 my-2 transition-all opacity-100"
                                                        : "w-[50px] h-[50px] bg-slate-200 rounded-lg relative mx-2 my-2 transition-all opacity-30"
                                                }
                                                id={el.name}
                                                onClick={() =>
                                                    selectFilter(el.name)
                                                }
                                            >
                                                <Image
                                                    src={el.imgUrl}
                                                    layout="fill"
                                                    objectFit="contain"
                                                    className="rounded-lg scale-[1.02]"
                                                ></Image>
                                            </button>
                                        </SwiperSlide>
                                    </a>
                                </>
                            ))}
                        </Swiper>
                    </>
                ) : (
                    // 필터가 적용이 안되었다면
                    <>
                        <Swiper
                            slidesPerView={10}
                            slidesPerGroup={10}
                            spaceBetween={10}
                            cssMode={true}
                            navigation={true}
                            breakpoints={{
                                0: {
                                    slidesPerView: 6,
                                    slidesPerGroup: 6,
                                    spaceBetween: 6,
                                },
                                640: {
                                    slidesPerView: 6,
                                    slidesPerGroup: 6,
                                    spaceBetween: 6,
                                },
                                768: {
                                    slidesPerView: 7,
                                    slidesPerGroup: 7,
                                    spaceBetween: 7,
                                },
                                1024: {
                                    slidesPerView: 8,
                                    slidesPerGroup: 8,
                                    spaceBetween: 8,
                                },
                                1280: {
                                    slidesPerView: 9,
                                    slidesPerGroup: 9,
                                    spaceBetween: 9,
                                },
                            }}
                            modules={[Navigation]}
                        >
                            {iconData.map((el) => (
                                <a
                                    key={el.id}
                                    href="#"
                                    className="group cursor-pointer"
                                >
                                    <SwiperSlide>
                                        <button
                                            key={el.name}
                                            className="w-[50px] h-[50px] bg-slate-200 rounded-lg relative mx-2 my-2 transition-all"
                                            id={el.name}
                                            onClick={() =>
                                                selectFilter(el.name)
                                            }
                                        >
                                            <Image
                                                src={el.imgUrl}
                                                layout="fill"
                                                objectFit="contain"
                                                className="rounded-lg scale-[1.02]"
                                            ></Image>
                                        </button>
                                    </SwiperSlide>
                                </a>
                            ))}
                        </Swiper>
                    </>
                )}
            </div>
        </div>
    );
};
export default IconFilter;
