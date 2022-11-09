import createHandler from "./middleware";
import Twitch from "./models/twitch";

const app = createHandler();

app.get(async (req, res) => {
  const twitch = await Twitch.find({});
  return res.status(200).json({ data: twitch });
});

app.post(async (req, res) => {
  console.log('db 저장 해보자고~! (Twitch API)');
  console.log(req.body);

  const items = req.body.data;
  let result = null;

  for(let i = 0; i < items.length; i++){
    var twitch = new Twitch(items[i]);
    try{
      result = await twitch.save();
    } catch (error) {
      console.log(error);
    }   
  }
  return res.status(200).json(result);
});

export default app;