import Image from "next/image";
import LogoSmall from "./components/logoSmall";

import SearchForm from "./components/searchForm";
import Keyword from "./components/keyword";
import BannerMain from "./components/bannerMain";
import Category from "./components/category";
import CategoryM from "./components/category_m"
import VideoAd from "./components/videoAd";
import Footer from "./components/footer";
import ResultList from "./components/resultList";

const Result = (props) => {
    const locationMain = (e) => {
        location.href=process.env.NEXT_PUBLIC_API_URL;
    }

    if(props != undefined && props != null && props.result != '없음'){
        return(
            <>
                {/* {props.result} */}
                <div className="bg-slate-900 overflow-hidden">
                    <div className="relative flex justify-center pt-7">
                        <div className="w-full md:w-[60%] flex justify-center items-center">
                            <div className="md:w-[180px] md:h-[80px] lg:w-[200px] lg:h-[100px] 2xl:w-[350px] 2xl:h-[150px] mr-8 relative hidden md:flex md:cursor-pointer" onClick={locationMain}>
                                <Image
                                    src="/image/logo/logo_dark_border.png"
                                    alt="logo"
                                    layout="fill"
                                    objectFit="contain"
                                ></Image>
                            </div>
                            <div className="block mr-3 md:hidden cursor-pointer" onClick={locationMain}>
                                <LogoSmall></LogoSmall>
                            </div>
                            <div className="w-[75%]">
                                <SearchForm></SearchForm>
                                <div className="hidden md:flex">
                                    <Keyword></Keyword>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative flex justify-center items-center pb-7">
                        <div className="w-full md:w-[58%]">
                            {/* <BannerMain></BannerMain> */}
                        </div>
                    </div>
                    <div className="hidden relative md:flex md:flex-col md:justify-center md:py-7">
                        {
                            props.result.length > 0 && props != undefined ? <Category props={props}></Category> : ''
                        }
                    </div>
                    <div className="relative block md:hidden">
                        {
                            props.result.length > 0 && props != undefined ? <CategoryM props={props}></CategoryM> : ''
                        }
                    </div>
                    {/* <div className="relative flex justify-center py-7">
                        <VideoAd></VideoAd>
                    </div>
                    <div className="relative flex justify-center">
                        {
                            props.result.length > 0 && props != undefined ? <ResultList props={props.result}/> : ''
                        }
                    </div> */}
                    <div className="h-40"></div>
                    <Footer></Footer>
                </div>
            </>
        )
    } else {
        return(
            <>
                {/* {props.result} */}
                <div className="bg-slate-900 overflow-hidden">
                    <div className="relative flex justify-center pt-7">
                        <div className="w-full md:w-[60%] flex justify-center items-center">
                            <div className="md:w-[180px] md:h-[80px] lg:w-[200px] lg:h-[100px] 2xl:w-[350px] 2xl:h-[150px] mr-8 relative hidden md:flex md:cursor-pointer" onClick={locationMain}>
                                <Image
                                    src="/image/logo/logo_dark_border.png"
                                    alt="logo"
                                    layout="fill"
                                    objectFit="contain"
                                ></Image>
                            </div>
                            <div className="block mr-3 md:hidden cursor-pointer" onClick={locationMain}>
                                <LogoSmall></LogoSmall>
                            </div>
                            <div className="w-[75%]">
                                <SearchForm></SearchForm>
                                <div className="hidden md:flex">
                                    <Keyword></Keyword>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative flex justify-center items-center pb-7">
                        <div className="w-full md:w-[58%]">
                            <BannerMain></BannerMain>
                        </div>
                    </div>
                    <div className="relative flex justify-center py-7">
                        <VideoAd></VideoAd>
                    </div>
                    <div className="relative flex justify-center">
                    </div>
                    <div className="h-40"></div>
                    <Footer></Footer>
                </div>
            </>
        );
    }
}

export async function getServerSideProps(context) {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + `api/result?q=` + context.query.q);
    const data = await res.json();
    return  { props: data };
}

export default Result;