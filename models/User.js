import mongoose from "mongoose";
const { Schema } = mongoose;
const userSchema = new Schema(
    {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
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
        },
        contactNumber: {
            type: Number,
          },
    },
    { timestamps: true }
)
export default mongoose.models.User || mongoose.model("User", userSchema);