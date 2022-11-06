import Image from "next/image";


const BannerSub = () => {
    return(<div className="mt-8 md:mt-12 w-full bg-slate-800/40 rounded-lg flex justify-between items-center gap-2">
        <div className="w-32 h-32 md:w-48 lg:w-64 relative cursor-pointer">
            <Image src="/image/banner/bannerSub1.jpg" alt="" layout="fill" objectFit="contain"></Image>
        </div>
        <div className="w-32 h-32 md:w-48 lg:w-64 relative cursor-pointer">
            <Image src="/image/banner/bannerSub2.jpg" alt="" layout="fill" objectFit="contain"></Image>
        </div>
        <div className="w-32 h-32 md:w-48 lg:w-64 relative cursor-pointer">
            <Image src="/image/banner/bannerSub3.jpg" alt="" layout="fill" objectFit="contain"></Image>
        </div>
        <div className="w-32 h-32 md:w-48 lg:w-64 relative cursor-pointer">
            <Image src="/image/banner/bannerSub4.jpg" alt="" layout="fill" objectFit="contain"></Image>
        </div>
        <div className="w-32 h-32 md:w-48 lg:w-64 relative cursor-pointer">
            <Image src="/image/banner/bannerSub5.jpg" alt="" layout="fill" objectFit="contain"></Image>
        </div>
    </div>)
}
export default BannerSub;