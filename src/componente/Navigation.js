import React, { Component } from 'react'
import { Container, Form, Nav, Navbar } from 'react-bootstrap'

export default class Navigation extends Component {
  render(person) {
    return (
      <div>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Form.Control onChange={(e)=>this.setState({person:{...person,fullName:e.target.value}})} placeholder='enter your name'/>
          </Nav>
        </Container>
      </Navbar>
      </div>
    )
  }
}
