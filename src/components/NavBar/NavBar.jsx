import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
        <Navbar expand="lg" bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">Proyecto Coderhouse</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Inicio</Nav.Link>
                    <NavDropdown title="Categorias" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#productos/mujer">Mujer</NavDropdown.Item>
                    <NavDropdown.Item href="#productos/hombre">Hombres</NavDropdown.Item>
                    <NavDropdown.Item href="#productos/ninos">Niños</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#productos/todos">
                        Todas
                    </NavDropdown.Item>
                    </NavDropdown>
                </Nav>

                <Nav>
                    <Nav.Link href="#carrito">
                        {CartWidget()}
                    </Nav.Link>
                </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>  
    )
}
export default NavBar;