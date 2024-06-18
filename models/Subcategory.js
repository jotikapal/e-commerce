import mongoose from "mongoose";
const { Schema } = mongoose;

const subcategory = new Schema({
    name: {
        type: String,
        required: true
    },
    categoryId: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
    }
})
export default mongoose.models.Subcategory || mongoose.model("Subcategory", subcategory);