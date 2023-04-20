import React, { Component } from "react";
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
			<div>
				<div className="container">
					<nav className="nav">
						<img
							src="images/Armourr_LogoFull.png"
							alt="logo"
							className="logo"
						/>
						<ul>
							<li>
								<a href="/">Home</a>
							</li>
							<li>
								<a href="/">About</a>
							</li>
							<li>
								<a href="/">Details</a>
							</li>
							<li>
								<a href="/">Contact</a>
							</li>
						</ul>
					</nav>
					<div className="h1_text">
						<p>ARMOURR INDIA</p>
						<h1>A Sports Brand to Rely On!</h1>
						<h1>A Sports Brand to Rely On!</h1>
						<h1>A Sports Brand to Rely On!</h1>
						<h1>A Sports Brand to Rely On!</h1>
						<h1>A Sports Brand to Rely On!</h1>
						<h1>A Sports Brand to Rely On!</h1>
						<h1>A Sports Brand to Rely On!</h1>
						<h1>A Sports Brand to Rely On!</h1>
						<h1>A Sports Brand to Rely On!</h1>
						<h1>A Sports Brand to Rely On!</h1>
						<h1>A Sports Brand to Rely On!</h1>
						<h1>A Sports Brand to Rely On!</h1>
						<h1>A Sports Brand to Rely On!</h1>
						<h1>A Sports Brand to Rely On!</h1>
						<h1>A Sports Brand to Rely On!</h1>
						<h1>A Sports Brand to Rely On!</h1>
						<h1>A Sports Brand to Rely On!</h1>
						<h1>A Sports Brand to Rely On!</h1>
						<h1>A Sports Brand to Rely On!</h1>
					</div>
				</div>
			</div>
		);
	}
}

export default Header;
