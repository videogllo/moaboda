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

                    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 xl:gap-x-8">
                        {props.result[0].youtube.map((i) => (
                            <a key={i.id} href={i.url} className="group">
                                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                                    <img
                                        src={i.url}
                                        alt={i.title}
                                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                                        width={1000}
                                        height={1000}
                                    />
                                </div>
                                <div className="mt-4 flex items-center">
                                    <h3 className="text-sm text-gray-700 text-ellipsis w-full whitespace-nowrap overflow-hidden">
                                        {i.title}
                                    </h3>
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
