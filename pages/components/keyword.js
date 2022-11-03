const Keyword = () => {
    return(
        <div className="flex items-center mt-2 text-xs md:text-sm truncate mx-2">
            <p>추천 검색어&#58;&ensp;</p>
            <div className="text-pink-500">
                <span className="mr-4 xl:hover:text-pink-700 cursor-pointer transition-all">#롤</span>
                <span className="mr-4 xl:hover:text-pink-700 cursor-pointer transition-all">#챌린지</span>
                <span className="mr-4 xl:hover:text-pink-700 cursor-pointer transition-all">#놀면뭐하니</span>
                <span className="mr-4 xl:hover:text-pink-700 cursor-pointer transition-all">#EPL</span>
                <span className="mr-4 xl:hover:text-pink-700 cursor-pointer transition-all">#손흥민</span>
            </div>
        </div>
    )
}
export default Keyword;