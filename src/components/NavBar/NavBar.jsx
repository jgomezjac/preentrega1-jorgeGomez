import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {

    const handleCollapse=() => {
        console.log("handleCollapse");
        var nav = document.getElementById("basic-navbar-nav");
        //var btn = document.getElementById("navbarBtn");
        nav.click();
        //btn.classList.add("collapsed");
    }

    return (
        <Navbar expand="lg" bg="dark" data-bs-theme="dark">
            <Container>

                <Link to='/' className='navbar-brand'>Proyecto Coderhouse</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <NavLink className="nav-link" to='/'>Inicio</NavLink>
                    <NavDropdown title="Categorias" id="basic-nav-dropdown">
                    <NavLink onClick={handleCollapse} className='dropdown-item' to='/category/gorras'>Gorras</NavLink>
                    <NavLink onClick={handleCollapse} className='dropdown-item' to='/category/camisas'>Camisas</NavLink>
                    <NavDropdown.Divider />
                    <NavLink onClick={handleCollapse} className='dropdown-item' to='/'>Todas</NavLink>
                    </NavDropdown>
                </Nav>

                <Nav>
                    <NavLink className="dropdown-item" to='/cart'>
                        {CartWidget()}
                    </NavLink>
                </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
//export default NavBar;