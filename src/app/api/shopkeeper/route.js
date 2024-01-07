import { connectDb } from "@/Helper/db";
import { Shopkeeper } from "@/Models/Login/shopkeeper";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

connectDb();

export async function POST(request) {
    try {
        const {
            shop_name,
            owner_name,
            email,
            password,
            confirmPassword,
        } = await request.json();

        if (!shop_name || !owner_name || !email || !password || !confirmPassword) {
            return NextResponse.json({
                message: "All fields are required",
                status: false,
            });
        }

        if (password !== confirmPassword) {
            return NextResponse.json({
                message: "Password and confirmPassword do not match",
                status: false,
            });
        }

        // Hash the password
        const hashedPassword = bcrypt.hashSync(password, parseInt(process.env.BCRYPT_SALT));

        const user = new Shopkeeper({
            shop_name,
            owner_name,
            email,
            password: hashedPassword,
            confirmPassword: hashedPassword, // It's not necessary to store hashed confirmPassword
        });

        const createdShopkeeper = await user.save();

        const response = NextResponse.json({
            user: createdShopkeeper,
            status: 201,
            message: "ShopKeeper Login Successfull",
        });

        return response;
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({
            message: "Failed to Login Shopkeeper. Try again.",
            status: false,
        });
    }
}
