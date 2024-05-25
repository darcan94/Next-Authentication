'use client'
import * as Tabs from '@radix-ui/react-tabs';
import {sourceCodes} from "@/app/ui/code";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import {atomOneDark} from "react-syntax-highlighter/dist/cjs/styles/hljs";

export default function CodeTabs(){

    return (
        <Tabs.Root defaultValue="tab0" className="flex flex-col">
            <Tabs.List className="sticky top-0 backdrop-blur-md flex justify-between text-sm text-gray-400 overflow-x-auto p-2">
                <div className="flex items-center space-x-2">
                    <div className="h-3 w-3 rounded-full bg-red-500"/>
                    <div className="h-3 w-3 rounded-full bg-yellow-500"/>
                    <div className="h-3 w-3 rounded-full bg-green-500"/>
                </div>
                <div className="flex gap-3">
                    {
                        sourceCodes.map((sourceCode, index) => (
                            <Tabs.Trigger
                                className="min-w-max hover:text-cyan-700 data-[state=active]:text-cyan-700"
                                key={index}
                                value={`tab${index}`}>
                                    {sourceCode.fileName}
                            </Tabs.Trigger>
                        ))
                    }
                </div>
            </Tabs.List>
            {
                sourceCodes.map((sourceCode, index) => (
                    <Tabs.Content key={index} value={`tab${index}`}>
                        <SyntaxHighlighter
                            language={sourceCode.lang}
                            style={atomOneDark}
                            customStyle={{margin: 0, background: "transparent"}}
                            codeTagProps={{
                                style: {
                                    fontSize: ".8rem",
                                    textWrap: "wrap",
                                },
                            }}>
                            {sourceCode.code}
                        </SyntaxHighlighter>
                    </Tabs.Content>
                ))
            }
        </Tabs.Root>
    )
}