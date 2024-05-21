'use client'
import {login, loginWithGithub} from '@/app/lib/actions'
import {useFormState} from 'react-dom'
import {
    InputField,
    PasswordInput,
    SubmitButton
} from '@/app/ui/form-components'
import { Link } from 'next-view-transitions'

export function LoginForm() {
    const [state, action] = useFormState(login, undefined)
    return (
        <div className='w-full max-w-md space-y-8' style={{ viewTransitionName: 'container'}}>
            <div>
                <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-white">
                    Sign in to your account
                </h2>
                <p className="mt-2 text-center text-sm text-gray-400">
                    <span>Or </span>
                    <Link className="font-medium text-indigo-500 hover:text-indigo-400" href="/signup">
                        Sign up
                    </Link>
                </p>
            </div>

            <form className="space-y-6" action={ action }>
                <div className='space-y-1'>
                    <label className="block text-sm font-medium text-gray-400" htmlFor="email">Email address</label>
                    <InputField id="email" 
                        autoComplete="email"
                        name="email" 
                        type="email" 
                        placeholder="you@example.com" 
                    />
                </div>
                {state?.errors?.email && <p className="text-red-600">{state.errors.email}</p>}

                <div className='space-y-1'>
                    <PasswordInput />
                </div>
                    {
                        state?.errors?.password && (
                            <div className="text-red-600">
                                <p>Password must be:</p>
                                <ul>
                                    {state.errors.password.map( (error: any) => (
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
                
                <SubmitButton text="Sign In" />
            </form>

            <form action={loginWithGithub}>
                <button 
                    className='flex items-center justify-center w-full justify-center rounded-md border border-transparent 
                    bg-slate-200 py-3 px-4 text-sm font-medium text-slate-800 shadow-sm 
                    hover:bg-slate-300 focus:outline-none focus:ring-2 
                    focus:ring-indigo-500 focus:ring-offset-2' 
                    type="submit">
                        <img loading="lazy" height="20" width="20" id="provider-logo" src="https://authjs.dev/img/providers/github.svg"></img>
                        <span className='grow'>Signin with GitHub</span>
                </button>
            </form>
        </div>
    )
}