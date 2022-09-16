import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { logout } from "../actions/userActions";
import Logo from "../assets/LogoISAMC.jfif";

function Header() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <header>
      <Navbar expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/"style={{ width: "20%" }} >
            <Navbar.Brand>
              <img alt="ISAMC" src={Logo} style={{ width: "100%" }} />
            </Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto navbarLinks">
              <LinkContainer to="/cart">
                <Nav.Link>
                <i className="fa-solid fa-laptop"></i>Introduction
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/cart">
                <Nav.Link>
                <i className="fa-solid fa-book"></i>Getting Started
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/cart">
                <Nav.Link>
                <i className="fa-solid fa-code-compare"></i>Gitflow
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/cart">
                <Nav.Link>
                <i className="fa-regular fa-file-code"></i>Stack
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/cart">
                <Nav.Link>
                  <i className="fas fa-shopping-cart"></i>Techniques
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/cart">
                <Nav.Link>
                  <i className="fas fa-shopping-cart"></i>Post
                </Nav.Link>
              </LinkContainer>

              {userInfo ? (
                <NavDropdown title={userInfo.name} id="username">
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link>
                    <i className="fas fa-user"></i>Login
                  </Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
