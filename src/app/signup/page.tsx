import {SignupForm} from "@/app/ui/signup-form";
import Link from "next/link";

export default  function  SignupPage(){
    return (
        <main className="h-screen flex items-center justify-center">
            <div className="w-3/12 h-auto flex flex-col gap-4 justify-center items-center p-4 bg-zinc-300 rounded-lg">
                <h1>Sign Up</h1>
                <SignupForm />
            </div>
            <Link href='/'>Back</Link>
        </main>
    )
}