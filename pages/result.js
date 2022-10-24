import Image from "next/image";

import SearchForm from "./components/searchForm";
import Keyword from "./components/keyword";
import BannerMain from "./components/bannerMain";
import Category from "./components/category";
import VideoAd from "./components/videoAd";
import Footer from "./components/footer";
import ResultList from "./components/resultList";

const Result = (props) => {

    if(props != undefined && props != null){
        return(
            <>
                {/* {props.result} */}
                <div className="bg-slate-900 overflow-hidden">
                    <div className="relative flex justify-center pt-7">
                        <div className="w-[60%] flex justify-center items-center">
                            <div className="w-fit mr-8 flex justify-end ">
                                <Image
                                    src="/image/logo/logo.png"
                                    alt="logo"
                                    width={300}
                                    height={80}
                                ></Image>
                            </div>
                            <div className="w-[75%]"><SearchForm></SearchForm><Keyword></Keyword></div>
                        </div>
                    </div>
                    <div className="relative flex justify-center items-center pb-7">
                        <div className="w-[58%]">
                            <BannerMain></BannerMain>
                        </div>
                    </div>
                    <div className="relative flex justify-center py-7">
                        {
                            props.result.length > 0 && props != undefined ? <Category props={props}></Category> : ''
                        }
                    </div>
                    <div className="relative flex justify-center py-7">
                        <VideoAd></VideoAd>
                    </div>
                    <div className="relative flex justify-center">
                        {
                            props.result.length > 0 && props != undefined ? <ResultList props={props.result}/> : ''
                        }
                    </div>
                    <div className="h-40"></div>
                    <Footer></Footer>
                </div>
            </>
        )
    } else {
        return('');
    }
}

export async function getServerSideProps(context) {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + `api/result?q=` + context.query.q);
    const data = await res.json();
    return  { props: data };
}

export default Result;