import Image from "next/image";
import Link from "next/link";

const LogoSmall = () => {
    return (
        <div className="w-[40px] h-[40px] relative">
            <Link href="/">
                <a href="#">
                    <Image
                        src="/image/logo/logo_small.png"
                        alt="logo_small"
                        layout="fill"
                        objectFit="contain"
                        className="cursor-pointer"
                    ></Image>
                </a>
            </Link>
        </div>
    );
};
export default LogoSmall;
