import Image from "next/image";

const Logo = () => {
    return (
        <div className="w-[400px] h-32 relative">
            <Image
                src="/image/logo/logo.png"
                alt="logo"
                layout="fill"
                objectFit="contain"
            ></Image>
        </div>
    );
};
export default Logo;
