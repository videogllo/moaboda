import Image from "next/image";
import Link from "next/link";

const Logo = () => {
    return (
        <Link href="/">
            {/* Link 태그 안에서는 a태그가 있어야함 */}
            <a href="#">
                <div className="w-[200px] md:w-[220px] lg:w-[240px] h-16 md:h-20 lg:h-24 relative">
                    <Image
<<<<<<< HEAD
                        src="/image/logo/logo.png"
=======
                        src="image/logo/logo.png"
>>>>>>> feb6a1b75bd1d3f3bdd2715c579e04bbf8d0013f
                        alt="logo"
                        layout="fill"
                        objectFit="contain"
                        unoptimized={true}
                        className="cursor-pointer"
                    ></Image>
                </div>
            </a>
        </Link>
    );
};
export default Logo;
