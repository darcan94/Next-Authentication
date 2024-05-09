import { Url } from "next/dist/shared/lib/router/router"
import Link from "next/link"
import { InputHTMLAttributes, ReactNode } from "react"
import { useFormStatus } from "react-dom"

export function FormContainer({children}: {children: ReactNode}){
    return(
        <div className='w-full max-w-md space-y-8'>
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