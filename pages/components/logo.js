import Image from "next/image";
import Link from "next/link";

const Logo = () => {
    return (
        <div className="w-[400px] h-32 relative">
            <Link href="/">
                <Image
                    src="/image/logo/logo_dark_border.png"
                    alt="logo"
                    layout="fill"
                    objectFit="contain"
                    className="cursor-pointer"
                ></Image>
            </Link>
        </div>
    );
};
export default Logo;
