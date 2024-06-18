import Subcategory from '@/models/Subcategory';
import { connect } from '@/db/db';
import { NextResponse } from 'next/server';
import { z } from "zod";
import { getServerSession } from 'next-auth';
import mongoose from 'mongoose';
import Category from '@/models/Category';

const categorySchema = z.object({
    name: z.string().min(3, { message: "must be 3 or more characters long" }).max(20, { message: "must be max 20 characters" })
})

export const POST = async (req: any) => {
    // const session = await getServerSession();
    // if(!session){
    //     return NextResponse.json({message:"Not logged in"},{status:401});
    // }
    try {
        const body = await req.json();
        const parsedData = categorySchema.parse(body)
        console.log(parsedData, "parsedData")
        await connect();

        const { name, categoryId } = body

        var isValid = mongoose.Types.ObjectId.isValid(categoryId);
        console.log(isValid, "isValid")

        if (!isValid) {
            return NextResponse.json({ message: "Category Id is invalid" }, { status: 400 })
        }
        const isCategoryIdExist = await Category.findById(categoryId)
        console.log(isCategoryIdExist,"isCategoryIdExist")

        if(!isCategoryIdExist){
            return NextResponse.json({message:"Category Id doest not exist"},{status:400})
        }
        
        const category = await Subcategory.findOne({ name });

        if (category) {
            return NextResponse.json({ message: "Category alreday Exists" }, { status: 400 })
        }
        const newCategory = new Subcategory({ name, categoryId })
        console.log(newCategory, "newCaterory")
        await newCategory.save();
        return NextResponse.json({ message: "Subcategory created" }, { status: 201 })
    } catch (error: any) {
        console.log(error, "error")

        if (error instanceof z.ZodError) {
            return NextResponse.json({
                error: error.errors.map((e: any) => ({
                    path: e.path.join('.'),
                    message: e.message,
                })),
            }, { status: 400 });
        } else {
            return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
        }
    }
}

export const GET = async () => {
    try {
        await connect();
        const subcategories = await Subcategory.find().populate("categoryId").lean();

        return NextResponse.json(subcategories, { status: 200 })
    } catch (error: any) {
        return NextResponse.json(
            { message: "Failed to get Subcategories", error: error.message },
            { status: 500 }
        )
    }
} 