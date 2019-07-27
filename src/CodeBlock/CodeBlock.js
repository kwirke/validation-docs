import React, {useCallback} from 'react';
import highligher from 'highlight.js'

export const CodeBlock = ({text}) => {
    const highlightCode = useCallback((node) => {
        highligher.highlightBlock(node)
    }, [])
    return (
        <code ref={highlightCode}>
            {text}
        </code>
    )
}