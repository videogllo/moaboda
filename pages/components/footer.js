//functional
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="mt-12 mb-6">
            <div className="my-6 w-full border border-slate-600 rounded-lg shadow-lg"></div>
            <div className="flex w-full">
                <div className="w-full">
                    <h2
                        className="font-bold text-base md:text-lg mb-2 text-[#fce90a] cursor-pointer hover:text-[#fce90a]/60"
                        onClick={() => (window.location.href = "/")}
                    >
                        모아보다(MOABODA)
                    </h2>
                    <div className="text-xs md:text:sm">
                        <p>
                            주소 : 서울특별시 강서구 마곡중앙6로 11 315호
                            모아보다
                        </p>
                        <p>사업자 등록번호 : 114-54-04443</p>
                        <p>대표 번호 : 02-2039-1690</p>
                        <p>제휴 문의 : videogllo@videogllo.com</p>
                    </div>
                    <div className="flex mt-2 text-xs md:text:sm gap-4">
                        <Link href="../doc/service">
                            <p className="text-[#fce90a] xl:hover:text-[#fce90a]/60 transition-all cursor-pointer">
                                이용약관
                            </p>
                        </Link>
                        <Link href="../doc/policy">
                            <p className="text-[#fce90a] xl:hover:text-[#fce90a]/60 transition-all cursor-pointer">
                                개인정보 처리 방침
                            </p>
                        </Link>
                    </div>
                </div>
                <Link href="https://www.videogllo.com" passHref>
                    <a target="_blank" rel="noopener noreferrer">
                        <div className="w-36 h-14 relative ml-auto">
                            <Image
                                src="/image/logo/videogllo_dark.png"
                                layout="fill"
                                objectFit="contain"
                                className="cursor-pointer"
                                unoptimized={true}
                            ></Image>
                        </div>
                    </a>
                </Link>
            </div>
        </footer>
    );
};
export default Footer;
