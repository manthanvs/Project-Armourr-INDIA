import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export class Header extends Component {
	componentDidMount() {
		// scroll effect i.e when scroll down navbar get hidden and when scroll up navbar appears again
		const nav = document.querySelector(".nav");
		let lastScrollY = window.scrollY;

		window.addEventListener("scroll", () => {
			if (lastScrollY < window.scrollY) {
				nav.classList.add("nav--hidden");
			} else {
				nav.classList.remove("nav--hidden");
			}

			lastScrollY = window.scrollY;
		});
	}

	render() {
		return (
			<div className="container">
				<nav className="nav">
					<img
						src="images/Armourr_LogoFull_for_footer.png"
						alt="logo"
						className="logo"
					/>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
						<li>
							<Link to="/details">Details</Link>
						</li>
						<li>
							<Link to="/contact">Contact</Link>
						</li>
					</ul>
				</nav>
			</div>
		);
	}
}

export default Header;
