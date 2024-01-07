import { connectDb } from "@/Helper/db";
import { User } from "@/Models/Login/User";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

connectDb();

export async function POST(request) {
    const{name,email,password,confirmPassword} = await request.json();

    const user = new User({
        name,email,password,confirmPassword
    });

    try{
        user.password = bcrypt.hashSync(
            user.password, parseInt(process.env.BCRYPT_SALT)
        );

        const createdUser = await user.save();
        const response = NextResponse.json(
            user, {
                status:201,
                message: "User Created",
            });

        return response;
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "failed to coonect",
            status: false,
        });
    }
}