import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {

    const categories = [
        {id:1, name:'Gorras', path:'/category/gorras'},
        {id:2, name:'Remeras', path:'/category/remeras'},
        {id:3, name:'Todas', path:'/'}
    ]

    const handleCollapse=() => {
        console.log("handleCollapse");
        var nav = document.getElementById("basic-navbar-nav");
        nav.click();
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
                    {categories.map(category => <NavLink key={category.id} onClick={handleCollapse} className='dropdown-item' to={`${category.path}`}>{category.name}</NavLink> )}
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