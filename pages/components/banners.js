import Image from "next/image";

const Banners = () => {
    return (
        <div className="w-full h-44">
            <Image
                src="/image/banners/banner1.png"
                alt="logo"
                layout="fill"
            ></Image>
        </div>
    );
};
export default Banners;
