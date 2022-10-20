//functional
import { useRef, useState } from "react";
import { useRouter } from "next/router";

//icon
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const SearchForm = () => {
    const router = useRouter();
    const inputRef = useRef();
    // const [isLoading, setIsLoading] = useState(false);

    const search = async (e) => {
        e.preventDefault();
        // setIsLoading(true);

        router.push({
            pathname: "/result",
            query: { q: inputRef.current.value },
        });
    };

    return (
        <>
            <form onSubmit={search}>
                <div>
                    <div className="flex rounded-md shadow-sm">
                        <div className="relative flex flex-grow items-stretch focus-within:z-10">
                            <label htmlFor="searchInput">
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                    🕵️‍♀️
                                </div>
                            </label>
                            <input
                                type="text"
                                id="searchInput"
                                name="text"
                                ref={inputRef}
                                className="block border w-full focus:outline-none rounded-none rounded-l-md border-gray-300 pl-10 focus:border-blue-900 focus:ring-blue-900 focus:ring-1 sm:text-lg py-2 px-6"
                                placeholder="좋아하는 장르, 관심사를 검색해보세요."
                            />
                        </div>
                        <button
                            type="submit"
                            className="relative -ml-px border inline-flex items-center space-x-2 rounded-r-md border-gray-300 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:border-blue-900 focus:outline-none focus:ring-1 focus:ring-blue-900"
                        >
                            {/* <MagnifyingGlassIcon
                                className="h-5 w-5 text-gray-400"
                                aria-hidden="true"
                            /> */}
                            <MagnifyingGlassIcon className="h-4 w-4"></MagnifyingGlassIcon>
                        </button>
                    </div>
                </div>
            </form>

            {/* {isLoading && <Loading></Loading>} */}
        </>
    );
};

export default SearchForm;
