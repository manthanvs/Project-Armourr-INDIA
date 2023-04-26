import React from "react";
import "./home.css";

function home() {
	return (
		<div className="banner">
			<div className="card text-bg-dark h1_text">
				<div className="card-img"></div>
				<img
					src="https://picsum.photos/seed/picsum/432/285/?blur=2"
					alt="#"
				/>
				<div className="card-img-overlay">
					<h1 className="card-title">ARMOURR INDIA</h1>
					<h5 className="card-text">A Sports Brand to Rely On!</h5>
				</div>
			</div>

			{/*  Explore */}
			<section className="section" id="explore">
				<div className="container">
					<div className="row">
						<div className="col-lg-6">
							<div className="left-content">
								<h2>Explore Our Products</h2>
								<span>
									You are allowed to use this HexaShop HTML
									CSS template. You can feel free to modify or
									edit this layout. You can convert this
									template as any kind of ecommerce CMS theme
									as you wish.
								</span>
								<div className="quote">
									<i className="fa fa-quote-left"></i>
									<p>
										You are not allowed to redistribute this
										template ZIP file on any other website.
									</p>
								</div>
								<p>
									There are 5 pages included in this HexaShop
									Template and we are providing it to you for
									absolutely free of charge at our TemplateMo
									website. There are web development costs for
									us.
								</p>
								<p>
									If this template is beneficial for your
									website or business, please kindly{" "}
									<a
										rel="nofollow"
										href="https://paypal.me/templatemo"
										target="_parent">
										support us
									</a>{" "}
									a little via PayPal. Please also tell your
									friends about our great website. Thank you.
								</p>
								<div className="main-border-button">
									<a href="products.html">Discover More</a>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="right-content">
								<div className="row">
									<div className="col-lg-6">
										<div className="leather">
											<h4>Leather Bags</h4>
											<span>Latest Collection</span>
										</div>
									</div>
									<div className="col-lg-6">
										<div className="first-image">
											<img
												src="assets/images/explore-image-01.jpg"
												alt=""
											/>
										</div>
									</div>
									<div className="col-lg-6">
										<div className="second-image">
											<img
												src="assets/images/explore-image-02.jpg"
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
			{/* ***** Social Area Ends ***** */}

			{/* ***** Social Area Starts ***** */}
			<section className="section" id="social">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="section-heading">
								<h2>Social Media</h2>
								<span>
									Details to details is what makes Hexashop
									different from the other themes.
								</span>
							</div>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="row images">
						<div className="col-2">
							<div className="thumb">
								<div className="icon">
									<a href="http://instagram.com">
										<h6>Fashion</h6>
										<i className="fa fa-instagram"></i>
									</a>
								</div>
								<img
									src="https://picsum.photos/155/155"
									alt=""
								/>
							</div>
						</div>
						<div className="col-2">
							<div className="thumb">
								<div className="icon">
									<a href="http://instagram.com">
										<h6>New</h6>
										<i className="fa fa-instagram"></i>
									</a>
								</div>
								<img
									src="https://picsum.photos/155/155"
									alt=""
								/>
							</div>
						</div>
						<div className="col-2">
							<div className="thumb">
								<div className="icon">
									<a href="http://instagram.com">
										<h6>Brand</h6>
										<i className="fa fa-instagram"></i>
									</a>
								</div>
								<img
									src="https://picsum.photos/155/155"
									alt=""
								/>
							</div>
						</div>
						<div className="col-2">
							<div className="thumb">
								<div className="icon">
									<a href="http://instagram.com">
										<h6>Makeup</h6>
										<i className="fa fa-instagram"></i>
									</a>
								</div>
								<img
									src="https://picsum.photos/155/155"
									alt=""
								/>
							</div>
						</div>
						<div className="col-2">
							<div className="thumb">
								<div className="icon">
									<a href="http://instagram.com">
										<h6>Leather</h6>
										<i className="fa fa-instagram"></i>
									</a>
								</div>
								<img
									src="https://picsum.photos/155/155"
									alt=""
								/>
							</div>
						</div>
						<div className="col-2">
							<div className="thumb">
								<div className="icon">
									<a href="http://instagram.com">
										<h6>Bag</h6>
										<i className="fa fa-instagram"></i>
									</a>
								</div>
								<img
									src="https://picsum.photos/155/155"
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

export default home;
