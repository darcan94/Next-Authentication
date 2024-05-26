import Image from "next/image";
import {signIn} from "@/auth";

export default function LoginForm() {
    return (
        <form action={async () => {
            "use server"
            await signIn("github")
        }}>
            <button
                className='flex gap-2 items-center w-full justify-center rounded-md border border-transparent
                        bg-slate-200 py-3 px-4 text-sm font-medium text-slate-800 shadow-sm
                        hover:bg-slate-300 focus:outline-none focus:ring-2
                        focus:ring-indigo-500 focus:ring-offset-2'
                type="submit">
                <Image loading="lazy" height="20" width="20" id="provider-logo" alt="provider-logo"
                       src="https://authjs.dev/img/providers/github.svg"></Image>
                <span className='grow'>Signin with GitHub</span>
            </button>
    </form>)
}