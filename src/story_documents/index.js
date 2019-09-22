import React from 'react';

const html = "Hello\nThere".split('\n');

const Document = () => {
    return (
        <div>
            {html.map(paragraph=><p>{paragraph}</p>)}
        </div>
    )
}

export default Document;