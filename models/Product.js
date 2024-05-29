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
        category:{
            type: String,
            required: true
        },
        subcategory:{
            type: String,
            required: true
        },
        variants:{
            type: String,
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