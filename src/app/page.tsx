import { Link } from "next-view-transitions";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-24">
      <h1>
        Example of Authentication with Next and Auth JS
      </h1>
        <div className="flex flex-col">
          <Link href="/login">Login</Link>
        </div>
    </main>
  );
}
