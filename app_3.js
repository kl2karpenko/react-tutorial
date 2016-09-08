// States in components (intercative UI)

// ## 1 Creating state object

// var App = React.createClass({
// 	getInitialState: function () {
// 		return {
// 			name: "Anonym"
// 		}
// 	},
//
// 	render: function () {
// 		console.log(this.state);
//
// 		return <div>Hello {this.state.name}!</div>
// 	}
// });
//
// ReactDOM.render(
// 	<App/>,
// 	document.body
// );

// ## 2 Changing state object

// var App = React.createClass({
// 	getInitialState: function () {
// 		return {
// 			"name": "Anonym"
// 		}
// 	},
//
// 	getDefaultProps: function() {
// 		return {
// 			"name" : "Anonymous"
// 		};
// 	},
//
// 	onChange: function (event) {
// 		// this here is not an input, it is a link to App object
//
// 		this.props.name = event.target.value;
// 		// this.setState({
// 		// 	name: event.target.value
// 		// });
// 	},
//
// 	render: function () {
// 		return <div className="form-group">
// 			<div>
// 				<input
// 					type="text"
// 					onInput={this.onChange}
// 					defaultValue={this.props.name}
// 				/>
// 			</div>
//
// 			<div>Hello {this.props.name}!</div>
// 		</div>
// 	}
// });
//
// ReactDOM.render(
// 	<App/>,
// 	document.body
// );

// ## 3 Creating button with counter

var App = React.createClass({
	getInitialState: function () {
		return {
			value: 1,
			disabled: false
		}
	},

	onClickPlus: function () {
		// this here is not an input, it is a link to App object

		this.setState({
			value: ++this.state.value
		});
	},

	onClickMinus: function () {
		// this here is not an input, it is a link to App object

		if (this.state.value - 1 === 0) {
			this.state.disabled = true;
			this.setState({
				disabled: true
			});
		}

		this.setState({
			value: --this.state.value
		});
	},

	render: function () {
		return <div className="form-group">
			<div>Value val = {this.state.value}!</div>
			<button
				onClick={this.onClickPlus}
				className="btn btn-warning"
			>+</button>
			<button
				onClick={this.onClickMinus}
				className="btn btn-warning"
			  disabled={this.state.disabled}
			>-</button>

			<div style={{display: "none"}}>Create please here a button that will minus the value of state</div>
		</div>
	}
});

ReactDOM.render(
	<App/>,
	document.body
);