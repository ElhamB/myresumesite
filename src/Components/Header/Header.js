import React from "react"
import { Container,Navbar,Nav, NavbarBrand } from 'react-bootstrap'
import './Header.css'
class Header extends React.Component{
render(){
    return(
        <header className="header">
            <Navbar variant="dark" fixed="top">
                <Container>
                        <NavbarBrand>Elham Bagheri</NavbarBrand>
                    <Nav >
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#skills">Skills</Nav.Link>
                    <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                    <Nav.Link href="#blog">Blog</Nav.Link>
                   <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    )
}
}
export default Header