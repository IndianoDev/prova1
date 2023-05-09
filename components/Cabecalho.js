import Link from 'next/link'
import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

const Cabecalho = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/filmes">Animes</Navbar.Brand>
          <Nav className="me-auto">
            <Link className='nav-link' href="/tabela">Animes</Link>
            <Link className='nav-link' href="/generos">Gêneros</Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Cabecalho