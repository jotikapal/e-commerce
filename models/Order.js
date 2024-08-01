import mongoose from "mongoose";
import { type } from "os";

const { Schema } = mongoose;
const orderSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  addressId: {
    type: Schema.Types.ObjectId,
    ref: "Address",
    required: true,
  },
  products:{
    type:Array,
    required:true
  },
  totalPrice:{
    type:Number,
    required:true
  },
  orderId:{
    type:Number,
    required:true
  }
}, { timestamps: true });
export default mongoose.models.Order || mongoose.model("Order", orderSchema);
