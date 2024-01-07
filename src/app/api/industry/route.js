import { connectDb } from "@/Helper/db";
import { Industry } from "@/Models/industry";
import bcrypt from 'bcryptjs';
import { NextResponse } from "next/server";

connectDb();

export async function POST(request) {
    try {
        const {
            industry_name,
            industry_owner_name,
            email,
            password,
            confirmPassword,
        } = await request.json();

        if (!industry_name || !industry_owner_name || !email || !password || !confirmPassword) {
            return NextResponse.json({
                message: "All fields are required",
                status: false,
            });
        }

        if (password !== confirmPassword) {
            return NextResponse.json({
                message: "Password and ConfirmPassword do not match",
                status: false,
            });
        }

        const hashedPassword = bcrypt.hashSync(password, parseInt(process.env.BCRYPT_SALT));

        const existingUser = await Industry.findOne({ email });

        if (existingUser) {
            return NextResponse.json({
                message: "Email already exists. Please use a different email",
                status: false,
            });
        }

        const user = new Industry({
            industry_name,
            industry_owner_name,
            email,
            password: hashedPassword,
        });

        const createdIndustry = await user.save();

        const response = NextResponse.json({
            user: createdIndustry,
            status: 201,
            message: "Industry user created successfully",
        });

        return response;
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({
            message: "Failed to create industry user. Please try again.",
            status: false,
        });
    }
}
