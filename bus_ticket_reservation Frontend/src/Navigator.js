import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Navi.css";
import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
function Navigator() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      data-bs-theme="dark"
      id="navbar"
    >
      <div className="container-fluid gap-1">
        <Image src="../logo.gif" width={40} height={30} roundedCircle />
        <Navbar.Brand href="#navbar" className="outline-none">
          Booking.com
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#mainbody">Home</Nav.Link>
            {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
            <NavDropdown title="Services" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#footer">About</NavDropdown.Item>
              <NavDropdown.Item href="#footer">Contact</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="tel:+9900112233">
                Call Us
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <div className="d-flex gap-2">
              {/* <Link to="/login"> */}
              <Button
                variant="outline-secondary py-0 px-3 rounded-pill"
                size="sm"
              >
                <Nav.Link className="text-light" eventKey={2} href="/login">
                  <b id="log">Login</b>
                </Nav.Link>
              </Button>
              {/* </Link> */}
            </div>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default Navigator;
