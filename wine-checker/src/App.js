import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/layout/layout";
import FormPage from "./components/predict/formPage";
import Info from "./components/info/info";
import Dataset from "./components/dataset/dataset";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
	return (
		<React.Fragment>
			<Router>
				<Layout />
				<Switch>
					<Route exact path="/predict" component={FormPage} />
					<Route exact path="/info" component={Info} />
					<Route exact path="/dataset" component={Dataset} />
				</Switch>
			</Router>
		</React.Fragment>
	);
}

export default App;
