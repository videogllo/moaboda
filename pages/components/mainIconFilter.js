//asset
import Image from "next/image";

const iconData = [
    { name: "afreecaTV", url: "/image/icon/afreecaTV.png" },
    { name: "appleTV", url: "/image/icon/apple-tv.png" },
    { name: "coupangPlay", url: "/image/icon/coupangPlay.png" },
    { name: "disney+", url: "/image/icon/disney+.png" },
    { name: "hboMax", url: "/image/icon/hboMax.png" },
    { name: "neflix", url: "/image/icon/neflix.png" },
    { name: "primeVideo", url: "/image/icon/primeVideo.png" },
    { name: "tiktok", url: "/image/icon/tiktok.png" },
    { name: "tving", url: "/image/icon/tving.png" },
    { name: "twitch", url: "/image/icon/twitch.png" },
    { name: "watcha", url: "/image/icon/watcha.png" },
    { name: "wayvve", url: "/image/icon/wayvve.png" },
    { name: "youtube", url: "/image/icon/youtube.png" },
];

const MainIconFilter = () => {
    return (
        <div className="my-12 flex gap-4">
            {iconData.map((i) => (
                <button className="w-16 h-16 bg-slate-400 rounded-lg opacity-50 hover:opacity-100 ease-in-out duration-200">
                    <Image src={i.url} width={100} height={100}></Image>
                </button>
            ))}
        </div>
    );
};
export default MainIconFilter;
