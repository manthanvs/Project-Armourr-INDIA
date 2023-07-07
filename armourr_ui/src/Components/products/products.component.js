import React, { Component } from "react";
// import { InstagramEmbed } from "react-social-media-embed";
import Container from "react-bootstrap/Container";

import "./products.css";

export default class Products extends Component {
	componentDidMount() {
		// this statement will scroll up to the top and
		window.scrollTo(0, 0);

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
				<h5>Products About New Merch will be seen here.</h5>
				{/* https://codepen.io/ViktorKorolyuk/pen/GYGwpv */}
				<div className="display">
					<Container>
						<a
							className="HOVER"
							href="https://www.instagram.com/armourr_india/">
							<span />
							<h4>New Merch ,Coming Soon! </h4>
						</a>

						{/* This can be used for Dont' Hover me! disabled flash */}
						{/* eslint-disable-next-line */}
						{/* <a className="HOVER FLASH">
						<span />
						<text>Don't Hover Me!</text>
					</a> */}
					</Container>
				</div>
				<Container className="cardview">
					<div className="temp_card" style={{ "--clr": "#009688" }}>
						<div className="img-box">
							<img
								src="https://picsum.photos/200/275?random=1"
								alt="temp"
							/>
						</div>

						<div className="content">
							<h2>Next Ideas</h2>
							<p>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Cupiditate magnam ipsam
								dolores tenetur eum libero aliquam animi minus
								nulla velit!
							</p>
							<a href="/">Read more</a>
						</div>
					</div>
					<div className="temp_card" style={{ "--clr": " #FF3E7F" }}>
						<div className="img-box">
							<img
								src="https://picsum.photos/200/275?random=2"
								alt="temp"
							/>
						</div>
						<div className="content">
							<h2>Upcoming Colabs</h2>
							<p>
								Lorem ipsum, dolor sit amet consectetur
								adipisicing elit. Architecto, hic? Magnam eum
								error saepe doloribus corrupti repellat quisquam
								alias doloremque!
							</p>
							<a href="/">Read More</a>
						</div>
					</div>
					<div className="temp_card" style={{ "--clr": " #03A9F4" }}>
						<div className="img-box">
							<img
								src="https://picsum.photos/200/275?random=3"
								alt="temp"
							/>
						</div>
						<div className="content">
							<h2>New Stock</h2>
							<p>
								Lorem ipsum, dolor sit amet consectetur
								adipisicing elit. Architecto, hic? Magnam eum
								error saepe doloribus corrupti repellat quisquam
								alias doloremque!
							</p>
							<a href="/">Read More</a>
						</div>
					</div>
				</Container>
			</div>
		);
	}
}
