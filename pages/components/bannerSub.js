import Image from "next/image";


const BannerSub = () => {
    return(<div className="mt-12 w-full h-20 sm:h-24 md:h-28 lg:h-32 bg-slate-800/40 rounded-lg flex justify-between items-center">
        <div className="w-32 h-32 md:w-48 lg:w-64 relative">
            <Image src="/image/banner/bannerSub1.jpg" alt="" layout="fill" objectFit="contain"></Image>
        </div>
        <div className="w-32 h-32 md:w-48 lg:w-64 relative">
            <Image src="/image/banner/bannerSub2.jpg" alt="" layout="fill" objectFit="contain"></Image>
        </div>
        <div className="w-32 h-32 md:w-48 lg:w-64 relative">
            <Image src="/image/banner/bannerSub3.jpg" alt="" layout="fill" objectFit="contain"></Image>
        </div>
        <div className="w-32 h-32 md:w-48 lg:w-64 relative">
            <Image src="/image/banner/bannerSub4.jpg" alt="" layout="fill" objectFit="contain"></Image>
        </div>
        <div className="w-32 h-32 md:w-48 lg:w-64 relative">
            <Image src="/image/banner/bannerSub5.jpg" alt="" layout="fill" objectFit="contain"></Image>
        </div>
    </div>)
}
export default BannerSub;