export const basicAuthCode = [
{
    fileName: '...login-form.tsx',
    lang:'typescript',
    code:`\texport function LoginForm(){
      return (
        <form action={ async (formData) => {
            'use server'
            await signIn("credentials", formData)
        } }>
          <div>
            <label htmlFor="email">Email address</label>
            <input name="email" type="email" placeholder="you@example.com"/>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input name="password" type="password" placeholder="password"/>
          </div>
          <button type="submit">Login</button>
        </form>
      )
    } `
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
            async authorize({ email, password }){
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

export const oauthCode = [
    {
        fileName: '...login-form.tsx',
        lang:'typescript',
        code: `\timport Image from "next/image";
    import {signIn} from "@/auth";
    
    export default function LoginForm() {
        return (
            <form action={async () => {
                "use server"
                await signIn("github")
            }}>
                <button type="submit">
                    <Image 
                        height="20" 
                        width="20" 
                        alt="provider-logo"
                           src="https://authjs.dev/img/providers/github.svg">
                    </Image>
                    <span className='grow'>Signin with GitHub</span>
                </button>
            </form>
          )
    }`
    },
    {
        fileName: 'app/auth.ts',
        lang:'typescript',
        code: `\timport NextAuth from "next-auth";
    import GitHub from "next-auth/providers/github";
    
    export const { auth, signIn, signOut, handlers: { GET, POST } } = NextAuth({
        providers: [GitHub]
      })`
    },
    {
        fileName: 'api/auth/[...nextauth]/route.ts',
        lang:'typescript',
        code: `\texport { GET, POST } from "@/auth";`
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
    },
    {
        fileName: '.env.local',
        lang:'',
        code: `\t\tAUTH_GITHUB_ID={CLIENT_ID}
        AUTH_GITHUB_SECRET={CLIENT_SECRET}`
    }

]