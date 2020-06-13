import React, { Component } from "react";
import "./info.css";

class Info extends Component {
	render() {
		return (
			<React.Fragment>
				<h4 className="styleTitle">Smart-Wine-Taster</h4>
				<p className="stylePara">
					This is a web application to predict that quality of a red wine given
					9 parameters.
				</p>
				<p className="stylePara">
					The dataset used is UCI wine quality dataset, found on this{" "}
					<a href="https://archive.ics.uci.edu/ml/datasets/Wine+Quality">
						link
					</a>
				</p>
				<p className="stylePara">The git repositories:</p>
				<p className="stylePara2">
					-{" "}
					<a href="https://github.com/kcomt/Red-Wine-Quality-Checker">
						Frontend
					</a>
				</p>
				<p className="stylePara2">
					- <a href="https://github.com/kcomt/K-Nearest-Neighbor">Backend</a>
				</p>{" "}
				<p className="stylePara">
					The frontend connects to a backend made in GO, via REST API. The
					algorithm used to predict the quality is KNN. K nearest Neighbor,
					according to Wikipedia is a machine-learning algorithm. It is a
					non-parametric method used for classification and regression. In both
					cases, the input consists of the k closest training examples in the
					feature space. The output depends on whether k-NN is used for
					classification or regression.
				</p>
			</React.Fragment>
		);
	}
}

export default Info;
