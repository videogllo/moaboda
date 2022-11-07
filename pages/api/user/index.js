import createHandler from "../middleware";
import User from "../models/user";

const app = createHandler();

app.get(async (req, res) => {
  const youtube = await User.find({});
  return res.status(200).json({ data: youtube });
});

app.post(async (req, res) => {
  console.log('db 저장 해보자고~! (회원가입)');
  console.log(req.body);

  const items = req.body.data;
  let result = null;

  for(let i = 0; i < items.length; i++){
    var youtube = new User(items[i]);
    try{
      result = await youtube.save();
    } catch (error) {
      console.log(error);
    }   
  }
  return res.status(200).json(result);
});

export default app;