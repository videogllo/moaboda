//asset
import Image from "next/image";

//statement
import { useRecoilState } from "recoil";
import { SELECT_FILTER } from "../../store/atom";

//image assets
const iconData = [
    { name: "youtube", imgUrl: "/image/icon/youtube.png" },
    { name: "twitch", imgUrl: "/image/icon/twitch.png" },
    { name: "netflix", imgUrl: "/image/icon/netflix.png" },
    { name: "tiktok", imgUrl: "/image/icon/tiktok.png" },
    { name: "afreecaTV", imgUrl: "/image/icon/afreecaTV.png" },
    { name: "appleTV", imgUrl: "/image/icon/appleTV.png" },
    { name: "watcha", imgUrl: "/image/icon/watcha.png" },
    { name: "wayvve", imgUrl: "/image/icon/wayvve.png" },
    { name: "coupangPlay", imgUrl: "/image/icon/coupangPlay.png" },
    { name: "disneyPlus", imgUrl: "/image/icon/disneyPlus.png" },
    { name: "hboMax", imgUrl: "/image/icon/hboMax.png" },
    { name: "primeVideo", imgUrl: "/image/icon/primeVideo.png" },
    { name: "tving", imgUrl: "/image/icon/tving.png" },
];

const IconFilter = () => {
    const [SELECTFILTER, setSELECTFILTER] = useRecoilState(SELECT_FILTER);

    const selectFilter = (name) => {
        if (SELECTFILTER.includes(name)) {
            //중복된다면 배열에서 제거
            setSELECTFILTER(SELECTFILTER.filter((el) => el !== name));
            //active효과 해제
            const tar = document.getElementById(name);
            tar.style.opacity="1";
        } else {
            //중복안되면 배열에 추가
            setSELECTFILTER((prev) => [...prev, name]);
            //active효과 추가
            const tar = document.getElementById(name);
            tar.style.opacity=".3";
        }
    };

    return (
        <div className="mt-12 overflow-auto flex flex-wrap">
            {iconData.map((el) => (
                <>
                    <button
                        key={el.name}
                        onClick={() => selectFilter(el.name)}
                        className="w-[50px] h-[50px] bg-slate-200 rounded-lg relative mx-2 my-2 hover:opacity-70 transition-all"
                        id={el.name}
                    >
                        <Image
                            src={el.imgUrl}
                            layout="fill"
                            objectFit="contain"
                            className="rounded-lg scale-[1.02]"
                        ></Image>
                    </button>
                </>
            ))}
        </div>
    );
};
export default IconFilter;
