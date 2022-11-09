import createHandler from "../middleware";
import Youtube from "../models/youtube";

const app = createHandler();

app.get(async (req, res) => {
  if(count > 0){
    const count = req.query.count; //요청 개수
    const youtube = await Youtube.find({}).limit(req.query.count);
  }else{
    const youtube = await Youtube.find({});
  }
  return res.status(200).json({ data: youtube });
});

app.post(async (req, res) => {
  console.log('db 저장 해보자고~! (Youtube API)');
  console.log(req.body);

  const items = req.body.data;
  let result = null;

  for(let i = 0; i < items.length; i++){
    var youtube = new Youtube(items[i]);
    try{
      result = await youtube.save();
    } catch (error) {
      console.log(error);
    }   
  }
  return res.status(200).json(result);
});

export default app;