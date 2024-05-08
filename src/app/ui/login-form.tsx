'use client'
import {login} from '@/app/actions/auth'
import Link from 'next/link'
import {useFormState, useFormStatus} from 'react-dom'

export function LoginForm() {
    const [state, action] = useFormState(login, undefined)
    return (
        <div className='w-full max-w-md space-y-8'>
            <div>
                <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-white">Sign in to your account</h2>
                <p className="mt-2 text-center text-sm text-gray-400">
                    <span>Or </span>
                    <Link className="font-medium text-indigo-500 hover:text-indigo-400" href="/signup">
                        sign up
                    </Link>
                </p>
            </div>
            <form className="space-y-6" action={ action }>
                <div className='space-y-1'>
                    <label className="block text-sm font-medium text-gray-400" htmlFor="email">Email address</label>
                    <input 
                        className="block w-full appearance-none rounded-md border 
                                   border-gray-500 bg-gray-700 px-3 py-2 text-white 
                                   placeholder-gray-400 focus:border-indigo-500 
                                   focus:outline-none focus:ring-indigo-500 sm:text-sm" 
                        autoComplete="email"
                        id="email" 
                        name="email" 
                        type="email" 
                        placeholder="Email" 
                    />
                </div>
                {state?.errors?.email && <p className="text-red-600">{state.errors.email}</p>}

                <div className='space-y-1'>
                    <label className="block text-sm font-medium text-gray-400" htmlFor="password">Password</label>
                    <input 
                        className="block w-full appearance-none rounded-md border 
                                   border-gray-500 bg-gray-700 px-3 py-2 text-white 
                                   placeholder-gray-400 focus:border-indigo-500 
                                   focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        id="password" 
                        name="password" 
                        placeholder="Password"
                        type="password" 
                    />

                    <div className="ml-3">
                        <button className="text-gray-400 hover:text-gray-300">
                            <EyeIcon className="h-5 w-5" />
                            <span className="sr-only">Show password</span>
                        </button>
                    </div>
                </div>
                    {
                        state?.errors?.password && (
                            <div className="text-red-600">
                                <p>Password must be:</p>
                                <ul>
                                    {state.errors.password.map( error => (
                                        <li key={error}> - {error}</li>
                                    ))}
                                </ul>
                            </div>
                        )
                    }
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <input type='checkbox'
                            className="h-4 w-4 rounded text-indigo-600 focus:ring-indigo-500"
                            id="remember-me"
                            name="remember-me"/>

                        <label className="ml-2 block text-sm text-gray-400" htmlFor="remember-me">
                            Remember me
                        </label>
                    </div>
                    <div className="text-sm">
                        <Link className="font-medium text-indigo-500 hover:text-indigo-400" href="#">
                            Forgot your password?
                        </Link>
                    </div>
                </div>
                <LoginButton />
            </form>
        </div>
    )
}


function LoginButton() {
    const { pending } = useFormStatus()

    return (
        <button  
            className="flex w-full justify-center rounded-md border border-transparent 
                       bg-indigo-600 py-3 px-4 text-sm font-medium text-white shadow-sm 
                       hover:bg-indigo-700 focus:outline-none focus:ring-2 
                       focus:ring-indigo-500 focus:ring-offset-2"
            aria-disabled={pending} type="submit">
            {pending ? 'Submitting...' : 'Sign In'}
        </button>
    )
}

function EyeIcon({ className}: {className: string}){
    return(
        <></>
    )
}