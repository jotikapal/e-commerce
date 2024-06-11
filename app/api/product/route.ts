import Product from '@/models/Product'
import { connect } from '@/db/db';
import { NextResponse } from 'next/server';

export const POST = async (req: any) => {
    const { name, description, image, category, subcategory, variants, price } = await req.json();

    try {
        await connect();
        const newProduct = new Product({ name, description, image, category, subcategory, variants, price })
        await newProduct.save();
        return NextResponse.json({ message: "Product is registered" }, { status: 200 });

    } catch (error: any) {
        return NextResponse.json({ message: "Failed to register product", error: error.message }, { status: 500 });
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

// export async function GET(request, response) {
//     let users = [];
//     try {
//         users = await User.find()
//         // .select("-password")

//     } catch (error) {
//         console.log(error)

//         return NextResponse.json({
//             message: "failed to create user!",
//             status: false
//         })
//     }
//     return NextResponse.json(users);
// }