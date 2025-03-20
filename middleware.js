// middleware.js - updated version
import { NextResponse } from 'next/server';

export function middleware(request) {
  // Middleware can't access localStorage since it runs on the server
  // We need to use cookies for middleware auth checks
  
  // For testing, we can disable the middleware temporarily
  // Just return next() for now
  return NextResponse.next();

  // Or check for the cookie that your backend sets
  // const hasAccess = request.cookies.has('alpha_access');
  
  // if (request.nextUrl.pathname.startsWith('/alpha') && !hasAccess) {
  //   return NextResponse.redirect(new URL('/verify-access', request.url));
  // }
  
  // return NextResponse.next();
}

export const config = {
  matcher: ['/alpha/:path*'],
};