import React from "react";
import {
	FaHome,
	FaFacebook,
	FaInstagram,
	FaTwitter,
	FaLinkedin,
} from "react-icons/fa";
import { IoIosMail, IoMdCall } from "react-icons/io";

import "./footer.css";

function footer() {
	return (
		<footer id="footer"	>
			<div className="container">
					{/* Remove the container if you want to extend the Footer to full width. */}
						<div className="text-white text-center text-lg-start ">
							{/* Grid container */}

							<div className="container my-2">
							<div className="logo">
											<img
												src="images/Armourr_LogoFull.png"
												alt="hexashop ecommerce templatemo"
											/>
										</div>
							{/*Grid row*/}
								<div className="row mt-4">
									{/*Grid column*/}
									<div className="col-lg-4 col-md-12 mb-4 mb-md-0">
										<p>
										Armourr™ is aggressively looking to expand its reach across the
										nation. 
										</p>
										<p>
										If you are interested in becoming an exclusive supplier of our
										products, contact us below:
										</p>
									</div>
									{/*Grid column*/}
									<div className="col-lg-4 col-md-6 mb-4 mb-md-0 ">
										<ul className="fa-ul">
											<li className="mb-3">
												<FaHome className="icon" />
												<span className="ms-2">
												Pune, Maharashtra
												</span>
											</li>
											<li className="mb-3">
												<IoIosMail className="icon" />
												<span className="ms-2">
													armourr.india@gmail.com
												</span>
											</li>
											<li className="mb-3">
												<IoMdCall className="icon" />
												<span className="ms-2">
												+91 89834 36036
												</span>
											</li>
										</ul>
									</div>
									{/*Grid column*/}
									<div className="col-lg-4 col-md-6 mb-4 mb-md-0 ">
										<h5 className="text-uppercase text-center mb-4">
										Contact Hours
										</h5>
										<table className="table text-center text-white">
											<tbody className="fw-normal">
												<tr>
													<td>Mon - Sat:</td>
													<td>10am - 7pm</td>
												</tr>
												{/* <tr>
													<td>Fri - Sat:</td>
													<td>8am - 1am</td>
												</tr>
												<tr>
													<td>Sunday:</td>
													<td>9am - 10pm</td>
												</tr> */}
											</tbody>
										</table>
									</div>
									{/*Grid column*/}
								</div>
								{/*Grid row*/}
							</div>
							{/* Grid container */}
							
						</div>
					{/* End of .container */}
					<div className="col-lg-12">
						<div className="under-footer">
							{/* Copyright */}
							<p>
								Copyright © 2022 Shounak Multiverse., Ltd. All Rights
								Reserved.
								<br />
							</p>
							<ul>
								<li>
									<a href="https://www.facebook.com/profile.php?id=100090029364604">
										<FaFacebook className="icon" />
									</a>
								</li>
								<li>
									<a href="https://www.instagram.com/armourr_india">
										<FaInstagram className="icon" />
									</a>
								</li>
								<li>
									<a href="https://www.instagram.com/armourr_india">
										<FaTwitter className="icon" />
									</a>
								</li>
								<li>
									<a href="https://www.instagram.com/armourr_india">
										<FaLinkedin className="icon" />
									</a>
								</li>
							</ul>
						</div>
					</div>
			</div>
		</footer>
	);
}

export default footer;