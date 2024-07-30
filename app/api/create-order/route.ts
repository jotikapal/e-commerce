import { connect } from "@/db/db";
import { NextResponse } from "next/server";
import Order from "@/models/Order";
import User from "@/models/User";
import Address from "@/models/Address";

export const POST = async (req: any) => {
  try {
    const {
      userId,
      addressId,
      firstName,
      lastName,
      email,
      contactNumber,
      addressLine,
      city,
      state,
      zipCode,
      products,
      totalPrice,
    } = await req.json();
    await connect();

    const user = await User.findById(userId);
    if (!user) {
      return new NextResponse("User not found", { status: 404 });
    }

    const address = await Address.findById(addressId);
    if (!address) {
      return new NextResponse("Address not found", { status: 404 });
    }

    const newOrder = new Order({
      userId,
      addressId,
      products,
      totalPrice,
    });
    await newOrder.save();
    return new NextResponse("Order is registered", { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};

export const GET = async () => {
  try {
    await connect();

    const order = await Order.find().populate("userId").populate("addressId");
    return NextResponse.json(order, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { message: "failed to get order", error: error.message },
      { status: 500 }
    );
  }
};
