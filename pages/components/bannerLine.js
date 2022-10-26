//asset
import { XCircleIcon } from "@heroicons/react/24/outline";

//functional
import Image from "next/image";

const BannerLine = () => {
    return (
        <>
            <div className="w-full">
                <div className="bg-black/20 p-3 flex justify-center items-center shadow-lg">
                    {/* <div className="font-NanumSquareNeo text-slate-50 text-md md:text-lg font-semibold">
                        종합 미디어 컨텐츠 플랫폼 비데오아울
                    </div> */}

                    <div className="w-full h-6 sm:h-8 md:h-10 lg:h-12 relative">
                        <Image
                            src="/image/banner/bannerLine.png"
                            alt="bannerLine"
                            layout="fill"
                            objectFit="contain"
                        ></Image>
                    </div>

                    {/* <button
                        type="button"
                        className="inline-flex items-center rounded-full border border-transparent text-white shadow-sm absolute right-4 hover:text-cyan-900 transition-all"
                    >
                        <XCircleIcon className="h-6 w-6" aria-hidden="true" />
                    </button> */}
                </div>
            </div>
        </>
    );
};
export default BannerLine;
