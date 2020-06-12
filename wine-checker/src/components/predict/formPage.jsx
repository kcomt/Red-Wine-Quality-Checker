import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Row, Col, Grid, InputGroup } from "react-bootstrap";
import "./formpage.css";
import axios from "axios";

class FormPage extends Component {
	state = {
		id: 1300,
		fixedAcidity: "",
		volatileAcidity: 0,
		citricAcid: 0,
		residualSugar: "",
		chlrodies: 0,
		totalSulfurDioxide: "",
		density: 0,
		ph: "",
		alcohol: "",
		quality: -10,

		responsePOST: "None",
	};

	handleChange = (event) => {
		const target = event.target;
		const value = target.value;
		const name = target.name;

		this.setState({
			[name]: value,
		});
	};

	submitForm = () => {
		axios
			.post("http://localhost:8080/data", this.state)
			.then((resonse) => {
				console.log(resonse);
				this.setState({ responsePOST: resonse.data.quality + "/10" });
			})
			.catch((error) => {
				console.log(error);
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
									name="fixedAcidity"
									value={this.state.fixedAcidity}
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
									name="residualSugar"
									value={this.state.residualSugar}
									onChange={this.handleChange}
								/>
							</InputGroup>
						</Col>
					</Form.Row>
					<Form.Row className="row">
						<Form.Label>
							Volatile Acidity: {this.state.volatileAcidity}
						</Form.Label>
						<Form.Control
							type="range"
							name="volatileAcidity"
							value={this.state.volatileAcidity}
							onChange={this.handleChange}
							min="0.00"
							max="1.00"
							step="0.01"
						/>
					</Form.Row>
					<Form.Row className="row">
						<Form.Label>Citric Acid: {this.state.citricAcid}</Form.Label>
						<Form.Control
							type="range"
							name="citricAcid"
							value={this.state.citricAcid}
							onChange={this.handleChange}
							min="0.00"
							max="1.00"
							step="0.01"
						/>
					</Form.Row>
					<Form.Row className="row">
						<Col>
							<Form.Label>Total Sulfur</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter a Whole Number"
								name="totalSulfurDioxide"
								value={this.state.totalSulfurDioxide}
								onChange={this.handleChange}
							/>
						</Col>
						<Col>
							<Form.Label>Ph</Form.Label>
							<Form.Control
								type="text"
								placeholder="Value from 2.00 to 4.00"
								name="ph"
								value={this.state.ph}
								onChange={this.handleChange}
							/>
						</Col>
					</Form.Row>
					<Form.Row className="row">
						<Col>
							<Form.Label>Density: {this.state.density}</Form.Label>
							<Form.Control
								type="range"
								name="density"
								value={this.state.density}
								onChange={this.handleChange}
								min="0.00"
								max="1.00"
								step="0.01"
							/>
						</Col>
						<Col>
							<Form.Label>Chlrodies: {this.state.chlrodies}</Form.Label>
							<Form.Control
								type="range"
								name="chlrodies"
								value={this.state.chlrodies}
								onChange={this.handleChange}
								min="0.00"
								max="0.20"
								step="0.001"
							/>
						</Col>
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
									name="alcohol"
									value={this.state.alcohol}
									onChange={this.handleChange}
								/>
							</InputGroup>
						</Col>
					</Form.Row>
				</Form>
				<div className="centerdiv">
					<Button
						variant="primary"
						className="button"
						onClick={this.submitForm}
					>
						Taste
					</Button>{" "}
					<h6 className="text">
						Put some values in and I will predict the quality of the wine!
					</h6>
					<h6 className="textdiff">The Quality of the Wine is: </h6>
					<span className="textResponse">{this.state.responsePOST}</span>
				</div>
			</React.Fragment>
		);
	}
}

export default FormPage;
