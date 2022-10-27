//functional
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="mt-12 mb-6">
            <div className="my-6 w-full border border-slate-600 rounded-lg shadow-lg"></div>
            <div className="flex items-center w-full">
                <div className="w-full">
                    <h2 className="font-bold text-base md:text-lg mb-2">
                        비데오글로(Videogllo)
                    </h2>
                    <div className="text-xs md:text:sm">
                        <p>
                            주소 : 서울특별시 강서구 마곡중앙6로 11 315호
                            비데오글로
                        </p>
                        <p>사업자 등록번호 : 114-54-04443</p>
                        <p>대표 번호 : 02-2039-1690</p>
                        <p>제휴 문의 : videogllo@videogllo.com</p>
                    </div>
                    <div className="flex mt-2 text-xs md:text:sm gap-4">
                        <p className="text-cyan-500 hover:text-cyan-700 transition-all cursor-pointer">
                            이용약관
                        </p>
                        <p className="text-cyan-500 hover:text-cyan-700 transition-all cursor-pointer">
                            개인정보 처리 방침
                        </p>
                    </div>
                </div>
                <Link href="https:www.videogllo.com" passHref>
                    <a target="_blank" rel="noopener noreferrer">
                        <div className="w-36 h-14 relative ml-auto">
                            <Image
                                src="/image/logo/videogllo_dark.png"
                                layout="fill"
                                objectFit="contain"
                                className="cursor-pointer"
                            ></Image>
                        </div>
                    </a>
                </Link>
            </div>
        </footer>
    );
};
export default Footer;
