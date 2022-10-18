//statement
import { useEffect } from "react";

const MainList = (props) => {
    useEffect(() => {
        console.log(props.result[0].youtube[0].id);
    }, []);

    return (
        <div>


            <div>
                <div className="mx-auto py-16">
                    <div className="sm:flex sm:items-baseline sm:justify-between">
                        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                            Youtube
                        </h2>
                        <a
                            href="#"
                            className="hidden text-sm font-semibold text-blue-800 hover:text-blue-700 sm:block"
                        >
                            More
                            <span aria-hidden="true"> &rarr;</span>
                        </a>
                    </div>

                    <div className="flex flex-row">
                        <div className="w-full h-full flex">
                            <div className="m-1 flex items-center">
                                <div className="w-[85%] m-1">
                                    <a
                                        href={props.result[0].youtube[0].url}
                                        className="group"
                                    >
                                        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                                            <img
                                                src={
                                                    props.result[0].youtube[0]
                                                        .url
                                                }
                                                alt={
                                                    props.result[0].youtube[0]
                                                        .title
                                                }
                                                className="h-full w-full object-cover object-center group-hover:opacity-75"
                                                width={100}
                                                height={100}
                                            />
                                        </div>
                                        <div className="mt-4 flex items-center">
                                            <h3 className="text-sm text-gray-700 text-ellipsis w-full whitespace-nowrap overflow-hidden">
                                                {
                                                    props.result[0].youtube[0]
                                                        .title
                                                }
                                            </h3>
                                        </div>
                                    </a>
                                </div>
                                <div className="h-full m-1 flex flex-col w-[25%]">
                                    {props.result[0].youtube.map((item, i) => (
                                        <div>
                                            {i > 2 ? (
                                                <>
                                                    <div
                                                        key={item.id}
                                                        className="h-full my-1 flex aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8"
                                                    >
                                                        <img
                                                            src={item.url}
                                                            alt={item.id}
                                                            className="h-full w-full object-cover object-center group-hover:opacity-75"
                                                        />
                                                    </div>
                                                    <div className="mt-1 flex items-center w-full">
                                                        <h3 className="text-sm text-gray-700 text-ellipsis overflow-hidden h-full whitespace-nowrap w-32">
                                                            {item.title}
                                                        </h3>
                                                    </div>
                                                </>
                                            ) : null}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        &emsp;

                        <div className="w-full h-full flex">
                            <div className="m-1 flex">
                                <div className="w-[85%] m-1">
                                    <a
                                        href={props.result[0].youtube[0].url}
                                        className="group"
                                    >
                                        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                                            <img
                                                src={
                                                    props.result[0].youtube[0]
                                                        .url
                                                }
                                                alt={
                                                    props.result[0].youtube[0]
                                                        .title
                                                }
                                                className="h-full w-full object-cover object-center group-hover:opacity-75"
                                                width={100}
                                                height={100}
                                            />
                                        </div>
                                        <div className="mt-4 flex items-center">
                                            <h3 className="text-sm text-gray-700 text-ellipsis w-full whitespace-nowrap overflow-hidden">
                                                {
                                                    props.result[0].youtube[0]
                                                        .title
                                                }
                                            </h3>
                                        </div>
                                    </a>
                                </div>
                                <div className="h-full m-1 flex flex-col w-[25%]">
                                    {props.result[0].youtube.map((item, i) => (
                                        <>
                                            {i > 2 ? (
                                                <>
                                                    <div
                                                        key={item.id}
                                                        className="h-full my-1 flex aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8"
                                                    >
                                                        <img
                                                            src={item.url}
                                                            alt={item.id}
                                                            className="h-full w-full object-cover object-center group-hover:opacity-75"
                                                        />
                                                    </div>
                                                    <div className="mt-1 flex items-center w-full">
                                                        <h3 className="text-sm text-gray-700 text-ellipsis overflow-hidden h-full whitespace-nowrap w-32">
                                                            {item.title}
                                                        </h3>
                                                    </div>
                                                </>
                                            ) : null}
                                        </>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* <div className="w-full h-[500px] flex bg-slate-300"></div> */}
                    </div>
{/* 
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br> */}
                </div>
            </div>

            <div>
                <div className="mx-auto max-w-2xl py-16 px-4 sm:py-20 sm:px-6 lg:max-w-7xl lg:px-8">
                    <div className="sm:flex sm:items-baseline sm:justify-between">
                        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                            Youtube
                        </h2>
                        <a
                            href="#"
                            className="hidden text-sm font-semibold text-blue-800 hover:text-blue-700 sm:block"
                        >
                            More
                            <span aria-hidden="true"> &rarr;</span>
                        </a>
                    </div>

                    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        {props.result[0].youtube.map((i) => (
                            <a key={i.id} href={i.url} className="group">
                                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                                    <img
                                        src={i.url}
                                        alt={i.title}
                                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <div className="mt-4 flex items-center">
                                    <h3 className="text-sm text-gray-700 text-ellipsis w-full whitespace-nowrap overflow-hidden">
                                        {i.title}
                                    </h3>
                                    {/* <p className="text-lg font-medium text-gray-900 ml-auto">
                                        22
                                    </p> */}
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <div>
                <div className="mx-auto max-w-2xl py-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                    <div className="sm:flex sm:items-baseline sm:justify-between">
                        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                            Twitch
                        </h2>
                        <a
                            href="#"
                            className="hidden text-sm font-semibold text-blue-800 hover:text-blue-700 sm:block"
                        >
                            More
                            <span aria-hidden="true"> &rarr;</span>
                        </a>
                    </div>

                    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        {props.result[1].twitch.map((i) => (
                            <a key={i.id} href={i.url} className="group">
                                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                                    <img
                                        src={i.url}
                                        alt={i.title}
                                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <div className="mt-4 flex items-center">
                                    <h3 className="text-sm text-gray-700">
                                        {i.title}
                                    </h3>
                                    {/* <p className="text-lg font-medium text-gray-900 ml-auto">
                                        22
                                    </p> */}
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default MainList;
