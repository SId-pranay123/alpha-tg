import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;
  
  // Only apply to /alpha routes
  if (pathname.startsWith('/alpha')) {
    const cookieValue = request.cookies.get('alpha_access')?.value;
    
    // If no access cookie, redirect to verification page
    if (cookieValue !== 'true') {
      return NextResponse.redirect(new URL('/verify-access', request.url));
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: '/alpha/:path*',
};
