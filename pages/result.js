import Image from "next/image";

import SearchForm from "./components/searchForm";
import Keyword from "./components/keyword";
import Banners from "./components/banners"
import Category from "./components/category";
import VideoAd from "./components/videoAd";
import Footer from "./components/footer";
import ResultList from "./components/resultList";

const Result = (props) => {
    return(
        <>
            {/* {props.result} */}
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
                    <Category props={props}></Category>
                </div>
                <div className="relative flex justify-center py-7">
                    <VideoAd></VideoAd>
                </div>
                <div className="relative flex justify-center">
                    <ResultList props={props.result}/>
                </div>
                <div className="h-40"></div>
                <Footer></Footer>
            </div>
        </>
    )
}

export async function getServerSideProps(context) {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + `api/result?q=` + context.query.q);
    const data = await res.json();
    return  { props: data };
}

export default Result;