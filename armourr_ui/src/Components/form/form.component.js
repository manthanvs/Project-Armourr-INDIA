import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./form.css";

export default class FormExample extends React.Component {
	componentDidMount() {
		window.scrollTo(0, 0);

		const scriptURL =
			"https://script.google.com/macros/s/AKfycbzcC9pdKnm9mXBzvGZ8KpXpryHJXFCrSJ5BINl3ffHyDubBhulL3qy4ndGb5sya1fXT/exec";
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
			<Form
				name="submit-to-google-sheet"
				className="form"
				target="_self">
				<Container>
					<Row className="mb-3">
						{/* Full Name */}
						<Form.Group
							as={Col}
							md="6"
							controlId="validationCustom01">
							<Form.Label>Full Name</Form.Label>
							<Form.Control
								name="Name"
								required
								type="text"
								placeholder="Full Name"
							/>
							<Form.Control.Feedback>
								Looks good!
							</Form.Control.Feedback>
							<Form.Control.Feedback type="invalid">
								Please provide your Full Name.
							</Form.Control.Feedback>
						</Form.Group>

						{/* Birth Date */}
						<Form.Group
							as={Col}
							md="6"
							controlId="validationCustom02">
							<Form.Label>Birth Date</Form.Label>
							<Form.Control
								required
								name="Birthdate"
								type="date"
							/>
							<Form.Control.Feedback>
								Looks good!
							</Form.Control.Feedback>
							<Form.Control.Feedback type="invalid">
								Please provide your Birth date.
							</Form.Control.Feedback>
						</Form.Group>
					</Row>

					<Row className="mb-3">
						{/* Expertise */}
						<Form.Group
							as={Col}
							md="6"
							controlId="validationCustom03">
							<Form.Label>Expertise</Form.Label>
							<Form.Control
								name="Expertise"
								type="text"
								placeholder="Expertise in.."
								required
							/>
							<Form.Control.Feedback type="invalid">
								Please provide your relevant expertise.
							</Form.Control.Feedback>
						</Form.Group>

						{/* Address */}
						<Form.Group
							as={Col}
							md="3"
							controlId="validationCustom04">
							<Form.Label>Address</Form.Label>
							<Form.Control
								name="Address"
								type="text"
								placeholder="Address or Pincode of the area"
								required
							/>
							<Form.Control.Feedback type="invalid">
								Please provide a valid state.
							</Form.Control.Feedback>
						</Form.Group>

						<Form.Group
							as={Col}
							md="3"
							controlId="validationCustom05">
							<Form.Label>Contact Number</Form.Label>
							<Form.Control
								name="Number"
								type="number"
								placeholder="Number"
								required
							/>
							<Form.Control.Feedback type="invalid">
								Please provide a valid number.
							</Form.Control.Feedback>
						</Form.Group>
					</Row>

					<Form.Group className="mb-3">
						<Form.Check
							required
							label="I Agree to Privacy Policy"
							feedback="You must agree before submitting."
							feedbackType="invalid"
						/>
					</Form.Group>

					<Button type="submit">Submit form</Button>
				</Container>
			</Form>
		);
	}
}
