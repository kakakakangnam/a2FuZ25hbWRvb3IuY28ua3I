import React from 'react';
import { Link } from 'react-router-dom';
import * as variable from './Variables';
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';

const Header = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/"><img src="/images/index/Logo.jpg" alt="홈"/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-center" id="basic-navbar-nav">
            <Nav>
              <Link to="/firedoor" className="nav-link mx-auto px-3">방화문</Link>
              <NavDropdown title="스텐부속" className="mx-auto text-center px-3">
                {Object.keys(variable.stainless).map((e, index) => (
                  <Link key={index} 
                        to={'/stainless/' + e}
                        className="nav-link text-center">{variable.stainless[e]}
                  </Link>
                ))}
              </NavDropdown>
              <NavDropdown title="샷시부속" className="mx-auto text-center px-3">
                {Object.keys(variable.sash).map((e, index) => (
                    <Link key={index} 
                          to={'/sash/' + e} 
                          className="nav-link text-center">{variable.sash[e]}
                    </Link>
                  ))}
              </NavDropdown>
              <Link to="/lexan" className="nav-link mx-auto px-3">렉산</Link>
              <Link to="/location" className="nav-link mx-auto px-3">오시는 길</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
