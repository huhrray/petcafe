import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import { useState } from 'react';

export const NavbarComponent = () => {
    const [login, setLogin] = useState(false);

    return (
        <Navbar
            collapseOnSelect
            expand="lg"
            bg="light"
            variant="light"
            sticky="top"
        >
            <Container>
                <Navbar.Brand href="/" as="h1">
                    Danee Mom
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#greeting">👦🏻Greeting</Nav.Link>
                        <Nav.Link href="#commnunity">🗣Community</Nav.Link>
                        <Nav.Link href="https://smartstore.naver.com/daneemom">
                            🛍️ Shop
                        </Nav.Link>
                        <NavDropdown title="Info" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#location">
                                Location
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#contact">
                                Contact
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/login">Log in</Nav.Link>
                        {login ? (
                            <Nav.Link eventKey={2} href="/profile">
                                Profile
                            </Nav.Link>
                        ) : (
                            <Nav.Link eventKey={2} href="/signup">
                                Sign up
                            </Nav.Link>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
