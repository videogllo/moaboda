import createHandler from "../middleware";
import Popular from "../models/popular";

const app = createHandler();

app.get(async (req, res) => {
  console.log("yogiyo1");
  const popular = await Popular.find({});
  return res.status(200).json({ data: popular });
});

app.post(async (req, res) => {
  console.log("yogiyo2");
  console.log('db 저장 해보자고~! (popular API)');
  console.log(req.body);

  const items = req.body;
  let result = null;

  for(let i = 0; i < items.length; i++){
    var popular = new Popular(items[i]);
    try{
      result = await popular.save();
    } catch (error) {
      console.log(error);
    }   
  }
  return res.status(200).json(result);
});

export default app;