export const sourceCodes = [{
    fileName: '...login-form.tsx',
    lang:'typescript',
    code:`\t'use client'
    import {useFormState, useFormStatus} from 'react-dom'
    import {login} from '@app/lib/actions'
    
    export function LoginForm(){
      const [state, action] = useFormState(login, undefined)
      return (
        <form action={ action }>
          <div>
            <label htmlFor="email">Email address</label>
            <input name="email" type="email" placeholder="you@example.com"/>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input name="password" type="password" placeholder="password"/>
          </div>
          <LoginButton/>
        </form>
      )
    }

    function LoginButton(){
      const { pending } = useFormStatus()
      return (
        <button aria-disabled={pending} type="submit">
          {pending ? 'Submitting...' : Login }
        </button>
      )
    }`
    },
    {
    fileName: 'app/auth.ts',
    lang:'typescript',
    code: `\timport NextAuth from "next-auth";
    import {authConfig} from "@/auth.config";
    import Credentials from "next-auth/providers/credentials";
    import bcrypt from "bcrypt";
    
    async function getUser(email: string){
      // Get user from database
    }
    export const { auth, signIn, signOut } = NextAuth({
      ...authConfig,
        providers: [
          Credentials({
            async authorize(credentials: any){
              const { email, password } = credentials
              const user = await getUser(email)
              if(!user) return null  
              const isPasswordMatch = await bcrypt.compare(password, user.password)
              return isPasswordMatch ? user : null;
            },
          }),]
      })`
    },
    {
    fileName: 'app/auth.config.ts',
    lang:'typescript',
    code: `\timport {NextAuthConfig} from "next-auth";

    export const authConfig = {
      pages: {
        signIn: '/login',
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
    } satisfies NextAuthConfig`
    },
    {
    fileName: 'app/middleware.ts',
    lang:'typescript',
    code: `\timport NextAuth from "next-auth";
    import {authConfig} from "@/auth.config";
        
    export default NextAuth(authConfig).auth;
        
    export const config = {
      // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
      matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
    };`
    }
]