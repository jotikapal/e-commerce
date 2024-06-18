import Product from '@/models/Product'
import { connect } from '@/db/db';
import { NextResponse } from 'next/server';
import { getServerSession } from "next-auth";
import { z } from "zod";

const productSchema = z.object({
    name: z.string().min(3, { message: "Must be 3 or more characters long" }),
    description: z.string().min(10, { message: "Must be 10 characters long" }),
    image: z.string().url({ message: "Invalid url" }),
    // category: z.string().min(3, { message: "Must be 3 or more characters long" }),
    // subcategory: z.string().min(3, { message: "Must be 5 or more characters long" }),
    variants: z.string().min(3, { message: "Must be 5 or more characters long" }),
    price: z.number({
        required_error: "Price is required",
        invalid_type_error: "Price must be a number",
    }),
})

export const POST = async (req: any) => {
    const session = await getServerSession();

    if (!session) {
        return NextResponse.json({ message: "Not Logged in" }, { status: 401 });
    }
    try {
        const body = await req.json();
        const parsedData = productSchema.parse(body);
        // console.log(parsedData,"parsedData")
        await connect();
        const newProduct = new Product(body)
        console.log(newProduct,"newProduct")
        await newProduct.save();
        return NextResponse.json({ message: "Product is registered" }, { status: 201 });

    } catch (error: any) {
        console.log(error,"error")
        
        if (error instanceof z.ZodError) {
            // If validation fails, return the error messages
            return NextResponse.json({
                errors: error.errors.map((e:any) => ({
                  path: e.path.join('.'),
                  message: e.message,
                })),
               }, { status: 400 });
          } else {
            // Handle other errors
            return NextResponse.json({ message: 'Internal server error' },{status: 500});
          }
    }
};

export const GET = async () => {
    try {
        await connect();
        const products = await Product.find();
        return NextResponse.json(products, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({
            message: "failed to get Products",
            error: error.message
        }, { status: 500 })
    }
};