// import { connectToDB } from "@utils/database";
// import Prompt from "@models/prompt";

// export const POST = async (req) => {
//     const { userId, prompt, tag } = await req.json()

//     try {
//         await connectToDB();
//         const newPrompt = new Prompt({
//             creator: userId,
//             prompt,
//             tag,
//         })

//         await newPrompt.save();
//         return new Response(JSON.stringify(newPrompt), { status: 201 })
//     } catch (error) {
//         return new Response("Failed to create a new prompt", { status: 500 });
//     }

// }

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