// ## 1 Creating 1 component

// var Button = React.createClass({
// 	render: function () {
// 		var text = "Click";
//
// 		return <button>{text}</button>;
// 	}
// });
//
// var Application = React.createClass({
// 	render: function () {
// 		return <div>
// 			<div>Hello Lily!</div>
// 			<Button/>
// 		</div>
// 	}
// });

// ## 2 Add interaction to component
//
// var Application = React.createClass({
// 	onClickButton: function (event) {
//
// 		alert('I am clicked');
//
// 		console.log(event.target, this);
//
// 		// here this is "App" object
// 	},
//
// 	onClickButton2: function () {
//
// 	},
//
// 	onChangeInput: function (ev) {
// 		console.log(ev.target.value);
// 	},
//
// 	render: function () {
// 		return <div>
// 			<div>Hello User!</div>
//
// 			<input
// 				type="text"
// 				onChange={this.onChangeInput}
// 			/>
//
// 			<button
// 				className="btn btn-success"
// 				onClick={this.onClickButton}
// 			>
// 				Click here
// 			</button>
//
// 			<button
// 				className="btn btn-danger"
// 				onClick={this.onClickButton2}
// 			>
// 				Click here this
// 			</button>
// 		</div>
// 	}
// });

// ## 3 Adding attributes to blocks

// var Application = React.createClass({
// 	render: function () {
// 		return <div
// 			    className="row"
// 		      style={{ 'color': 'green',
// 			      'font-size': '15px' }}
//        >
// 			<div className="col-xs-6">Hello Lily!</div>
// 			<div className="col-xs-6">Goodbye</div>
//
// 			<button className="btn btn-success">Click here</button>
// 		</div>
// 	}
// });