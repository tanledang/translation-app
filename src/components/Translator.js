import { React, useState } from 'react';
import rot13 from 'rot-thirteen';

const Translator = ({initialText}) => {
    const [text, setText] = useState(initialText || "");
    const [translated, setTranslated] = useState(rot13(initialText) || '');

    const updateText = newText => {
        setText(newText);
        setTranslated(rot13(newText))
    }

    return (
        <div>
            <h1>Translator</h1>
            <input onChange={(event) => updateText(event.target.value)} type="text"/>
            <p>{text}</p>
            <p>{translated}</p>
        </div>
    )
}

export default Translator;