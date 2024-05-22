import SyntaxHighlighter from "./syntaxHighlighter";

export default function CodeContainer(){
    return (
        <div className="w-9/12 space-y-8">
          <div className="bg-gray-950 rounded-md p-4 shadow-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
              </div>
            </div>
            <div className="mt-4 text-gray-400">
                <div role="tablist" className="tabs">
                    <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="login-form.tsx"/>
                    <div role="tabpanel" className="tab-content rounded-box p-2">
                        <SyntaxHighlighter 
                            language="typescript"
                            code={`
                                'use client'
                                import {useFormState, useFormStatus} from 'react-dom'
                                import {login} from '@app/lib/actions'
                                
                                export function LoginForm(){
                                    const [state, action] = useFormState(login, undefined)

                                    return {
                                        <form action={ action }>
                                            <div>
                                                <label htmlFor="email">Email address</label>
                                                <input name="email" type="email" placeholder="you@example.com"/>
                                            </div>

                                            <div>
                                                <label htmlFor="password">Password</label>
                                                <input name="password" type="password" placeholder="password"/>
                                            </div>
                                            <LoginButton/>
                                        </form>
                                    }
                                }

                                export function LoginButton(){
                                    const { pending } = useFormStatus()
                                    return (
                                        <button aria-disabled={pending} type="submit">
                                            {pending ? 'Submitting...' : Login }
                                        </button>
                                    )
                                }
                            `}/>
                    </div>

                    <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="app/auth.ts" />
                    <div role="tabpanel" className="tab-content rounded-box p-6">Tab content 2</div>

                    <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="app/auth.config.ts" />
                    <div role="tabpanel" className="tab-content rounded-box p-6">Tab content 3</div>

                    <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="app/middleware.ts" />
                    <div role="tabpanel" className="tab-content rounded-box p-6">Tab content 3</div>
                </div>
            </div>
          </div>
        </div>
    )
}