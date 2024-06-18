import mongoose from "mongoose";
const { Schema } = mongoose;
const categories = new Schema({
    name: {
        type: String,
        required: true
    }
})
export default mongoose.models.Category || mongoose.model("Category",categories);