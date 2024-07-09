import mongoose  from "mongoose";

const { Schema } = mongoose;
const orderSchema = new Schema({
  name: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  email: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  contactNumber: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});
export default mongoose.models.Order || mongoose.model('Order',orderSchema);
