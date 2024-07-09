import { connect } from "@/db/db";
import { NextResponse } from "next/server";
import Order from "@/models/Order";

export const POST = async (req: any) => {
  try {
    const { name, email, contactNumber, address } = await req.json();
    await connect();

    const newOrder = new Order({ name, email, contactNumber, address });
    await newOrder.save();
    return new NextResponse("Order is registered", { status: 201 });
  } catch (error: any) {
    return new NextResponse(error, {
      status: 500,
    });
  }
};

export const GET = async () => {
  try {
    await connect();

    const order = await Order.find();
    return NextResponse.json(order, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { message: "failed to get order", error: error.message },
      { status: 500 }
    );
  }
}
