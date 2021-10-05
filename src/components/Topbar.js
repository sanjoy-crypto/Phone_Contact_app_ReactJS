import React from 'react'
import { Navbar, Container, Nav, Form } from 'react-bootstrap'
const Topbar = ({ mode, toggleMode }) => {
    return (
        <>
            <Navbar bg={`${mode}`} variant={`${mode}`}>
                <Container>
                    <Navbar.Brand href="#home">TextEditor</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                    <Form.Check
                        className={`${mode === 'dark' ? 'text-light' : 'text-dark'}`}
                        type="switch"
                        id="custom-switch"
                        label={`${mode === 'dark' ? 'Enable Light Mode' : 'Enable Dark Mode'}`}
                        onClick={toggleMode}
                    />
                </Container>
            </Navbar>
        </>
    )
}

export default Topbar
