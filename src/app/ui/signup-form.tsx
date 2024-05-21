'use client'
import {useFormState} from 'react-dom'
import {
    InputField,
    PasswordInput,
    SubmitButton
} from "@/app/ui/form-components";
import {signUp} from "@/app/lib/actions";
import { Link } from 'next-view-transitions';

export function SignupForm() {
    const [state, action] = useFormState(signUp, undefined)
    return (
        <div className='w-full max-w-md space-y-8' style={{ viewTransitionName: 'container'}}>
            <div>
                <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-white">
                    Create an account
                </h2>
                <p className="mt-2 text-center text-sm text-gray-400">
                    <span>Already have an account? </span>
                    <Link className="font-medium text-indigo-500 hover:text-indigo-400" href="/login">
                        Sign in
                    </Link>
                </p>
            </div>

            <form className="space-y-6" action={ action }>
                <div className='space-y-1'>
                    <label className="block text-sm font-medium text-gray-400" htmlFor="name">Name</label>
                    <InputField id="name" name="name" placeholder="Name"/>
                </div>
                {state?.errors?.name && <p className="text-red-600">{state.errors.name}</p>}

                <div className='space-y-1'>
                    <label className="block text-sm font-medium text-gray-400" htmlFor="email">Email</label>
                    <InputField id="email" name="email" type="email" placeholder="you@example.com" />
                </div>
                {state?.errors?.email && <p className="text-red-600">{state.errors.email}</p>}

                <div className='space-y-1'>
                    <PasswordInput />
                </div>
                <div>
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
                </div>
                
                <SubmitButton text="Sign up" />
            </form>
        </div>
    )
}