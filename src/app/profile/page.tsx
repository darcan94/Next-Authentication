import { redirect } from "next/navigation";
import { logout } from "../actions/auth";

export default function ProfilePage() {
    return (
        <main>
            <h1>Welcome to profile page</h1>
            <form
            action={async () => {
            "use server";
            await logout();
            redirect("/");
            }}
        >
        <button type="submit">Logout</button>
      </form>
        </main>
        
    )
}