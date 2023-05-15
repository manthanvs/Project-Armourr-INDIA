import React, { Component } from "react";
import { AiOutlineAmazon, AiOutlineShoppingCart } from "react-icons/ai";
import { SiFlipkart } from "react-icons/si";
import "./about.css";

export default class about extends Component {
	opentab = (tabname) => {
		// console.log(tabname);

		// fetching documents/array which had className "tab-links" and "tab-contents" respectively
		const tablinks = document.getElementsByClassName("tab-links");
		const tabcontents = document.getElementsByClassName("tab-contents");

		// console.log(tablinks);
		// removing "active-link" from all the classes
		for (let tablink of tablinks) {
			tablink.classList.remove("active-link");
		}

		// console.log(tabcontents);
		// removing "active-tab" from all the classes
		for (let tabcontent of tabcontents) {
			tabcontent.classList.remove("active-tab");
		}

		// console.log(documentoftheclassforlink);
		// adding to "active-link" and "active-tab" to those classes where this function is called i.e. tabname containing {Surety}/{Approval}as per the click event has taken place

		// here i used querySelector to fetch the whole div and then add the active-link class as per the click
		const documentoftheclassforlink = document.querySelector(`.${tabname}`);
		// used "documentoftheclassforlink" because event was not being captured in the function
		// Therefore , used the querySelector to fetch the whole div and the changed the classList by adding "active-link"
		documentoftheclassforlink.classList.add("active-link");

		// simply used getElementById to arrow where we want to classList.add("active-tab")
		document.getElementById(tabname).classList.add("active-tab");
	};

	render() {
		return (
			<div id="about">
				{/* About */}

				{/* About Us */}
				<div className="container">
					<div className="row">
						<div className="about-col-1">
							<img src="https://picsum.photos/200/300" alt="" />
						</div>
						<div className="about-col-2">
							<h1 className="sub-title">About us</h1>
							<p>
								Lorem ipsum dolor, sit amet consectetur
								adipisicing elit. Sed, exercitationem iusto
								sequi soluta ab voluptatem minus nihil, quidem
								eligendi illo pariatur unde molestiae error
								quaerat dolor cupiditate! Voluptates, reiciendis
								delectus.
							</p>
							<div className="tab-titles">
								<p
									className="tab-links active-link quality"
									onClick={() => this.opentab("quality")}>
									Quality
								</p>
								<p
									className="tab-links approval"
									onClick={() => this.opentab("approval")}>
									Approval
								</p>
								<p
									className="tab-links surety"
									onClick={() => this.opentab("surety")}>
									Surety
								</p>
							</div>

							<div
								className="tab-contents active-tab"
								id="quality">
								<ul>
									<li>
										<span>Thread Count</span>
										<br />
										Number of thread strands per inch in ___
									</li>
									<li>
										<span>High Quality Fiber</span>
										<br />
										Closely and tightly woven together which
										helps in well balanced and vertical and
										horizontal weaves
									</li>
									<li>
										<span>Material Used.</span>
										<br />
										We Use ____
									</li>
								</ul>
							</div>

							<div className="tab-contents" id="approval">
								<ul>
									<li>
										<span>High Quality Fiber</span>
										<br />
										Closely and tightly woven together which
										helps in well balanced and vertical and
										horizontal weaves
									</li>
									<li>
										<span>Material Used.</span>
										<br />
										We Use ____
									</li>
									<li>
										<span>Thread Count</span>
										<br />
										Number of thread strands per inch in ___
									</li>
								</ul>
							</div>

							<div className="tab-contents" id="surety">
								<ul>
									<li>
										<span>Material Used.</span>
										<br />
										We Use ____
									</li>
									<li>
										<span>Thread Count</span>
										<br />
										Number of thread strands per inch in ___
									</li>
									<li>
										<span>High Quality Fiber</span>
										<br />
										Closely and tightly woven together which
										helps in well balanced and vertical and
										horizontal weaves
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				{/* SERVICES  */}
				<div id="services">
					<div className="container">
						<h1 className="sub-title">Our Services</h1>
						<div className="services-list">
							<div>
								<AiOutlineAmazon className="r-icon" />
								<h2>Clothes Desgin</h2>
								<p>
									Lorem ipsum dolor sit amet, consectetur
									adipisicing elit. Accusantium quae velit
									voluptas.
								</p>
								<a href="https://www.amazon.com/">Learn More</a>
							</div>

							<div>
								<SiFlipkart className="r-icon" />
								<h2>Available On</h2>
								<p>
									Lorem ipsum dolor sit amet, consectetur
									adipisicing elit. Accusantium quae velit
									voluptas.
								</p>
								<a href="https://www.flipkart.com/">
									Learn More
								</a>
							</div>

							<div>
								<AiOutlineShoppingCart className="r-icon" />
								<h2>Clothes Design</h2>
								<p>
									Lorem ipsum dolor sit amet, consectetur
									adipisicing elit. Accusantium quae velit
									voluptas.
								</p>
								<a href="https://www.meesho.com/">Learn More</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
