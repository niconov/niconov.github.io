import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
	render() {
		console.log(this.props);
		return (
			<div>
				{/* <ul>
					{this.props.testStore.map((e,i)=>
						<li key={i}>{e}</li>
					)}
				</ul> */}
			</div>
		);
	}
}


export default connect(
	state => ({
		testStore: state
	}),
	dispatch => ({})
)(App);
