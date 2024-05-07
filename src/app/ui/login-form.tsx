'use client'
import {login} from '@/app/actions/auth'
import {useFormState, useFormStatus} from 'react-dom'

export function LoginForm() {
    const [state, action] = useFormState(login, undefined)
    return (
        <form className="w-full flex flex-col gap-4" action={ action }>
            <div>
                <label className="block" htmlFor="email">Email</label>
                <input className="w-full p-2 rounded-md" id="email" name="email" type="email" placeholder="Email" />
            </div>
            {state?.errors?.email && <p className="text-red-600">{state.errors.email}</p>}

            <div>
                <label className="block" htmlFor="password">Password</label>
                <input className="w-full p-2 rounded-md" id="password" name="password" type="password" />
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
            <LoginButton />
        </form>
    )
}


function LoginButton() {
    const { pending } = useFormStatus()

    return (
        <button className="bg-blue-500 p-4 w-full rounded-md text-white" aria-disabled={pending} type="submit">
            {pending ? 'Submitting...' : 'Login'}
        </button>
    )
}