import Image from "next/image";

const LogoSmall = () => {
    return (
        <div className="w-[40px] h-[40px] relative">
            <Image
                src="/image/logo/logo_small.png"
                alt="logo"
                layout="fill"
                objectFit="contain"
            ></Image>
        </div>
    );
};
export default LogoSmall;
