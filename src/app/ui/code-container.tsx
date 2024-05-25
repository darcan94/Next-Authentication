'use client'
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight"
import { sourceCodes } from "./code"
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs"
import {Tabs, Tab} from "@nextui-org/tabs";

export default function CodeContainer(){
    return (
        <div className="flex flex-col gap-2 w-10/12 h-5/6 bg-gray-950 rounded-md p-4 shadow-lg">

          <Tabs items={sourceCodes}>
              {sourceCodes.map(( sourceCode, index ) => (
                  <Tab key={index} title={sourceCode.fileName}>
                      <SyntaxHighlighter
                         language={sourceCode.lang}
                         style={atomOneDark}
                         customStyle={{margin: 0, background: "transparent"}}
                         codeTagProps={{
                             style: {
                                 fontSize: ".8rem",
                             },
                         }}>
                              {sourceCode.code}
                      </SyntaxHighlighter>)
                  </Tab>
               ))}
          </Tabs>
        </div>
    )
}