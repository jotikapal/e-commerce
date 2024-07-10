import mongoose from "mongoose";
import { type } from "os";
const { Schema } = mongoose;
const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            unique: true,
            require: true,
        },
        password: {
            type: String,
            required: true
        },
        userType: {
            type: String,
            enum: ['CUSTOMER', 'ADMIN'],
            default: 'CUSTOMER'
        }
    },
    { timestamps: true }
)
export default mongoose.models.User || mongoose.model("User", userSchema);