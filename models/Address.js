import mongoose from "mongoose";

const { Schema } = mongoose;
const addressSchema = new Schema(
  {
    addressLine: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    zipCode: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);
export default mongoose.models.Address || mongoose.model('Address',addressSchema);