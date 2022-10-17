import Image from "next/image";

const Logo = () => {
    return (
        <div>
            <Image
                src="/image/logo/logo.png"
                alt="logo"
                width={360}
                height={100}
            ></Image>
        </div>
    );
};
export default Logo;
