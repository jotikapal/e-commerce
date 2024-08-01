import { connect } from "@/db/db";
import { NextResponse } from "next/server";
import Order from "@/models/Order";
import User from "@/models/User";
import Address from "@/models/Address";
import Product from "@/models/Product";

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
      products,
      totalPrice,
    } = await req.json();
    await connect();
    
    let user = await User.findOne({ email });

    if (user) {
      if (!user.contactNumber) {
        user.contactNumber = contactNumber;
      }
      user.lastName = lastName;
      await user.save();
    } else {
      user = new User({ firstName, lastName, email, contactNumber });
      await user.save();
    }

    const newAddress = new Address({
      addressLine,
      city,
      state,
      zipCode,
    });
    const savedAddress = await newAddress.save();

    const neededProductValues = products.map((item: any) => ({
      name: item.name,
      id: item._id,
      image: item.image,
      price: item.price,
    }));
    console.log(neededProductValues,"neededProductValues")

    const newOrder = new Order({
      userId: user._id,
      addressId: savedAddress._id,
      products: neededProductValues,
      //product name,id,image,price
      totalPrice,
      orderId:1111
    });
    await newOrder.save();
    return new NextResponse("Order is registered", { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};