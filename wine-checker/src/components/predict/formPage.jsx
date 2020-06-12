import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Row, Col, Grid } from "react-bootstrap";
import "./formpage.css";

class FormPage extends Component {
	state = {
		wine: {
			ph: 1.5,
		},
	};

	render() {
		return (
			<React.Fragment>
				<h4 className="text">Taster using KNN</h4>
				<Form className="styleForForm">
					<Form.Row className="row">
						<Col>
							<Form.Label>Fixed Acidity</Form.Label>
							<Form.Control type="text" placeholder="Enter email" />
						</Col>
						<Col>
							<Form.Label>Residual Sugar</Form.Label>
							<Form.Control type="text" placeholder="Enter email" />
						</Col>
					</Form.Row>
					<Form.Row className="row">
						<Form.Label>Volatile Acidity</Form.Label>
						<Form.Control type="range" />
					</Form.Row>
					<Form.Row className="row">
						<Form.Label>Citric Acid</Form.Label>
						<Form.Control type="range" />
					</Form.Row>
				</Form>
				<div className="centerdiv">
					<Button variant="primary" className="button">
						Taste
					</Button>{" "}
					<h6 className="text">
						Put some values in and I will predict the quality of the wine!
					</h6>
				</div>
			</React.Fragment>
		);
	}
}

export default FormPage;
