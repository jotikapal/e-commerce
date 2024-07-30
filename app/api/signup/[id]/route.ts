import connect from "@/db/db";
import User from "@/models/User";
import { NextResponse } from "next/server";

export const GET = async (req: any, { params }: { params: { id: String } }) => {
  try {
    await connect();
    const data = await User.findById(params.id);

    if (!data) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }
    return NextResponse.json(data, { status: 200 });
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
};

export const DELETE = async (
  req: any,
  { params }: { params: { id: String } }
) => {
  try {
    await connect();

    await User.findByIdAndDelete(params.id);
    return NextResponse.json(
      { message: "User deleted successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { message: "Failed to delete User" },
      { status: 500 }
    );
  }
};
