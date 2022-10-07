import { useRouter } from "next/router";
import { useEffect } from "react";

const searchResult = ({data}) => {
    return(
        <>
            검색 내용 : {data.value}
        </>
    )
}

export async function getServerSideProps() {

    

    const res = await fetch(`http://localhost:3000/api/search/result?q=`+"12");

    const data = await res.json();

    return {props: {data}};
}

export default searchResult;