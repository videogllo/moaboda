//functional
import Image from "next/image";

const BannerLine = () => {
    return (
        <>
            <div className="w-full">
                <div className="bg-black/20 flex justify-center items-center shadow-lg">
                    <div className="w-full h-6 sm:h-8 md:h-10 lg:h-12 relative">
                        <Image
                            src="/image/banner/bannerLine.png"
                            alt="bannerLine"
                            layout="fill"
                            objectFit="contain"
                        ></Image>
                    </div>
                </div>
            </div>
        </>
    );
};
export default BannerLine;
