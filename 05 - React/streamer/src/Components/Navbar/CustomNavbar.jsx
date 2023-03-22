import { Nav, Navbar, Container } from 'react-bootstrap';

export default function CustomNavbar() {
    return (
        <>
            <div className='top-bar'>
                <p>Streamer is currently in BETA, occasional bugs may occur. Report any bugs to bugs@streamer.com.</p>
            </div>
            <Navbar expand='lg' className='navbar-dark' sticky='top'>
                <Container style={{ maxWidth: '100%' }}>
                    <Navbar.Brand href='/'><span className='material-symbols-outlined'> stream </span></Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav>
                            <Nav.Link href='/trending/movies/week'>Movies</Nav.Link>
                            <Nav.Link href='/trending/tv/week'>TV Shows</Nav.Link>
                            <Nav.Link href='/trending/people/week'>People</Nav.Link>
                            <Nav.Link href='/search'><span className='material-symbols-outlined'> search </span></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}