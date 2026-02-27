import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Protected routes that require authentication
  const protectedRoutes = ['/landing-builder'];
  
  // Check if the current path is protected
  const isProtectedRoute = protectedRoutes.some(route => 
    pathname.startsWith(route)
  );

  if (isProtectedRoute) {
    // Check for token in cookies or headers
    const token = request.cookies.get('auth_token')?.value;
    
    // If no token, redirect to login
    if (!token) {
      const loginUrl = new URL('/login', request.url);
      loginUrl.searchParams.set('redirect', pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/landing-builder/:path*',
  ],
};
