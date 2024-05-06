'use client'
import {signup} from "@/app/actions/auth";
import {useFormState, useFormStatus} from 'react-dom'

export function SignupForm() {
    const [state, action] = useFormState(signup, undefined)
    return (
        <form className="w-full flex flex-col gap-4" action={ action }>
            <div>
                <label className="block" htmlFor="name">Name</label>
                <input className="w-full p-2 rounded-md" id="name" name="name" placeholder="Name" />
            </div>
            {state?.errors?.name && <p>{state.errors.name}</p>}

            <div>
                <label className="block" htmlFor="email">Email</label>
                <input className="w-full p-2 rounded-md" id="email" name="email" type="email" placeholder="Email" />
            </div>
            {state?.errors?.email && <p>{state.errors.email}</p>}

            <div>
                <label className="block" htmlFor="password">Password</label>
                <input className="w-full p-2 rounded-md" id="password" name="password" type="password" />
            </div>
            <div>
                {
                    state?.errors?.password && (
                        <div>
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
            <SignupButton />
        </form>
    )
}


function SignupButton() {
    const { pending } = useFormStatus()

    return (
        <button className="bg-blue-500 p-4 w-full rounded-md text-white" aria-disabled={pending} type="submit">
            {pending ? 'Submitting...' : 'Sign up'}
        </button>
    )
}