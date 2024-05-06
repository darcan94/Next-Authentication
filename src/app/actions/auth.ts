import {FormState, SignupFormSchema} from "@/app/lib/definitions";
import bcrypt from 'bcrypt';
import {insert} from "@/app/lib/database";
import {createSession, deleteSession} from "@/app/lib/session";
import {redirect} from "next/navigation";

export async function signup( state: FormState, formData: FormData ) {

    //1. Validate form fields
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

    //2. Prepare data for insertion into database
    const { name, email, password } = validatedFields.data
    const hashedPassword = await bcrypt.hash(password, 10)

    //3. Insert the user into the database or call an Auth Library's API
    const userId = await insert({name, email, password: hashedPassword})
    if(!userId){
        return {
            message: 'An error occurred while creating your account.',
        }
    }

    //4. Create user session
    await createSession(userId)

    //5. redirect user
    redirect('/profile')
}

export async function logout() {
    deleteSession()
    redirect('/login')
}