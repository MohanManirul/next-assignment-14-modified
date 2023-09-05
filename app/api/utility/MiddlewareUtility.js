import { NextResponse } from "next/server";
import { verifyToken } from "./JWTHelper";

export async function CheckCookieAuth(req){
    try{
        let token = req.cookies.get('token'); 
        let payload = await verifyToken(token['value']) 
        const requestHeaders = new Headers(req.headers)
        requestHeaders.set('email', payload['email'])
        return NextResponse.next({
            request:{headers:requestHeaders},
        })
    }catch(e){
        return NextResponse.redirect(new URL('/registration',req.url)) 
    }
}