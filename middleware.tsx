import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
    // Fallback mock for local testing

    console.log(`[middleware] Request URL: ${request.url}`);
    const mockCountry = request.nextUrl.searchParams.get('mock-country');
    const country = request.geo?.country || mockCountry;

    if (process.env.NODE_ENV === 'development') {
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
