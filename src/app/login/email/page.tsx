import LoginForm from "@/app/login/oauth/login-form";
import React from "react";

export default  function EmailAuthPage(){
    return (
        <>
            <section className="h-screen w-full lg:w-4/12 lg:p-4 p-4 flex justify-center items-center bg-gray-100">
                {<LoginForm/>}
            </section>

            <section className="h-screen flex justify-center items-center w-full lg:w-8/12">
            </section>
        </>
    )
}