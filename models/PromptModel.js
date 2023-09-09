import  { Schema, model, models } from "mongoose";

const PromtSchema = new Schema({
    creator : {
        type: Schema.Types.ObjectId, 
        ref: "User",
    },
    prompt: {
        type: String, 
        required: [true, "Prompt required"],
    },
    tag: {
        type: String,
        required: [true, "Tag required"],
    }
}) 

const Prompt = models.Prompt || model("Prompt", PromtSchema)
export default Prompt