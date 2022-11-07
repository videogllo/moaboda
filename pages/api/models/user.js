import mongoose, { Schema } from "mongoose";

const MODEL_NAME = "User";

const schema = new Schema({
    id: String,
    password: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    name: String,
    birth: { type: Date, default: Date.now },
    age: { type: Number, default: 0, max: 50, index: true },
    likes: [String],
    any: [mongoose.Schema.Types.Mixed],
});

export default mongoose.models[MODEL_NAME] ||
    mongoose.model(MODEL_NAME, schema, "users");
