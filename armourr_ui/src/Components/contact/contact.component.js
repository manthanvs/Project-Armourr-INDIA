import React, { Component } from "react";
import "./contact.css";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { IoIosMail, IoMdCall } from "react-icons/io";

export default class contact extends Component {
	componentDidMount() {
		// this statement will scroll up to the top and
		window.scrollTo(0, 0);

		const scriptURL =
			"https://script.google.com/macros/s/AKfycbyDFn4ytH0gUy4UoHbRGHyA-WRxahk_R53A-aixKaAkuI0ebkHVW3dwSFkCT34oOYfk_Q/exec";
		const form = document.forms["submit-to-google-sheet"];

		form.addEventListener("submit", (e) => {
			e.preventDefault();
			fetch(scriptURL, { method: "POST", body: new FormData(form) })
				.then((response) =>
					alert("Success! Your Response has been submitted", response)
				)
				.catch((error) =>
					alert(
						"Error! There was problem in submitting your response",
						error.message
					)
				);
		});
	}

	render() {
		return (
				<div className="contact" id="contact">
					<div className="container ">
						<div className="row">
							<div className="contact-left">
								<h1 className="sub-title">Contact Me</h1>
								<p>
									<IoIosMail className="normal-icon" />
									armourr.india@gmail.com
								</p>
								<p>
									<IoMdCall className="normal-icon" />
									+91 89834 36036
								</p>
								<div className="social-icons">
									<a href="https://www.facebook.com/people/Armourr/100090158390307/">
										<FaFacebook className="icon" />
									</a>
									<a href=".com/shounakshete">
										<FaInstagram className="icon" />
									</a>
									<a href="https://www.instagram.com/armourr_india">
										<FaTwitter className="icon" />
									</a>
									<a href="https://www.instagram.com/armourr_india">
										<FaLinkedin className="icon" />
									</a>
								</div>
								<a href="/" download className="btn btn2">
									Download Brochure
								</a>
							</div>
							<div className="contact-right">
								<form name="submit-to-google-sheet">
									<input
										type="text"
										name="Name"
										placeholder="Your Name"
										required
									/>
									<input
										type="email"
										name="Email"
										placeholder="Your Email"
										required
									/>
									<textarea
										name="Message"
										rows="6"
										placeholder="Your Message"></textarea>
									<button className="btn btn2" type="submit">
										Submit
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
		);
	}
}
