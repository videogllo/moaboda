import Image from "next/image";
import Link from "next/link";

const Logo = () => {
    return (
        <Link href="/">
            {/* Link 태그 안에서는 a태그가 있어야함 */}
            <a href="#">
                <div className="w-[200px] md:w-[220px] lg:w-[240px] h-12 md:h-16 lg:h-20 relative">
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
