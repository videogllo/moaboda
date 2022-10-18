//statement
import { useEffect } from "react";

const MainList = (props) => {
    useEffect(() => {
        console.log(props.result[0].youtube[0].id);
    }, []);

    return (
        <div>
            {/* props.result[0].youtube[0].url */}
            <div>
                <div className="flex flex-col md:flex-row w-full h-[500px] gap-4">
                    <div className="flex flex-col w-full h-full gap-1">
                        <div className="items-baseline justify-between flex">
                            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                                Youtube
                            </h2>
                            <a
                                href="#"
                                className="text-sm font-semibold text-blue-800 hover:text-blue-700"
                            >
                                More
                                <span aria-hidden="true"> &rarr;</span>
                            </a>
                        </div>
                        <div className="gap-1 w-full h-full flex flex-row overflow-x-auto">
                            <div className=" w-full h-full flex flex-col md:w-3/4">
                                <div className="rounded-lg shadow-lg h-full w-full bg-center bg-[url('https://i.ytimg.com/vi/_PPUN5IFbtE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDXkN1iedWchcxc-pX1etPwH940pA')]"></div>
                                <p className="truncate">
                                    youtube title area
                                </p>
                            </div>

                            <div className="gap-1 h-full w-full md:w-1/4 flex flex-row md:flex-col flex-none">
                                <div className="w-full h-full flex flex-col">
                                    <div className="rounded-lg shadow-lg w-full h-full bg-center bg-[url('https://i.ytimg.com/vi/_PPUN5IFbtE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDXkN1iedWchcxc-pX1etPwH940pA')]"></div>
                                    <p className="truncate">
                                        youtube title area
                                    </p>
                                </div>
                                <div className="w-full h-full flex flex-col">
                                    <div className="rounded-lg shadow-lg w-full h-full bg-center bg-[url('https://i.ytimg.com/vi/_PPUN5IFbtE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDXkN1iedWchcxc-pX1etPwH940pA')]"></div>
                                    <p className="truncate">
                                        youtube title area
                                    </p>
                                </div>
                                <div className="w-full h-full flex flex-col">
                                    <div className="rounded-lg shadow-lg w-full h-full bg-center bg-[url('https://i.ytimg.com/vi/_PPUN5IFbtE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDXkN1iedWchcxc-pX1etPwH940pA')]"></div>
                                    <p className="truncate">
                                        youtube title area
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col w-full h-full gap-1">
                        <div className="items-baseline justify-between flex">
                            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                                Youtube
                            </h2>
                            <a
                                href="#"
                                className="text-sm font-semibold text-blue-800 hover:text-blue-700"
                            >
                                More
                                <span aria-hidden="true"> &rarr;</span>
                            </a>
                        </div>
                        <div className="gap-1 w-full h-full flex flex-row overflow-x-auto">
                            <div className=" w-full h-full flex flex-col md:w-3/4">
                                <div className="rounded-lg shadow-lg h-full w-full bg-center bg-[url('https://i.ytimg.com/vi/_PPUN5IFbtE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDXkN1iedWchcxc-pX1etPwH940pA')]"></div>
                                <p className="truncate">
                                    youtube title area
                                </p>
                            </div>

                            <div className="gap-1 h-full w-full md:w-1/4 flex flex-row md:flex-col flex-none">
                                <div className="w-full h-full flex flex-col">
                                    <div className="rounded-lg shadow-lg w-full h-full bg-center bg-[url('https://i.ytimg.com/vi/_PPUN5IFbtE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDXkN1iedWchcxc-pX1etPwH940pA')]"></div>
                                    <p className="truncate">
                                        youtube title area
                                    </p>
                                </div>
                                <div className="w-full h-full flex flex-col">
                                    <div className="rounded-lg shadow-lg w-full h-full bg-center bg-[url('https://i.ytimg.com/vi/_PPUN5IFbtE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDXkN1iedWchcxc-pX1etPwH940pA')]"></div>
                                    <p className="truncate">
                                        youtube title area
                                    </p>
                                </div>
                                <div className="w-full h-full flex flex-col">
                                    <div className="rounded-lg shadow-lg w-full h-full bg-center bg-[url('https://i.ytimg.com/vi/_PPUN5IFbtE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDXkN1iedWchcxc-pX1etPwH940pA')]"></div>
                                    <p className="truncate">
                                        youtube title area
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className="flex flex-col w-full h-full gap-1">
                        <div className="items-baseline justify-between flex">
                            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                                Youtube
                            </h2>
                            <a
                                href="#"
                                className="text-sm font-semibold text-blue-800 hover:text-blue-700"
                            >
                                More
                                <span aria-hidden="true"> &rarr;</span>
                            </a>
                        </div>
                        <div className="gap-1 w-full h-full flex flex-row overflow-x-auto">
                            <div className=" w-full h-full flex flex-col md:w-3/4">
                                <div className="h-full w-full bg-center bg-[url('https://i.ytimg.com/vi/_PPUN5IFbtE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDXkN1iedWchcxc-pX1etPwH940pA')]"></div>
                                <p className="truncate">
                                    asdaasdkl;asdkl;daskl;asdkl;
                                </p>
                            </div>

                            <div className="gap-1 h-full w-full md:w-1/4 flex flex-row md:flex-col flex-none">
                                <div className="w-full h-full flex flex-col">
                                    <div className="w-full h-full bg-center bg-[url('https://i.ytimg.com/vi/_PPUN5IFbtE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDXkN1iedWchcxc-pX1etPwH940pA')]"></div>
                                    <p className="truncate">
                                        asdaasdkl;asdkl;daskl;asdkl;
                                    </p>
                                </div>
                                <div className="w-full h-full flex flex-col">
                                    <div className="w-full h-full bg-center bg-[url('https://i.ytimg.com/vi/_PPUN5IFbtE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDXkN1iedWchcxc-pX1etPwH940pA')]"></div>
                                    <p className="truncate">
                                        asdaasdkl;asdkl;daskl;asdkl;
                                    </p>
                                </div>
                                <div className="w-full h-full flex flex-col">
                                    <div className="w-full h-full bg-center bg-[url('https://i.ytimg.com/vi/_PPUN5IFbtE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDXkN1iedWchcxc-pX1etPwH940pA')]"></div>
                                    <p className="truncate">
                                        asdaasdkl;asdkl;daskl;asdkl;
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};
export default MainList;
