import { Url } from "next/dist/shared/lib/router/router"
import React, { InputHTMLAttributes, ReactNode, useState } from "react"
import { useFormStatus } from "react-dom"
import { EyeIcon } from "@/app/ui/icons"
import { Link } from "next-view-transitions"

export function FormContainer({children}: {children: ReactNode}){
    return(
        <div className='w-full max-w-md space-y-8' style={{
            viewTransitionName: 'container'
        }}>
            {children}
        </div>
    )
}

export function Form({action, children}: {action: any, children: ReactNode}){
    return(
        <form className="space-y-6" action={ action }>
            {children}
        </form>
    )
}

export function FormHeader({title, subtitle, text, link}: {title?:string, subtitle?:string, text?:string, link:Url}){
    return (
        <div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-white">{title}</h2>
            <p className="mt-2 text-center text-sm text-gray-400">
                <span>{text} </span>
                <Link className="font-medium text-indigo-500 hover:text-indigo-400" href={link}>
                   {subtitle}
                </Link>
            </p>
        </div>
    )
}


interface InputProps extends InputHTMLAttributes<HTMLInputElement>{}

export const InputField: React.FC<InputProps> = (props) => {
    const { className, style, ...inputProps } = props

    return (
        <input 
            className={`block w-full appearance-none rounded-md border 
            border-gray-500 bg-gray-700 px-3 py-2 text-white 
            placeholder-gray-400 focus:border-indigo-500 
            focus:outline-none focus:ring-indigo-500 sm:text-sm ${className}`}
            style={style}
            {...inputProps}
        />
    )
}

export const PasswordInput: React.FC<InputProps> = () => {
    'use client'
    const [isPasswordVisible, setPasswordVisible] = useState(false);

    const handleChangePasswordVisibility = () => {
        setPasswordVisible(!isPasswordVisible);
    }

    return (
        <>
            <label className="block text-sm font-medium text-gray-400" htmlFor="password">Password</label>
            <div className="mt-1 flex items-center">
                <InputField id="password" 
                    autoComplete="current-password"
                    name="password" 
                    placeholder="Password"
                    type={isPasswordVisible ? "text" : "password" } 
                />

                <div className="ml-3 flex">
                    <ShowPasswordButton active = {isPasswordVisible} onclick = {handleChangePasswordVisibility}/>
                </div>
            </div>
        </>
    )
}

function ShowPasswordButton({onclick, active}: {onclick: () => void, active: boolean}){    
    return(
        <button onClick={onclick} type='button' className="text-gray-400 hover:text-gray-300">
            <EyeIcon className={`h-5 w-5 ${active ? 'hover:stroke-indigo-400 stroke-indigo-500': ''}`} />
            <span className="sr-only">Show password</span>
        </button>
    )
}

export function SubmitButton({text}: {text: string}){
    const { pending } = useFormStatus()
    return (
        <button  
            className="flex w-full justify-center rounded-md border border-transparent 
                       bg-indigo-600 py-3 px-4 text-sm font-medium text-white shadow-sm 
                       hover:bg-indigo-700 focus:outline-none focus:ring-2 
                       focus:ring-indigo-500 focus:ring-offset-2"
            aria-disabled={pending} type="submit">
            {pending ? 'Submitting...' : text }
        </button>
    )
}