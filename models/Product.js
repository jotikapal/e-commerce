import mongoose from "mongoose";
import { type } from "os";
const { Schema } = mongoose;
const productSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            unique: true,
            require: true,
        },
        image: {
            type: String,
            required: true
        },
        categoryId:{
            type: Schema.Types.ObjectId,
            ref:'Category',
            required: true
        },
        subCategoryId:{
            type: Schema.Types.ObjectId,
            ref:'Subcategory',
            required: true
        },
        variants:{
            type: Array,
            required: true
        },
        price: {
            type: Number,
            required:true
        }
    },
    { timestamps: true }
)
export default mongoose.models.Product || mongoose.model("Product", productSchema);