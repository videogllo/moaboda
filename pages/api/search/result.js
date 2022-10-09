export default async function handler(req, res) {
    await fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
        let results = [];
        for(let i = 0; i < data.length; i++){
            results.push({id: data[i].id, name: data[i].name});
        }

        console.log("클라이언트로 보낼 최종 데이터 : ", results)
        res.send({result: results});
    })
}
