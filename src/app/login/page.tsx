import CodeContainer from "../ui/code-container";
import { LoginForm } from "../ui/login-form";

export default function LoginPage(){
    return (
        <main className="flex min-h-screen bg-gradient-to-br from-[#0c1023] to-[#1e2949]">
            <section className="flex justify-center items-center w-8/12 h-auto">
                <CodeContainer/>
            </section>

            <section className="flex px-4 justify-center items-center w-4/12 h-auto bg-gray-100">
                <LoginForm />
            </section>
        </main>
    )
}