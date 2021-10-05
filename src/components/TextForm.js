import React, { useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap'

const TextForm = ({ heading, mode, showAlert }) => {
    const [text, setText] = useState('')

    const convertUppercase = () => {
        const upperText = text.toUpperCase()
        setText(upperText)
        showAlert("Converted to Uppercase", "success")
    }

    const convertLowercase = () => {
        const lowerText = text.toLowerCase()
        setText(lowerText)
        showAlert("Converted to Lowercase", "success")
    }
    const handleCopy = () => {
        let text = document.getElementById('textBox')
        text.select()
        navigator.clipboard.writeText(text.value)
        showAlert("Copied to Clipboard", "success")
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        showAlert("Removed Extra Spaces", "success")
    }


    return (
        <>
            <Container className="py-5" style={{ color: mode === 'light' ? 'black' : 'white' }}>
                <Form.Group className="mb-3 tarea">
                    <h4 className='mb-3'>{heading}</h4>
                    <Form.Control style={{ background: 'transparent', color: mode === 'light' ? 'black' : 'white' }} id="textBox" onChange={(e) => setText(e.target.value)} value={text} as="textarea" rows={8} />
                    <i onClick={() => setText('')} className="fa fa-times"></i>
                </Form.Group>
                <Button className="mx-1" onClick={convertUppercase} variant="primary">Convert to Uppercase</Button>
                <Button className="mx-1" onClick={convertLowercase} variant="success">Convert to Lowercase</Button>
                <Button className="mx-1" onClick={handleExtraSpaces} variant="danger">Remove Extra Spaces</Button>
                <Button className="mx-1" onClick={handleCopy} variant="warning">Copy</Button>
            </Container>

            <Container style={{ color: mode === 'light' ? 'black' : 'white' }}>
                <h4>Your text summary</h4>
                <p><b>{text.split(" ").length}</b> words, <b>{text.length}</b> characters</p>
                <p><b>{0.008 * text.split(" ").length}</b> Minutes read</p>
                <h5>Preview : </h5>
                <p>{text !== '' ? text : <span style={{ color: 'red' }}>There is no text for preview</span>}</p>
            </Container>
        </>
    )
}

export default TextForm
