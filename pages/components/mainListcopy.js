//statement
import { useEffect } from "react";

const MainList = (props) => {
    useEffect(() => {
        console.log(props.result[0].youtube[0].id);
    }, []);

    return (
        <>
            <>
                <div className="mx-auto pt-16">
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

                    <div className="mt-4 grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-8">
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
            </>

            <>
                <div className="mx-auto pt-16">
                <div className="items-baseline justify-between flex">
                            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                                Twitch
                            </h2>
                            <a
                                href="#"
                                className="text-sm font-semibold text-blue-800 hover:text-blue-700"
                            >
                                More
                                <span aria-hidden="true"> &rarr;</span>
                            </a>
                        </div>

                    <div className="mt-4 grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-8">
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
            </>

        </>
    );
};
export default MainList;
