import {SignupForm} from "@/app/ui/signup-form";

export default  function  SignupPage(){
    return (
        <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#0c1023] to-[#1e2949] px-4 py-12 sm:px-6 lg:px-8">
            <SignupForm />
        </main>
    )
}