import React, { Component } from "react";
import "./Form.css";
import firebase from "firebase";
import FormImage from "../../main_assets/images/form_img.svg";

class Form extends Component {
	state = {
		name: "",
		email: "",
		service: "",
		comment: ""
	};

	handleChange = e => {
		switch (e.target.className) {
			case "name-field":
				this.setState({
					name: e.target.value
				});
				break;
			case "email-field":
				this.setState({
					email: e.target.value
				});
				break;
			case "service-field":
				this.setState({
					service: e.target.value
				});
				break;
			case "comment-field":
				this.setState({
					comment: e.target.value
				});
				break;
			default:
				break;
		}
	};

	handleSubmit = e => {
		e.preventDefault();

		const { name, email, service, comment } = this.state;
		// Initialize Cloud Firestore through Firebase

		const db = firebase.firestore();

		// Disable deprecated features
		db.settings({
			timestampsInSnapshots: true
		});

		this.setState({
			name: "",
			email: "",
			service: "",
			comment: ""
		});

		db.collection("messages")
			.add({
				name: name,
				email: email,
				service: service,
				comment: comment
			})
			.then(function(docRef) {
				console.log("Document written with ID: ", docRef.id);
				document.getElementById("codinghub-form").reset();
			})
			.catch(function(error) {
				console.error("Error adding document: ", error);
			});
	};

	componentDidMount() {
		firebase.initializeApp({
			apiKey: "AIzaSyBAtYBWlr0zOH6p1OpmplNjiapQs1Ftogc",
			authDomain: "clubwebsite-fc981.firebaseapp.com",
			projectId: "clubwebsite-fc981"
		});
	}

	render() {
		return (
			<div className="form-component">
				<div className="form-component--img">
					<img src={FormImage} className="form-img" alt="" />
				</div>
				<form className={"form-component--input"} onSubmit={this.handleSubmit}>
					<div className="form-inputs">
						<input
							onChange={this.handleChange}
							className="name-field"
							type="text"
							placeholder="Name"
						/>
					</div>
					<div className="form-inputs">
						<input
							onChange={this.handleChange}
							className="email-field"
							type="text"
							placeholder="Email"
						/>
					</div>
					<div className="form-inputs">
						<input
							onChange={this.handleChange}
							className="service-field"
							type="text"
							placeholder="Service"
						/>
					</div>
					<textarea
						rows="10"
						onChange={this.handleChange}
						className="comment-field"
						id="message-input"
						type="text"
						placeholder="Message"
					/>
					<button onSubmit={this.handleSubmit} className="form-submit">
						SEND
					</button>
				</form>
			</div>
		);
	}
}

export default Form;
