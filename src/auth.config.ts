import {NextAuthConfig} from "next-auth";

export const authConfig = {
    pages: {
        signIn: '/login',
        newUser: '/signup',
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }){
            const isLoggedIn = !!auth?.user
            const isOnProfilePage = nextUrl.pathname.startsWith('/profile')

            if(isOnProfilePage)
                return isLoggedIn

            return isLoggedIn
                ? Response.redirect(new URL('/profile', nextUrl) )
                : true;
        }
    },
    providers: [],
} satisfies NextAuthConfig