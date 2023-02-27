import Link from "next/link";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="nav">
      <Container>
        <NavDropdown title="Categories " id="collasible-nav-dropdown">
          <Link href="#Sports">
            Sports <i class="bi bi-arrow-right-short"></i>
          </Link>
          <Link href="#Mobile">
            Mobile <i class="bi bi-arrow-right-short"></i>
          </Link>
          <Link href="#electric machines">
            electric machines <i class="bi bi-arrow-right-short"></i>
          </Link>
          <Link href="#Home Furniture">
            Home Furniture <i class="bi bi-arrow-right-short"></i>
          </Link>
          <Link href="#jewelry">
            jewelry <i class="bi bi-arrow-right-short"></i>
          </Link>
          <Link href="#Fashion and Accessories">
            Fashion and Accessories <i class="bi bi-arrow-right-short"></i>
          </Link>
          <NavDropdown.Divider />
          <Link href="#Other Categories">Other Categories</Link>
        </NavDropdown>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link href="#Selling">Selling on ASR</Link>
            <Link href="#Agents">Agents</Link>
            <Link href="#Contact">Contact</Link>
            <Link href="#Customers Service">Customers Service</Link>
          </Nav>
          <Nav>
            <Link href="#d-app" className="d-app">
              Download App <i class="bi bi-phone-fill"></i>
            </Link>
            <Link href="/order" className="return">
              Returns & Orders
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
