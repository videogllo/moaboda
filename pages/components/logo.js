import Image from "next/image";
import Link from "next/link";

const Logo = () => {
    return (
        <div className="w-[400px] md:w-[420px] lg:w-[440px] h-32 md:h-36 lg:h-40 relative">
            <Link href="/">
                <a href="#">
                    <Image
                        src="/image/logo/logo_dark_border.png"
                        alt="logo"
                        layout="fill"
                        objectFit="contain"
                        className="cursor-pointer"
                    ></Image>
                </a>
            </Link>
        </div>
    );
};
export default Logo;
