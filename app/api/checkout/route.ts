import connect from "@/db/db";
import User from "@/models/User";
import Order from "@/models/Order";
import Address from "@/models/Address";
import { NextResponse } from "next/server";

export const POST = async (req: any) => {
  try {
    const {
      firstName,
      lastName,
      email,
      contactNumber,
      addressLine,
      city,
      state,
      zipCode,
      productName,
      description,
      image,
      categoryId,
      subCategoryId,
      variants,
      price,
    } = await req.json();
    await connect();

    const newOrder = new Order({
      firstName,
      lastName,
      email,
      contactNumber,
      addressLine,
      city,
      state,
      zipCode,
      productName,
      description,
      image,
      categoryId,
      subCategoryId,
      variants,
      price,
    });
    await newOrder.save();

    return new NextResponse("Order is registered", { status: 201 });
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
};