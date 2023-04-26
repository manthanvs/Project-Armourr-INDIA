import React, { Component } from "react";
import "./about.css";

export default class about extends Component {
	render() {
		return (
			<div id="about">
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

							


						</div>
					</div>
				</div>
			</div>
		);
	}
}
