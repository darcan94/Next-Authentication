'use client'
import {login} from '@/app/actions/auth'
import Link from 'next/link'
import {useFormState} from 'react-dom'
import {Form, FormContainer, FormHeader, InputField, SubmitButton} from './form'
import { EyeIcon } from './icons'

export function LoginForm() {
    const [state, action] = useFormState(login, undefined)
    return (
        <FormContainer>
            <FormHeader title='Sign in to your account' subtitle='sign up' text='Or' link='/signup'/>
            <Form action={ action }>
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
                    <label className="block text-sm font-medium text-gray-400" htmlFor="password">Password</label>
                    <div className="mt-1 flex items-center">
                        <InputField id="password" 
                            autoComplete="current-password"
                            name="password" 
                            placeholder="Password"
                            type="password" 
                        />

                        <div className="ml-3 flex">
                            <button type='button' className="text-gray-400 hover:text-gray-300">
                                <EyeIcon className="h-5 w-5" />
                                <span className="sr-only">Show password</span>
                            </button>
                        </div>
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
                <SubmitButton text="Sign In" />
            </Form>
        </FormContainer>
    )
}
