import Product from '@/models/Product'
import { connect } from '@/db/db';
import { NextResponse } from 'next/server';
import { getServerSession } from "next-auth";
import { z } from "zod";

export const GET = async (req: any, { params }: { params: { id: string } }) => {
    try {
        await connect();
        const product = await Product.findById(params.id);
        if (!product) {
            return NextResponse.json({ message: "Product not found" }, { status: 404 });
        }
        return NextResponse.json(product, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({
            message: "Failed to get the Product",
            error: error.message
        },
            { status: 500 })
    }
}

const productSchema = z.object({
    ProductName: z.string().min(3, { message: "Must be 3 or more characters long" }),
    description: z.string().length(3, { message: "Must be exactly 3 characters long" }),
    image: z.string().url({ message: "Invalid url" }),
    category: z.string().min(3, { message: "Must be 3 or more characters long" }),
    subcategory: z.string().min(3, { message: "Must be 5 or more characters long" }),
    variants: z.string().min(3, { message: "Must be 5 or more characters long" }),
    price: z.number({
        required_error: "Price is required",
        invalid_type_error: "Price must be a number",
    }),
})

export const PATCH = async (req: Request, { params }: { params: { id: string } }) => {
    const session = await getServerSession();

    if (!session) {
        return NextResponse.json({ message: "Not Logged in" }, { status: 401 });
    }

    try {
        const body = await req.json();
        const parsedData = productSchema.parse(body)
        await connect();
        const product = await Product.findById(params.id);
        if (!product) {
            return NextResponse.json({ message: "Product not found" }, { status: 404 });
        }
        product.productName = parsedData.ProductName;
        product.description = parsedData.description;
        product.image = parsedData.image;
        product.category = parsedData.category;
        product.subcategory = parsedData.subcategory;
        product.variants = parsedData.variants;
        product.price = parsedData.price;

        await product.save();

        return NextResponse.json(product, { status: 200 });
    } catch (error: any) {
        console.error("Error updating product:", error);
        return NextResponse.json({ message: "Failed to update Product", error: error.message }, { status: 500 });

    }
}

export const DELETE = async (req: Request, { params }: { params: { id: string } }) => {
    try {
        await connect();
        await Product.findByIdAndDelete(params.id);
        return NextResponse.json({ message: "Product deleted successfully" }, { status: 200 });
    } catch (error) {
        console.log("Error to deleting Product:", error);
        return NextResponse.json({ message: "Failed to delete product" }, { status: 500 })
    }
}
