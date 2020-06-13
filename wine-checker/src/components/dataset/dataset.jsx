import React, { Component } from "react";
import axios from "axios";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import "./dataset.css";

class Dataset extends Component {
	state = {
		responseArray: [],
		columnDefs: [
			{
				headerName: "FixedAcidity",
				field: "fixedAcidity",
			},
			{
				headerName: "VolatileAcidity",
				field: "volatileAcidity",
			},
			{
				headerName: "CitricAcid",
				field: "citricAcid",
			},
			{
				headerName: "ResidualSugar",
				field: "residualSugar",
			},
			{
				headerName: "Chlorides",
				field: "chlorides",
			},
			{
				headerName: "Alcohol",
				field: "alcohol",
			},
			{
				headerName: "Quality",
				field: "quality",
			},
		],
	};

	componentDidMount() {
		axios
			.get("http://localhost:8080/dataset")
			.then((resonse) => {
				console.log(resonse);
				this.setState({ responseArray: resonse.data });
			})
			.catch((error) => {
				console.log(error);
			});
	}

	render() {
		return (
			<React.Fragment>
				<div className="styled">
					<h4>Red Wine Quality Dataset</h4>
				</div>
				<div
					className="ag-theme-alpine"
					style={{
						paddingTop: "20px",
						height: "700px",
						width: "1200px",
						margin: "auto",
					}}
				>
					<AgGridReact
						columnDefs={this.state.columnDefs}
						rowData={this.state.responseArray}
					></AgGridReact>
				</div>
			</React.Fragment>
		);
	}
}

export default Dataset;
