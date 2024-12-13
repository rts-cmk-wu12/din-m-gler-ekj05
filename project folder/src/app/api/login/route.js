import { NextResponse } from "next/server"

export async function GET(req){
    const token = req.nextUrl.searchParams.get("token")
    const response = NextResponse.redirect(new URL("/", req.url))
    
    response.cookies.set("userToken", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/",
        maxAge: 60*60*24*7
    })

    return response
}