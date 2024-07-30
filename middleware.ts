import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export default async function middleware(req: NextRequest) {
  const secret = process.env.NEXTAUTH_SECRET;

  // Get the token from the request using the next-auth secret
  const token = await getToken({ req, secret });

  console.log('***********token', token)
  // If no valid token is found, redirect to the login page
  if (!token || !token.userType) {
    console.log("No valid token found, redirecting to login page");
    return NextResponse.redirect(new URL('/login', req.url));
  }

  if(req.nextUrl.pathname.startsWith('/admin')){
    if(token.userType !== "ADMIN"){
      console.log("No valid user, redirecting to login page");
      return NextResponse.redirect(new URL('/login', req.url));
    }
  }

  // if(req.nextUrl.pathname.startsWith('/customer')){
  //   if(token.userType !== "CUSTOMER"){
  //     console.log("No valid user, redirecting to login page");
  //     return NextResponse.redirect(new URL('/login', req.url));
  //   }
  // }

  // If a valid token is found, proceed to the next middleware or handler
  console.log("Valid token found, proceeding to next handler");
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/customer/:path"], // this middleware will run for admin and customer routes only
};
