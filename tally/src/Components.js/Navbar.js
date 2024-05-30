import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Thenavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">TALLY</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/list">Songs</Nav.Link>
            <Nav.Link href="/practice">Practice</Nav.Link>
          </Nav>
          <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <a href="/login">LOG IN</a>
          </Navbar.Text>
        </Navbar.Collapse>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Thenavbar;