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

        if(document.getElementById('searchInput').value == null || document.getElementById('searchInput').value == ''){
            alert('검색어를 입력해주세요!');
            return false;
        }
        
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
                                className="block w-full focus:outline-none rounded-none rounded-l-md bg-slate-700 placeholder:text-slate-200 text-cyan-300 pl-10 text-base md:text-lg lg:text-xl py-3 px-6"
                                placeholder="좋아하는 장르, 관심사를 검색해보세요."
                            />
                        </div>
                        <button
                            type="submit"
                            className="relative -ml-px inline-flex items-center space-x-2 rounded-r-md bg-slate-700 px-4 py-2 text-sm font-medium hover:bg-slate-800 focus:outline-none transition-all"
                        >
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
