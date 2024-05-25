import CodeContainer from "../ui/code-container";
import { LoginForm } from "../ui/login-form";

export default function LoginPage(){
    return (
        <main className="md:flex bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">

            <section className="h-screen w-full lg:w-4/12 lg:p-4 p-4 flex justify-center items-center bg-gray-100">
                <LoginForm/>
            </section>

            <section className="h-screen flex justify-center items-center w-full lg:w-8/12">
                <CodeContainer/>
            </section>

        </main>
    )
}