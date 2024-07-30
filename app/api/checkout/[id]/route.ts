import { NextResponse } from "next/server";
import connect from "@/db/db";
import Order from "@/models/Order";

export const GET = async (req: any, { params }: { params: { id: string } }) => {
    try {
      await connect();
  
      const data = await Order.findById(params.id);
       
      if(!data){
        return NextResponse.json({message:"Order not found"},{status:404});
      }
      return NextResponse.json(data,{status:200});
    } catch (error:any) {
        return new NextResponse(error, { status: 500 });
    }
  };