import User from '@/models/User';
import { connect } from '@/db/db';
import bcrypt from "bcryptjs";
import { NextResponse } from 'next/server';

export const POST = async (req: any) => {
    try {
        const { name, email, password } = await req.json();
        await connect();

        const existingUser = await User.findOne({ email }).lean(); // always use lean if not updating

        if (existingUser) {
            return new NextResponse("Email is already in use", { status: 400 });
        }

        const hashedPassword = await bcrypt.hash(password, 5);
        const newUser = new User({
            name,
            email,
            password: hashedPassword,
        })

        await newUser.save();
        return new NextResponse("user is registered", { status: 200 });
    } catch (error: any) {
        return new NextResponse(error, {
            status: 500,
        });
    }
};