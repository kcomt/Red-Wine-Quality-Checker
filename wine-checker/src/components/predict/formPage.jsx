import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Row, Col, Grid, InputGroup } from "react-bootstrap";
import "./formpage.css";

class FormPage extends Component {
	state = {
		id: 1300,
		fixedAcidityValue: "",
		residualSugarValue: "",
		totalSulfurValue: "",
		phValue: "",
		densityValue: "",
		alcoholValue: "",
		volatileValue: 20,
		citricValue: 20,
	};

	handleChange = (event) => {
		const target = event.target;
		const value = target.value;
		const name = target.name;

		this.setState({
			[name]: value,
		});
	};

	// Volatile Acidity 0-1
	//Citric Acid 0-100
	//Chlrodies 0-100
	//PH values from 2 to 3

	render() {
		return (
			<React.Fragment>
				<h4 className="text">Taster using KNN</h4>
				<Form className="styleForForm">
					<Form.Row className="row">
						<Col>
							<Form.Label>Fixed Acidity</Form.Label>
							<InputGroup className="mb-2">
								<InputGroup.Prepend>
									<InputGroup.Text>%</InputGroup.Text>
								</InputGroup.Prepend>
								<Form.Control
									type="text"
									placeholder="Value from 0 to 15"
									name="fixedAcidityValue"
									value={this.state.fixedAcidityValue}
									onChange={this.handleChange}
								/>
							</InputGroup>
						</Col>
						<Col>
							<Form.Label>Residual Sugar</Form.Label>
							<InputGroup className="mb-2">
								<InputGroup.Prepend>
									<InputGroup.Text>%</InputGroup.Text>
								</InputGroup.Prepend>
								<Form.Control
									type="text"
									placeholder="Value from 0 to 15"
									name="residualSugarValue"
									value={this.state.residualSugarValue}
									onChange={this.handleChange}
								/>
							</InputGroup>
						</Col>
					</Form.Row>
					<Form.Row className="row">
						<Form.Label>Volatile Acidity</Form.Label>
						<Form.Control
							type="range"
							name="volatileValue"
							value={this.state.volatileValue}
							onChange={this.handleChange}
						/>
					</Form.Row>
					<Form.Row className="row">
						<Form.Label>Citric Acid</Form.Label>
						<Form.Control
							type="range"
							name="citricValue"
							value={this.state.citricValue}
							onChange={this.handleChange}
						/>
					</Form.Row>
					<Form.Row className="row">
						<Col>
							<Form.Label>Total Sulfur</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter a Whole Number"
								name="totalSulfurValue"
								value={this.state.totalSulfurValue}
								onChange={this.handleChange}
							/>
						</Col>
						<Col>
							<Form.Label>Ph</Form.Label>
							<Form.Control
								type="text"
								placeholder="Value from 2.00 to 4.00"
								name="phValue"
								value={this.state.phValue}
								onChange={this.handleChange}
							/>
						</Col>
					</Form.Row>
					<Form.Row className="row">
						<Form.Label>Density</Form.Label>
						<Form.Control
							type="range"
							name="densityValue"
							value={this.state.densityValue}
							onChange={this.handleChange}
						/>
					</Form.Row>
					<Form.Row className="row">
						<Col>
							<Form.Label>Alcohol</Form.Label>
							<InputGroup className="mb-2">
								<InputGroup.Prepend>
									<InputGroup.Text>%</InputGroup.Text>
								</InputGroup.Prepend>
								<Form.Control
									type="text"
									placeholder="Value usually from 5 to 20"
									name="alcoholValue"
									value={this.state.alcoholValue}
									onChange={this.handleChange}
								/>
							</InputGroup>
						</Col>
					</Form.Row>
				</Form>
				<div className="centerdiv">
					<Button variant="primary" className="button">
						Taste
					</Button>{" "}
					<h6 className="text">
						Put some values in and I will predict the quality of the wine!
					</h6>
					<span>{this.state.fixedAcidityValue}</span>
				</div>
			</React.Fragment>
		);
	}
}

export default FormPage;
