import React from 'react';

class MainDisplay extends React.Component {
	constructor(props) {
		super(props);

	}
	render() {
		return (
			<div className="row">
				<div className="columns callout secondary small-4" style={{paddingRight: "0", marginLeft: "15px", marginBottom:"0px"}}>
					<p>Left Panel</p>
				</div>
				<div className="columns callout secondary" style={{marginLeft: "-1px", marginRight: "15px", marginBottom:"0px"}}>
					<p>Right Panel</p>
				</div>
			</div>
		);
	}
};

export default MainDisplay;
