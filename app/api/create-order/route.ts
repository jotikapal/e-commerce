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
    // return NextResponse.json({message: "svjk"}, { status: 201 });
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

export const GET = async () => {
  try {
    await connect();

    const order = await Order.find().populate("userId").populate("addressId");
    console.log(order, "order");
    return NextResponse.json(order, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { message: "failed to get order", error: error.message },
      { status: 500 }
    );
  }
};

// User -
// cont user = User.findOne({ email: emal});
// User.findById(id)
// User.find({ userType: 'amdin'}).sort().populate()

// // user find karna , user  karna and then udpate
// user.phoneNo = 12321321;
// user.firstName = sdfsdfsdf;

// await user.save()

// // data sidha update karna hia
// User.findOneAndUpdate({ email: emal}, {
//     phoneNo:23434
// })

// User.findOneAndDelete({ emal: email})

// api/update-rode-from-store
// orderId
// paid:true

// // userId
// // totalPurchasedOrders
// const order = Order.findById(orderId); // 1000
// addressId, userId, products, totoaPrice
// const userId = order.userId;

// const user = User.findById(userId);
// const { totalPurchasedOrders } = user; `1000` 500
// const updatedTotalPruchaseOrder = totoaPrice + totalPurchasedOrders;
// user.totalPurchasedOrders = updatedTotalPruchaseOrder;
// awiat user.save();
