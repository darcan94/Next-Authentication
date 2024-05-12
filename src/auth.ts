import NextAuth from "next-auth";
import {authConfig} from "@/auth.config";
import Credentials from "next-auth/providers/credentials";
import {getUser} from "@/app/lib/database";
import bcrypt from "bcrypt";

export const { auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [Credentials({
        async authorize(credentials: any){
            const { email, password } = credentials
            const user = await getUser(email)
            if(!user) return null
            const isPasswordMatch = await bcrypt.compare(password, user.password)
            if(isPasswordMatch) return user
            return null
        },
    })]
})