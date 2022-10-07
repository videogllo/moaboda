// const axios = require("axios");

export default function handler(req, res) {

    // axios({
    //     method: "get",
    //     url: "https://jsonplaceholder.typicode.com/posts"
    // }).then(res => {
    //     console.log(res)
    // })

    console.log(req.query.q)

    res.send({value : req.query.q})
}
