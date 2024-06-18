import Category from "@/models/Category";
import { connect } from '@/db/db';
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { z } from "zod";

export const DELETE = async (req: Request, { params }: { params: { id: string } }) => {
    try {
        await connect();
        await Category.findByIdAndDelete(params.id);
        return NextResponse.json({ message: "Category deleted successfully" }, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ message: "Failed to delete Category" }, { status: 500 })
    }
}

const categorySchema = z.object({
    name: z.string().min(3, { message: "must be 3 or more characters long" }).max(20,{message:"must be max 20 characters"})
})

export const PATCH = async (req: Request, { params }: { params: { id: string } }) => {
    // const session = await getServerSession();

    // if (!session) {
    //     return NextResponse.json({ message: "Not Logged in" }, { status: 401 });
    // }

    try {
        const body = await req.json();
        const parsedData = categorySchema.parse(body)
        await connect();

        const category = await Category.findById(params.id);
        if (!category) {
            return NextResponse.json({ message: "Category not found" }, { status: 404 });
        }

        category.name = parsedData.name;
        await category.save();

        return NextResponse.json(category, { status: 200 });

    } catch (error: any) {
        return NextResponse.json({ message: "Failed to update Category", error: error.message }, { status: 500 })
    }
}