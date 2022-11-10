//functional
import Image from "next/image";

//image
import BannerLineImage from "../../public/image/banner/bannerLine.webp";

const BannerLine = () => {
    return (
        <>
            <div className="w-full">
                <div className="bg-black/20 flex justify-center items-center shadow-lg">
                    <div className="w-full h-6 sm:h-8 md:h-10 lg:h-12 relative">
                        <Image
                            src={BannerLineImage}
                            alt="bannerLine"
                            layout="fill"
                            unoptimized={true}
                            objectFit="full"
                        ></Image>
                        
                    </div>
                </div>
            </div>
        </>
    );
};
export default BannerLine;
