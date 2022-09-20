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
              <LinkContainer to="/">
                <Nav.Link>
                <span className="fa-xl">💻</span>Introduction
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/getting_started">
                <Nav.Link>
                <span className="fa-xl">📚</span>Getting Started
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/gitflow">
                <Nav.Link>
                <span className="fa-xl">🗂️</span>Gitflow
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/stack">
                <Nav.Link>
                <span className="fa-xl">🗄️</span>Stack
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/techniques">
                <Nav.Link>
                <span className="fa-xl">🧩</span>Techniques
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/posts/">
                <Nav.Link>
                <span className="fa-xl">📰</span>Posts
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
                  <span className="fa-xl">👤</span>Login
                  </Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <hr style={{padding: 0, margin: 0}} />
    </header>
  );
}

export default Header;
