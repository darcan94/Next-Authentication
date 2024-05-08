import { decrypt } from "@/app/lib/session"
import { cookies } from "next/headers"
import { NextRequest, NextResponse } from "next/server"

// 1. Specify protected and public routes
const protectedRoutes = ['/profile']
const publicRoutes = ['/login', '/signup', '/']

export default async function middleware(req: NextRequest){
    console.log('middleware');
    
// 2. Check if the current route is protected or public
    const path = req.nextUrl.pathname
    const isProtectedRoute = protectedRoutes.includes(path)
    const isPublicRoute = publicRoutes.includes(path)

// 3. Decrypt the session from the cookie
    const cookie = cookies().get('session')?.value
    const session = await decrypt(cookie)
    console.log(session)
    
// 4. Redirect to /login if the user is not authenticated
    if(isProtectedRoute && !session?.userId){
        return NextResponse.redirect(new URL('/login', req.nextUrl))
    }

// 5. Redirect to /profile if the user is authenticated
    if(isPublicRoute && session?.userId && !req.nextUrl.pathname.startsWith('/profile')){
        return NextResponse.redirect(new URL('/profile', req.nextUrl)) 
    }

    return NextResponse.next()
}

// Routes Middleware should not run on
export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}