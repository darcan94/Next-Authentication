'use client'
import {useFormState} from 'react-dom'
import {Form, FormContainer, FormHeader, InputField, PasswordInput, SubmitButton} from "@/app/ui/form";
import {signUp} from "@/app/lib/actions";

export function SignupForm() {
    const [state, action] = useFormState(signUp, undefined)
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
                </Form>
        </FormContainer>
    )
}