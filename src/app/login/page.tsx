import Link from "next/link";
import { LoginForm } from "../ui/login-form";

export default function LoginPage(){
    return (
        <main className="h-screen flex items-center justify-center">
            <div className="w-3/12 h-auto flex flex-col gap-4 justify-center items-center p-4 bg-zinc-300 rounded-lg">
                <h1>Login</h1>
                <LoginForm />
            </div>
            <Link href='/'>Back</Link>
        </main>

    )
}