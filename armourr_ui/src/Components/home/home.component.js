import React, { Component } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import "./home.css";
import { Container } from "react-bootstrap";

export default class home extends Component {
	constructor() {
		super();
		this.state = { height: 0, width: 0 };
	}

	componentDidMount() {
		// this statement will scroll up to the top and
		window.scrollTo(0, 0);

		let leather = document.getElementById("leather");
		this.setState({ height: leather.offsetHeight });
		this.setState({ width: leather.offsetWidth });
	}

	render() {
		
		return (
			<div className="banner">
				<div className="card text-bg-dark h1_text">
					<div className="card-img">
						<img
							src="https://picsum.photos/seed/picsum/432/285/?blur=2"
							alt="#"
						/>
					</div>
					<div className="card-img-overlay">
						<h1 className="card-title">Armourr</h1>
						<h5 className="card-text">
							A Sports Brand to Rely On!
						</h5>
					</div>
				</div>

				{/*  Explore Area Starts*/}
				<section className="section" id="explore">
					<div className="container">
						<div className="row">
							<div className="col-lg-6">
								<div className="left-content">
									<h2>Explore Our Products</h2>
									<span>
										Armourr™ is a Sports Apparel brand
										catering to comfort wear for athletes
										and sportspeople.
									</span>
									{/* <div className="quote">
									<i className="fa fa-quote-left"></i>
									<p>
										You are not allowed to redistribute this
										template ZIP file on any other website.
									</p>
								</div> */}
									<p>
										We have recently launched our debut
										product - Armourr™ Karate GI Lite
										(Karate Practice Uniform - Lite). We are
										not only limited to one sport but also
										spreading across our upcoming products
										like daily wear Sports & Gym T-Shirts,
										Tracksuits, Ladies specific Gym Wear and
										much more. Stay tuned!
									</p>
									<p>
										If this Website is beneficial for your
										business, please kindly{" "}
										<a
											rel="nofollow"
											href="#footer"
											target="_parent">
											support us
										</a>{" "}
										shower us love on our social handles
										down below. Please also tell your
										friends about our great website. Thank
										you!!
									</p>
									<div className="main-border-button">
										<Link to="/contact">
											Contact For More
										</Link>
									</div>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="right-content">
									<div className="row">
										<div className="col-lg-6">
											<div
												className="leather"
												id="leather">
												<h4>Leather Bags</h4>
												<span>Latest Collection</span>
											</div>
										</div>
										<div className="col-lg-6">
											<div className="first-image">
												<img
													src={`https://picsum.photos/${this.state.width}/${this.state.height}?random=1`}
													// src={`https://picsum.photos/270/250?random=1`}
													alt=""
												/>
											</div>
										</div>
										<div className="col-lg-6">
											<div className="first-image">
												<img
													src={`https://picsum.photos/${this.state.width}/${this.state.height}?random=2`}
													alt=""
												/>
											</div>
										</div>
										<div className="col-lg-6">
											<div className="types">
												<h4>Different Types</h4>
												<span>Over 304 Products</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* ***** Explore Area Ends ***** */}

				{/* Banner Hero Area Starts*/}

				{/* Used Carousel https://react-bootstrap.github.io/components/carousel/#individual-item-intervals */}
				<Container>
					<Carousel style={{ marginBottom: "60px" }}>
						<Carousel.Item interval={2000}>
							<img
								className="d-flex justify-content-center w-100"
								src="https://picsum.photos/1024/500?random=1"
								alt="Second slide"
							/>
							<Carousel.Caption>
								<h3>First slide label</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit.
								</p>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item interval={2000}>
							<img
								className="d-block w-100"
								src="https://picsum.photos/1024/500?random=2"
								alt="Second slide"
							/>
							<Carousel.Caption>
								<h3>Second slide label</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit.
								</p>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item interval={2000}>
							<img
								className="d-block w-100"
								src="https://picsum.photos/1024/500?random=3"
								alt="Third slide"
							/>
							<Carousel.Caption>
								<h3>Third slide label</h3>
								<p>
									Praesent commodo cursus magna, vel
									scelerisque nisl consectetur.
								</p>
							</Carousel.Caption>
						</Carousel.Item>
					</Carousel>
				</Container>

				{/* Banner Hero Area End*/}

				{/* ***** Social Area Starts ***** */}
				<section className="section" id="social">
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<div className="section-heading">
									<h2>Close Look</h2>
									<span>
										Details to details is what makes
										Hexashop different from the other
										themes.
									</span>
								</div>
							</div>
						</div>
					</div>
					<div className="container">
						<div className="row images">
							<div className="col-4">
								<div className="thumb">
									<div className="icon">
										<a href="http://instagram.com">
											<h6>Fashion</h6>
											<i className="fa fa-instagram"></i>
										</a>
									</div>
									<img
										src="https://picsum.photos/340/340?random=1"
										alt=""
									/>
								</div>
							</div>
							<div className="col-4">
								<div className="thumb">
									<div className="icon">
										<a href="http://instagram.com">
											<h6>New</h6>
											<i className="fa fa-instagram"></i>
										</a>
									</div>
									<img
										src="https://picsum.photos/340/340?random=2"
										alt=""
									/>
								</div>
							</div>
							<div className="col-4">
								<div className="thumb">
									<div className="icon">
										<a href="http://instagram.com">
											<h6>Brand</h6>
											<i className="fa fa-instagram"></i>
										</a>
									</div>
									<img
										src="https://picsum.photos/340/340?random=3"
										alt=""
									/>
								</div>
							</div>
							<div className="col-4">
								<div className="thumb">
									<div className="icon">
										<a href="http://instagram.com">
											<h6>Makeup</h6>
											<i className="fa fa-instagram"></i>
										</a>
									</div>
									<img
										src="https://picsum.photos/340/340?random=4"
										alt=""
									/>
								</div>
							</div>
							<div className="col-4">
								<div className="thumb">
									<div className="icon">
										<a href="http://instagram.com">
											<h6>Leather</h6>
											<i className="fa fa-instagram"></i>
										</a>
									</div>
									<img
										src="https://picsum.photos/340/340?random=5"
										alt=""
									/>
								</div>
							</div>
							<div className="col-4">
								<div className="thumb">
									<div className="icon">
										<a href="http://instagram.com">
											<h6>Bag</h6>
											<i className="fa fa-instagram"></i>
										</a>
									</div>
									<img
										src="https://picsum.photos/340/340?random=6"
										alt=""
									/>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* ***** Social Area Ends ***** */}
			</div>
		);
	}
}
