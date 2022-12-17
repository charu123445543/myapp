import React from 'react'
import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

const Logo = ( props ) => {
    return (
        <div>
            {/* <p>this islogo</p> */}

            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">{props.mylogo}</Navbar.Brand>

                    {/* <img src="https://picsum.photos/seed/picsum/20/30" alt="myimage" width="50" height="60"></img> */}
                    <img src={props.src} alt="myimage" width="50" height="60"></img>


                </Container>
            </Navbar>

        </div>
    )
}

export default Logo
