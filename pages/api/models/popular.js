import mongoose, { Schema } from "mongoose";

const MODEL_NAME = "Popular";

const schema = new Schema(
  {
    id: String,
    title : String,     // 영상 제목
    href : String,      // 영상 링크
    imgUrl : String,    // 이미지 링크
    channel : String,   // 채널명
    quality : Number,   // 영상 필터링 기준
    date : Date,        // 업로드일
    tags : [
        String
    ],
    platform : String
  }
);

export default mongoose.models[MODEL_NAME] ||
  mongoose.model(MODEL_NAME, schema, "populars");