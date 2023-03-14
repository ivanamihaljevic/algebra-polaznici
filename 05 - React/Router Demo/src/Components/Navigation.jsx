import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export default function Navigation() {
    return (
        <Navbar bg='light' expand='lg'>
            <Container>
                <Navbar.Brand href='/'>Expenses App</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='me-auto'>
                        <Link to='/expenses'>Expenses</Link> | 
                        <Link to='/invoices'>Invoices</Link> | 
                        <Link to='/balance'>Balance</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}