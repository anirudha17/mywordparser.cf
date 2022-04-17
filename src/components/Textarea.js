import React, { useState } from "react"

function Textarea() {

    const [text, setText] = useState("Enter your text")

    function handleChange(event) {
        setText(event.target.value);
    }

    function handleUpClick() {
        const newText = text.toUpperCase();
        setText(newText);
    }

    function handleLoClick() {
        const newText = text.toLowerCase();
        setText(newText);
    }

    function handleClear() {
        setText("");
    }

   const handleCopy = () => {
        var copyText = document.getElementById("exampleFormControlTextarea1");

        copyText.select();
        copyText.setSelectionRange(0, 99999);

        navigator.clipboard.writeText(copyText.value);
    }

    return (
        <>
            <div className="container">
                <h2>Enter text</h2>
                <textarea className="form-control my-2" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleChange} ></textarea>
                <button type="button" className="btn btn-primary mx-1" onClick={handleUpClick}>Uppercase</button>
                <button type="button" className="btn btn-primary mx-1" onClick={handleLoClick}>Lowercase</button>
                <button type="button" className="btn btn-primary mx-1" onClick={handleClear}>Clear</button>
                <button type="button" className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
            </div>
            <div className="container my-2">
                <h2>Text summary</h2>
                <p>words: {text.split(" ").length} characters: {text.length}</p>
            </div>
        </>
    )
}

export default Textarea