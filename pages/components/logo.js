import Image from "next/image";
import Link from "next/link";

const Logo = () => {
    return (
        <Link href="/">
            {/* Link 태그 안에서는 a태그가 있어야함 */}
            <a href="#">
                <div className="w-[400px] md:w-[420px] lg:w-[440px] h-32 md:h-36 lg:h-40 relative">
                    <Image
                        src="/image/logo/logo_dark_border.png"
                        alt="logo"
                        layout="fill"
                        objectFit="contain"
                        className="cursor-pointer"
                    ></Image>
                </div>
            </a>
        </Link>
    );
};
export default Logo;
