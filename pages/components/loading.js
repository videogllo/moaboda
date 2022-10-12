import Image from "next/image";

const Loading = () => {
    return (
        <div className="w-full h-screen z-30 absolute bg-white left-0 top-0">
            <div className="absolute left-1/2 top-[45%] -translate-x-1/2">
                <Image
                    src="/asset/logo.svg"
                    width={200}
                    height={100}
                    className="animate-pulse"
                ></Image>
            </div>
        </div>
    );
};
export default Loading;