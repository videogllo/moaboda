const searchResult = (data) => {
    return(
        <>
            {data.result.map(i => <div key={i.id}>{i.name}</div>)}
        </>
    )
}

export const getServerSideProps = async (context) => {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + `api/search/result?q=` + context.query.q);
    const data = await res.json();
    
    console.log("client에서 받은 데이터 : ", data)
    
    return {props: data};
}
export default searchResult;