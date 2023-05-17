import React, {useRef} from 'react'

function TextInput() {
    const inputRef = useRef(null)

    const handleClick = () => {
        inputRef.current.focus();
    }

    return(
        <div>
            <h2>Text Input</h2>
            <p>Basic useRef input</p>
            <input type='text' ref={inputRef} />
            <button onClick={handleClick}>Focus input</button>
        </div>
    );
}

export default TextInput