import Image from "next/image";

const Result = (props) => {
    return(
        <>
            {/* <Image src="/image/etc/youtube.svg" width={150} height={40} alt="logo"></Image> */}
            {props.result[0].youtube.map((i) => (
                // <div key={i.id}>
                //     <img src={i.url} />
                //     <p>{i.title}</p>
                //     <br />
                // </div>
                <div key={i.id}>{i.title}</div>
            ))}



        </>
    )
}

export const getServerSideProps = async (context) => {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + `api/result?q=` + context.query.q);
    const data = await res.json();
    
    // console.log("client에서 받은 데이터 : ", data);
    
    return {props: data};
}
export default Result;