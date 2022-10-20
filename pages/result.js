import Image from "next/image";

import Logo from "./components/logo";
import SearchForm from "./components/searchForm";
import Keyword from "./components/keyword";
import Banners from "./components/banners"
import Category from "./components/category";

const Result = (props) => {
    return(
        <>
            <div className="bg-slate-100">
                <div className="relative flex justify-center py-7">
                    <div className="w-1/5 mr-8">
                        <Image
                            src="/image/logo/logo.png"
                            alt="logo"
                            width={550}
                            height={170}
                        ></Image>
                    </div>
                    <div className="w-3/5"><SearchForm></SearchForm><Keyword></Keyword></div>
                </div>
                <div className="relative flex justify-center py-7">
                    <Banners></Banners>
                </div>
                <div className="relative flex justify-center py-7">
                    <div className="w-4/5 flex-col justify-center">
                        <Category></Category>
                    </div>
                </div>
                {/* <div className="relative flex justify-center py-7">
                    <div className="flex">
                        {props.result[0].youtube.map((i) => (
                            <div key={i.id} className="flex">
                                <img src={i.url} width={350}/>
                                <p>{i.title}</p>
                                <br />
                            </div>
                        ))}
                    </div>
                </div> */}
                {/* <div className="relative flex justify-center py-7">
                    <div>
                        <Image src="/image/etc/youtube.svg" width={150} height={40} alt="logo"></Image>
                        {props.result[0].youtube.map((i) => (
                            <div key={i.id} className="relative flex items-start py-3">
                                <img src={i.url} width={350}/>
                                <div className="relative h-[190px] py-2 pl-1.5">
                                    <h4 className="text-xl h-1/4 font-extrabold">{i.title}</h4>
                                    <small className="absolute bottom-0">{i.date}</small>
                                    <p className="text-base h-2/5">{i.channel}</p>
                                    <ul>
                                        {i.tags.map((j) => {
                                            <li>{j}</li>
                                        })}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div> */}
                <div className="relative flex justify-center py-7">
                    <div>
                        <Image src="/image/etc/twitch.svg" width={150} height={40} alt="logo"></Image>
                        {/* {props.result[1].twitch.map((i) => (
                            <div key={i.id}>
                                <img src={i.url} />
                                <p>{i.title}</p>
                                <br />
                            </div>
                        ))} */}
                    </div>
                </div>
            </div>
        </>
    )
}

// export const getServerSideProps = async (context) => {
//     const res = await fetch(process.env.NEXT_PUBLIC_API_URL + `api/result?q=` + context.query.q);
//     const data = await res.json();
//     console.log("클라이언트 데이터 확인 : " + data.result[0].youtube);
//     return {props: data};
// }
export default Result;