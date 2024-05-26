'use client'
import {login} from '@/app/lib/actions'
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
        <div className='w-full space-y-8' style={{ viewTransitionName: 'container'}}>
            <div>
                <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                    Sign in to your account
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                    <span>Or </span>
                    <Link className="font-medium text-indigo-600 hover:text-indigo-400" href="/signup">
                        Sign up
                    </Link>
                </p>
            </div>

            <form className="space-y-6" action={ action }>
                <div className='space-y-1'>
                    <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email address</label>
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
                    {state?.message && <p className="text-red-600">{state.message}</p>}
                
                <SubmitButton text="Sign In" />
            </form>
        </div>
    )
}