import { connect } from "@/db/db";
import { NextResponse } from "next/server";
import Order from "@/models/Order";

export const GET = async ({ params }: { params: { id: string } }) => {
  try {
    await connect();

    const order = await Order.findById(params.id)
      .populate("userId")
      .populate("addressId");
    console.log(order, "order");
    if (!order) {
      return NextResponse.json(
        { message: "Orders not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(order, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { message: "failed to get order", error: error.message },
      { status: 500 }
    );
  }
};

export const DELETE = async (req: Request, { params }: { params: { id: string } }) => {
    try {
        await connect();
        await Order.findByIdAndDelete(params.id);
        return NextResponse.json({ message: "Order deleted successfully" }, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ message: "Failed to delete Order" }, { status: 500 })
    }
}