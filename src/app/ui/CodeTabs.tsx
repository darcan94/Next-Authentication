'use client'
import * as Tabs from '@radix-ui/react-tabs';
import {atomOneDark} from "react-syntax-highlighter/dist/cjs/styles/hljs";
import SyntaxHighlighter from "react-syntax-highlighter/dist/cjs/light-async";

export interface CodeTabsProps {
    fileName: string;
    lang: string;
    code: string;
}

export default function CodeTabs({ sourceCodes }: {sourceCodes: CodeTabsProps[]} ){

    return (
        <div className="w-full h-full lg:w-10/12 lg:h-5/6 bg-gray-900/80 px-4 lg:rounded-md shadow-lg overflow-y-auto">
            <Tabs.Root defaultValue="tab0" className="flex flex-col">
                <Tabs.List className="sticky top-0 backdrop-blur-md flex  gap-4 justify-between text-sm text-gray-400 overflow-x-auto p-2">
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
                                PreTag="div"
                                wrapLongLines
                                codeTagProps={{
                                    style: {
                                        fontSize: ".8rem",
                                    },
                                }}>
                                {sourceCode.code}
                            </SyntaxHighlighter>
                        </Tabs.Content>
                    ))
                }
            </Tabs.Root>
        </div>
    )
}