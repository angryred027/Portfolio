import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
    // Extend request type to include geo for type safety
    const country = (request as NextRequest & { geo?: { country?: string } }).geo?.country
        || request.nextUrl.searchParams.get('mock-country');

    if (process.env.NODE_ENV === 'development') {
        console.log(`[middleware] Request URL: ${request.url}`);
        console.log(`[middleware] Country detected: ${country}`);
    }

    const isJapan = country === 'JP';
    const pathname = request.nextUrl.pathname;

    if ((pathname.startsWith('/blog') || pathname.startsWith('/projects')) && !isJapan) {
        const url = request.nextUrl.clone();
        url.pathname = '/not-allowed';
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/blog/:path*', '/projects/:path*'],
};
