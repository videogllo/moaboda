import Image from "next/image";

const Loading = () => {
    return (
        <div>
            <div className="w-full h-screen z-20 absolute bg-black left-0 top-0 opacity-30">
            </div>
                <div className="absolute left-1/2 top-[45%] -translate-x-1/2">
                    <Image
                        src="/image/logo/logo.svg"
                        width={200}
                        height={100}
                    ></Image>
                </div>
        </div>
    );
};
export default Loading;