import Category from '@/models/Category';
import { connect } from '@/db/db';
import { NextResponse } from 'next/server';
import { z } from "zod";
import { getServerSession } from 'next-auth';

const categorySchema = z.object({
    name: z.string().min(3, { message: "must be 3 or more characters long" }).max(20, { message: "must be max 20 characters" })
})

export const POST = async (req: any) => {
    // const session = await getServerSession();
    // if(!session){
    //     return NextResponse.json({message:"Not logged in"},{status:401});
    // }

    // add to be duplicate check
    try {
        const body = await req.json();
        const parsedData = categorySchema.parse(body)
        console.log(parsedData, "parsedData")
        await connect();
        const { name } = parsedData
        const category = await Category.findOne({ name });
        console.log(category, "category")
        if (category) {
            return NextResponse.json({ message: "Category already exist" }, { status: 400 });
        }

        const newCategory = new Category(parsedData)
        console.log(newCategory, "newCaterory")

        await newCategory.save();
        return NextResponse.json({ message: "Category created" }, { status: 201 })
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
        const categories = await Category.find().lean();
        return NextResponse.json(categories, { status: 200 });
    } catch (error: any) {
        return NextResponse.json(
            { message: "Failed to get Categories", error: error.message },
            { status: 500 }
        )
    }
} 