import React from "react";
import {Link} from "next-view-transitions";

export default  function Layout({ children }: { children: React.ReactNode }) {
    return (
        <main className="md:flex bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <div className="flex justify-center w-full absolute top-4">
                <div role="tablist" className="tabs-sm tabs-boxed z-10">
                    <Link href="/login/basic/" role="tab" className="tab focus:tab-active">Credentials</Link>
                    <Link href="/login/oauth/" role="tab" className="tab focus:tab-active">OAuth Providers</Link>
                    <Link href="/login/email/" role="tab" className="tab focus:tab-active">Email</Link>
                </div>
            </div>
            {children}
        </main>
    );
}