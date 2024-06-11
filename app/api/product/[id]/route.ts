import Product from '@/models/Product'
import { connect } from '@/db/db';
import { NextResponse } from 'next/server';

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

export const PATCH = async (req: Request, { params }: { params: { id: string } }) => {
    const { name, description, image, category, subcategory, variants, price } = await req.json();

    try {
        await connect();
        const product = await Product.findById(params.id);
        if (!product) {
            return NextResponse.json({ message: "Product not found" }, { status: 404 });
        }
        product.name = name;
        product.description = description;
        product.image = image;
        product.category = category;
        product.subcategory = subcategory;
        product.variants = variants;
        product.price = price;

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
