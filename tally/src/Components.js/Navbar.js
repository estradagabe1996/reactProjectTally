import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function Thenavbar() {
  return (
   
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">TALLY</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/login">LOGIN</Nav.Link>
            <Nav.Link href="/checkout">CHECKOUT</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
}

export default Thenavbar;