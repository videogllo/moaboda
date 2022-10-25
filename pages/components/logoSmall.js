import Image from "next/image";
import Link from "next/link";

const LogoSmall = () => {
    return (
        <div className="w-[40px] h-[40px] relative">
            <Link href="/">
                <Image
                    src="/image/logo/logo_small.png"
                    alt="logo"
                    layout="fill"
                    objectFit="contain"
                    className="cursor-pointer"
                ></Image>
            </Link>
        </div>
    );
};
export default LogoSmall;
