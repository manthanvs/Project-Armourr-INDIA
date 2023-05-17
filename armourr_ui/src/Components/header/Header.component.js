import React, { Component } from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "./Header.css";

export default class Header extends Component {
	componentDidMount() {
		// scroll effect i.e when scroll down navbar get hidden and when scroll up navbar appears again
		const nav = document.querySelector(".nav");

		window.addEventListener("scroll", () => {
			if ( window.scrollY === 0) {
				nav.classList.remove("nav--hidden");
      } else {
				nav.classList.add("nav--hidden");
			}

		});
	}

	render() {
		return (
<div>
  <Navbar key='md' expand='md' className="mb-3 nav">
  <Container fluid>
    <Navbar.Brand href="#">
	<img
        src="apple-touch-icon.png"
        alt="logo"
        className="logo"
      /></Navbar.Brand>
    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
    <Navbar.Offcanvas
    id={`offcanvasNavbar-expand-md`}
    aria-labelledby={`offcanvasNavbarLabel-expand-md`}
    placement="end"
    className="nav"
    >
    <Offcanvas.Header closeButton>
      <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
      </Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body>
      
	  <Nav className="justify-content-end flex-grow-1 pe-3">
      <Nav>
        <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        </ul>
      </Nav>

      
      <Nav>
        <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        </ul>
      </Nav>

      
      <Nav>
        <ul>
        <li>
          <Link to="/details">Details</Link>
        </li>
        </ul>
      </Nav>

      
      <Nav>
        <ul>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        </ul>
      </Nav>
    </Nav>
    </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
  </Navbar>
</div>
		);
	}
}


// <div className="container">
//   <nav className="nav">
//     <img
//       src="images/Armourr_LogoFull_for_footer.png"
//       alt="logo"
//       className="logo"
//     />
//     <ul>
//       <li>
//         <Link to="/">Home</Link>
//       </li>
//       <li>
//         <Link to="/about">About</Link>
//       </li>
//       <li>
//         <Link to="/details">Details</Link>
//       </li>
//       <li>
//         <Link to="/contact">Contact</Link>
//       </li>
//     </ul>
//   </nav>
// </div>