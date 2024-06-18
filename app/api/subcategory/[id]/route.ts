import Subcategory from "@/models/Subcategory";
import { connect } from '@/db/db';
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { z } from 'zod';

export const DELETE = async (req: Request, { params }: { params: { id: string } }) => {
    try {
        await connect();
        await Subcategory.findByIdAndDelete(params.id);

        return NextResponse.json({ message: "Subcategory delete successfully" }, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ message: "failed to delete Subcategory" }, { status: 500 })
    }
}

const subcategorySchema = z.object({
    name: z.string().min(3, { message: "must be 3 or more characters long" }).max(20, { message: "must be max 20 characters" })
})

export const PATCH = async (req: Request, { params }: { params: { id: string } }) => {
    try {
        const body = await req.json();
        const parsedData = subcategorySchema.parse(body);
        await connect();

        const subcategory = await Subcategory.findById(params.id);

        if (!subcategory) {
            return NextResponse.json({ message: "Subcategory not found" }, { status: 404 })
        }

        subcategory.name = parsedData.name;
        await subcategory.save();

        return NextResponse.json(subcategory, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ message: "Failed to update Subcategory", error: error.message }, { status: 500 })
    }
}