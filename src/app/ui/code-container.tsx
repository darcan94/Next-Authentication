import SyntaxHighlighter from "./syntaxHighlighter"
import { sourceCodes } from "./code"
import { Fragment } from "react"

export default function CodeContainer(){
    return (
        <div className="flex flex-col gap-2 w-8/12 h-5/6 bg-gray-950 rounded-md p-4 shadow-lg">
          <div className="flex items-center space-x-2">
            <div className="h-3 w-3 rounded-full bg-red-500" />
            <div className="h-3 w-3 rounded-full bg-yellow-500" />
            <div className="h-3 w-3 rounded-full bg-green-500" />
          </div>
          <div role="tablist" className={`tabs tabs-xs w-full grid-cols-${sourceCodes.length} text-wrap overflow-y-auto overflow-x-hidden`}>
            {
              sourceCodes.map( (sourceCode, index) => (
                <Fragment key={index}>
                    <input type="radio" name="my_tabs_2" role="tab" className="tab sticky top-0 bg-gray-950 focus:text-cyan-400 text-left" aria-label={sourceCode.fileName}/>
                    <pre role="tabpanel" className="tab-content">
                        <SyntaxHighlighter code={sourceCode.code} language={sourceCode.lang} />
                    </pre>
                </Fragment>))
            }
          </div>
        </div>
    )
}