import React, { Component } from "react";
import "./contact.css";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { IoIosMail, IoMdCall } from "react-icons/io";

export default class contact extends Component {
	componentDidMount() {
		const scriptURL = "https://script.google.com/macros/s/AKfycbyDFn4ytH0gUy4UoHbRGHyA-WRxahk_R53A-aixKaAkuI0ebkHVW3dwSFkCT34oOYfk_Q/exec";
		const form = document.forms["submit-to-google-sheet"];

		form.addEventListener("submit", (e) => {
			e.preventDefault();
			fetch(scriptURL, { method: "POST", body: new FormData(form) })
				.then((response) => console.log("Success!", response))
				.catch((error) => console.error("Error!", error.message));
		});
	}

	render() {
		return (
			<div className="contact">
				<div className="container">
					<div className="row">
						<div className="contact-left">
							<h1 className="sub-title">Contact Me</h1>
							<p>
								<IoIosMail className="normal-icon" />
								contact@example.com
							</p>
							<p>
								<IoMdCall className="normal-icon" />
								1234567890
							</p>
							<div className="social-icons">
								<a href="www.facebook.com/shounakshete">
									<FaFacebook className="icon" />
								</a>
								<a href="www.instagram.com/shounakshete">
									<FaInstagram className="icon" />
								</a>
								<a href="www.instagram.com/shounakshete">
									<FaTwitter className="icon" />
								</a>
								<a href="www.instagram.com/shounakshete">
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
