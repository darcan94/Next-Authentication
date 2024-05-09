'use client'
import {signup} from "@/app/actions/auth";
import {useFormState} from 'react-dom'
import {Form, FormContainer, FormHeader, InputField, SubmitButton} from "./form";
import { EyeIcon } from "./icons";

export function SignupForm() {
    const [state, action] = useFormState(signup, undefined)
    return (
        <FormContainer>
            <FormHeader title="Create an account" subtitle="Sign in" text="Already have an account?" link="/login"/>
                <Form action={ action }>
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
                        <label className="block text-sm font-medium text-gray-400" htmlFor="password">Password</label>
                        <div className="mt-1 flex items-center">
                            <InputField id="password" name="password" placeholder="Password" type="password" />
                            <div className="ml-3 flex">
                            <button type='button' className="text-gray-400 hover:text-gray-300">
                                <EyeIcon className="h-5 w-5" />
                                <span className="sr-only">Show password</span>
                            </button>
                        </div>
                        </div>
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
                </Form>
        </FormContainer>
    )
}