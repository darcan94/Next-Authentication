import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-24">
      <h1>
        Authentication with Next Auth
      </h1>
        <div className="flex flex-col">
          <Link href="/login">Login</Link>
          <Link href="/signup">Sign Up</Link>
        </div>
    </main>
  );
}
