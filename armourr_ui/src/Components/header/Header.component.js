import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CgMenu,CgClose } from "react-icons/cg";
// import Container from "react-bootstrap/Container";
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Offcanvas from 'react-bootstrap/Offcanvas';
import "./Header.css";

export default class Header extends Component {
	
  closeMenu = () =>{
    let sidemen = document.getElementById("sidemenu");
    sidemen.style.right="-200px";
  }
  
  openMenu = () =>{
    let sidemen = document.getElementById("sidemenu");
    sidemen.style.right="0";
  }
  
  
  componentDidMount() {
		// scroll effect i.e when scroll down navbar get hidden and when scroll up navbar appears again
		const nav = document.querySelector(".nav");
		window.addEventListener("scroll", () => {
			if (window.scrollY === 0) {
				nav.classList.remove("nav--hidden");
			} else {
				nav.classList.add("nav--hidden");
			}
		});
	}

	render() {
		return (
			<nav className="nav">
				<img src="images/apple-touch-icon.png" alt="logo" className="logo" />
				<ul id="sidemenu">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/updates">Updates</Link>
					</li>
					<li>
						<Link to="/contact">Contact</Link>
					</li>
        <CgClose className="iconhide" onClick={() => this.closeMenu()}/>
				</ul>
        <CgMenu className="iconhide" onClick={() => this.openMenu()}/>
			</nav>
		);
	}
}

// Navbar
// (
//   <div>
//     <Navbar key='md' expand='md' className="mb-3 nav">
//     <Container fluid>
//       <Navbar.Brand href="#">
//     <img
//           src="apple-touch-icon.png"
//           alt="logo"
//           className="logo"
//         /></Navbar.Brand>
//       <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
//       <Navbar.Offcanvas
//       id={`offcanvasNavbar-expand-md`}
//       aria-labelledby={`offcanvasNavbarLabel-expand-md`}
//       placement="end"
//       className="nav"
//       >
//       <Offcanvas.Header closeButton>
//         <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
//         </Offcanvas.Title>
//       </Offcanvas.Header>
//       <Offcanvas.Body>

//       <Nav className="justify-content-end flex-grow-1 pe-3">
//         <Nav>
//           <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           </ul>
//         </Nav>

//         <Nav>
//           <ul>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           </ul>
//         </Nav>

//         <Nav>
//           <ul>
//           <li>
//             <Link to="/updates">Updates</Link>
//           </li>
//           </ul>
//         </Nav>

//         <Nav>
//           <ul>
//           <li>
//             <Link to="/contact">Contact</Link>
//           </li>
//           </ul>
//         </Nav>
//       </Nav>
//       </Offcanvas.Body>
//       </Navbar.Offcanvas>
//     </Container>
//     </Navbar>
//   </div>
//       )
