'use client'
import { Highlight } from 'prism-react-renderer';

export default function SyntaxHighlighter({ code, language}: any){    
    return (
        <Highlight code={code} language={language}>
            {({tokens, getLineProps, getTokenProps }) => (
                <div className="text-wrap p-2" >
                    {tokens.map((line, i) => (
                        <div key={ i } {...getLineProps({ line })}>
                            {line.map((token, key) => {
                                const props = getTokenProps({ token });
                                return <span key={key} {...props} />;
                            })}
                        </div>
                    ))}
                </div>
            )}
        </Highlight>    
    );
}