import React from 'react';
import { Container } from 'react-bootstrap';

export default function Footer() {
    return (
        <Container>
            <footer style={{margin: "2rem", textAlign: "center"}}>
                Shopping-Car &copy; {new Date().getFullYear()}
            </footer>
        </Container>
    )
}