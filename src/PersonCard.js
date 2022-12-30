import React from 'react'

const PersonCard = props => {
	/*
	const increaseAge = () => {
		this.setState((state,props) => ({
			age: this.state.age + 1
		}));
	}
	*/

	return (
		<div>
			<h1>{props.lastName}, {props.firstName}</h1>
			<p>Age: {props.age}</p>
			<p>Hair color: {props.hairColor}</p>
		</div>
	)
}

//<button onClick={this.increaseAge}>Birthday button for {this.props.firstName} {this.props.lastName}</button>
export default PersonCard;

