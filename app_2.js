// ## 1 Properties in components

// var Application = React.createClass({
// 	render: function () {
// 		console.log(this.props)
// 		return <div>Hello {this.props.name}!</div>
// 	}
// });
//
// ReactDOM.render(
// 	<Application name="Lily" fullName="Karpenko"/>,
// 	document.body
// );

// ## 2 Define properties as default

// var Application = React.createClass({
// 	getDefaultProps: function() {
// 		return {
// 			"name" : "Anonymous"
// 		};
// 	},
//
// 	render: function () {
// 		return <div>Hello {this.props.name}!</div>
// 	}
// });
//
// ReactDOM.render(
// 	<Application name="User"/>,
// 	document.body
// );

// ## 3 Define properties as default

// var App = React.createClass({
// 	getDefaultProps: function() {
// 		return {
// 			"name" : "anonymous"
// 		};
// 	},
//
// 	render: function () {
// 		return <div>Hello {this.props.name}!</div>
// 	}
// });
//
// ReactDOM.render(
// 	<App/>,
// 	document.body
// );


// ## 4 Changing properties of component

var App = React.createClass({
	onClickButton: function () {
		this.props.name = "Lily!";
		console.log('Change property, but it wont change the DOM!');
	},

	render: function () {
		return <div>
			<div>Hello {this.props.name}!</div>
			<button
				className="btn btn-success"
				onClick={this.onClickButton}>
				Click here
			</button>
		</div>
	}
});

ReactDOM.render(
	<App name="Name"/>,
	document.body
);
