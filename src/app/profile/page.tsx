import {auth, signOut} from "@/auth";
import {Session} from "next-auth";

export default async function ProfilePage() {
    const session: Session | null = await auth()

    return (
        <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#0c1023] to-[#1e2949] px-4 py-12 sm:px-6 lg:px-8 text-gray-400">
            <h1 className="text-6xl">
                Welcome 
                <span className="font-semibold ml-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
                    { session?.user?.name }
                </span>
            </h1>
            <form
                action={async () => {
                "use server";
                await signOut();
            }}>
                <button className="absolute top-2 right-2 text-white" type="submit">Logout</button>
            </form>
        </main>
        
    )
}