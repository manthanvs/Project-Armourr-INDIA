import React, { Component } from "react";
// import { InstagramEmbed } from "react-social-media-embed";
import Container from "react-bootstrap/Container";

import "./updates.css";

export default class updates extends Component {
	componentDidMount() {
		const ANIMATEDCLASSNAME = "animated";
		const ELEMENTS = document.querySelectorAll(".HOVER");
		const ELEMENTS_SPAN = [];

		ELEMENTS.forEach((element, index) => {
			let addAnimation = false;
			// Elements that contain the "FLASH" class, add a listener to remove
			// animation-class when the animation ends
			if (element.classList[1] === "FLASH") {
				element.addEventListener("animationend", (e) => {
					element.classList.remove(ANIMATEDCLASSNAME);
				});
				addAnimation = true;
			}

			// If The span element for this element does not exist in the array, add it.
			if (!ELEMENTS_SPAN[index])
				ELEMENTS_SPAN[index] = element.querySelector("span");

			element.addEventListener("mouseover", (e) => {
				ELEMENTS_SPAN[index].style.left =
					e.pageX - element.offsetLeft + "px";
				ELEMENTS_SPAN[index].style.top =
					e.pageY - element.offsetTop + "px";

				// Add an animation-class to animate via CSS.
				if (addAnimation) element.classList.add(ANIMATEDCLASSNAME);
			});

			element.addEventListener("mouseout", (e) => {
				ELEMENTS_SPAN[index].style.left =
					e.pageX - element.offsetLeft + "px";
				ELEMENTS_SPAN[index].style.top =
					e.pageY - element.offsetTop + "px";
			});
		});
	}

	render() {
		return (
			<div className="details">
				<h3>Updates About New Merch will be seen here.</h3>
				{/* https://codepen.io/ViktorKorolyuk/pen/GYGwpv */}
				<div className="display">
				<Container>
					<a
						className="HOVER"
						href="https://www.instagram.com/armourr_india/">
						<span />
						<p>New Merch ,Coming Soon! </p>
					</a>

					
					{/* This can be used for Dont' Hover me! disabled flash */}
					{/* eslint-disable-next-line */}
					{/* <a className="HOVER FLASH">
						<span />
						<text>Don't Hover Me!</text>
					</a> */}
					</Container>
				</div>
			</div>
		);
	}
}
