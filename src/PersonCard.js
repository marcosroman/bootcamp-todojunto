import React from 'react'

class PersonCard extends React.Component {
  constructor(props) {
    super(props);
		this.state = {age: this.props.age}

		//this.increaseAge = this.increaseAge.bind(this);
	}

	// de esto no tenia idea!!! pro eso no funciona
    // This binding is necessary to make `this` work in the callback    this.handleClick = this.handleClick.bind(this);
	//
	
	/*
	increaseAge() {
		this.setState(prevState => ({
			age: prevState.age+1
		}));
	}
	*/

	increaseAge = () => {
		this.setState((state,props) => ({
			age: this.state.age + 1
		}));
	}

	// both work! (second one works without the above binding, me like es prettier)
	
	render() {
		return (
			<div>
				<h1>{this.props.lastName}, {this.props.firstName}</h1>
				<p>Age: {this.state.age}</p>
				<p>Hair color: {this.props.hairColor}</p>
				<button onClick={this.increaseAge}>Birthday button for {this.props.firstName} {this.props.lastName}</button>
			</div>
		)
	}
}

export default PersonCard;

