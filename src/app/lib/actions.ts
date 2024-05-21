'use server'
import {signIn} from "@/auth";
import {FormState, LoginFormSchema, LoginFormState, SignupFormSchema} from "@/app/lib/definitions";
import {insertUser} from "@/app/lib/database";
import bcrypt from "bcrypt";
import { AuthError } from "next-auth";

export async function signUp(
    prevState: FormState,
    formData: FormData
){
    const validatedFields = SignupFormSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password'),
    })

    if (!validatedFields.success){
        return{
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    const { name, email, password } = validatedFields.data
    const hashedPassword = await bcrypt.hash(password, 10)

    const userId = await insertUser({name, email, password: hashedPassword})
    if(!userId){
        return {
            message: 'An error occurred while creating your account.',
        }
    }

    try {
        await signIn('credentials', validatedFields.data)
    }catch (error){
        throw error
    }
}

export async function login(
    prevState: LoginFormState,
    formData: FormData
){
    const validatedFields = LoginFormSchema.safeParse({
        email: formData.get('email'),
        password: formData.get('password'),
    })

    if (!validatedFields.success){
        return{
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    try {
        await signIn('credentials', validatedFields.data)
    }catch (error){
        if (error instanceof AuthError) {
            switch (error.type) {
              case 'CredentialsSignin':
                return { message: 'Invalid credentials.' };
              default:
                return { message: 'Something went wrong.' };
            }
          }
        throw error
    }
}

export async function loginWithGithub(){
    await signIn('github');
}