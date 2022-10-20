import Image from "next/image";

const Logo = () => {
    return (
        <div>
            <Image
                src="/image/logo/logo.svg"
                alt="logo"
                height={100}
                width={351}
            ></Image>

        </div>
    );
};
export default Logo;
