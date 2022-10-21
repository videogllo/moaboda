//asset
import Image from "next/image";

const iconData = [
    { name: "afreecaTV", imgUrl: "/image/icon/afreecaTV.png" },
    { name: "appleTV", imgUrl: "/image/icon/apple-tv.png" },
    { name: "coupangPlay", imgUrl: "/image/icon/coupangPlay.png" },
    { name: "disney+", imgUrl: "/image/icon/disney+.png" },
    { name: "hboMax", imgUrl: "/image/icon/hboMax.png" },
    { name: "neflix", imgUrl: "/image/icon/neflix.png" },
    { name: "primeVideo", imgUrl: "/image/icon/primeVideo.png" },
    { name: "tiktok", imgUrl: "/image/icon/tiktok.png" },
    { name: "tving", imgUrl: "/image/icon/tving.png" },
    { name: "twitch", imgUrl: "/image/icon/twitch.png" },
    { name: "watcha", imgUrl: "/image/icon/watcha.png" },
    { name: "wayvve", imgUrl: "/image/icon/wayvve.png" },
    { name: "youtube", imgUrl: "/image/icon/youtube.png" },
];

const MainIconFilter = () => {
    return (
        <div className="my-12 flex gap-4 w-screen">
            {iconData.map((i) => (
                <button className="w-[50px] h-[50px] bg-slate-400 rounded-lg opacity-50 hover:opacity-100 ease-in-out duration-200">
                    {/* <Image src={i.imgUrl} width={50} height={50}></Image> */}
                </button>
            ))}
        </div>
    );
};
export default MainIconFilter;
