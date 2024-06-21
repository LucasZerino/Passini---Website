import { NextResponse } from 'next/server';
import { getUrl } from './lib/get-url';

export function middleware(request) {
  const token = request.cookies.get('authjs.session-token');
  const pathname = request.nextUrl.pathname;
  console.log(pathname)
  console.log("Proxy")

  if (pathname === '/auth' && token) {
    return NextResponse.redirect(new URL(getUrl('/blog')));
  }

  if (pathname.includes('/blog') && !token) {
    return NextResponse.redirect(new URL(getUrl('/auth')));
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
