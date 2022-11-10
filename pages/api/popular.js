import createHandler from "./middleware";
import Popular from "./models/popular";

const app = createHandler();

app.get(async (req, res) => {
    const count = req.query.count; //불러올 데이터 개수

    if (req.query.filter) {
        //요청 파라미터에 플랫폼 필터 요청이 있다면
        const result = await Popular.find({
            platform: { $in: req.query.filter.split(",") },
        }).limit(count);
        const length = await Popular.find({}).count();
        return res.status(200).json({ data: result, maxLength: length });
    } else if (req.query.count) {
        //요청 파라미터에 개수 제한 요청이 있다면
        const result = await Popular.find({}).limit(count);
        const length = await Popular.find({}).count();
        return res.status(200).json({ data: result, maxLength: length });
    } else {
        //전체
        const result = await Popular.find({});
        const length = await Popular.find({}).count();
        return res.status(200).json({ data: result, maxLength: length });
    }
});

app.post(async (req, res) => {
    console.log("db 저장 해보자고~! (popular API)");
    console.log(req.body);

    const items = req.body;
    let result = null;

    for (let i = 0; i < items.length; i++) {
        var popular = new Popular(items[i]);
        try {
            result = await popular.save();
        } catch (error) {
            console.log(error);
        }
    }
    return res.status(200).json(result);
});

export default app;
