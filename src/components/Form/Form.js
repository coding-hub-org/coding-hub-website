import React, { Component } from "react";
import "./Form.css";
import firebase from "firebase";

class Form extends Component {
    state = {
        name: '',
        email: '',
        comment: ''
    }

    handleChange = (e) => {
        switch (e.target.className) {
            case 'name-field':
                this.setState({
                    name: e.target.value
                });
                break;
            case 'email-field':
                this.setState({
                    email: e.target.value
                });
                break;
            case 'comment-field':
                this.setState({
                    comment: e.target.value
                });
                break;
            default:
                break;
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const {name, email, comment} = this.state;
         // Initialize Cloud Firestore through Firebase
        
        const db = firebase.firestore();

        // Disable deprecated features
        db.settings({
            timestampsInSnapshots: true
        });

        this.setState({
            name: '',
            email: '',
            comment: '',
        });

        db.collection("messages").add({
            name: name,
            email: email,
            comment: comment
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
            document.getElementById("codinghub-form").reset();
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });


        
    }

    componentDidMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyBAtYBWlr0zOH6p1OpmplNjiapQs1Ftogc",
            authDomain: "clubwebsite-fc981.firebaseapp.com",
            projectId: "clubwebsite-fc981",
        });
        
    }

    render() {
        return (
          <form id={"codinghub-form"} onSubmit={this.handleSubmit}>
            <div className="contact-form">
              <div className="contact-form-col-1">
                <div className="contact-form-col-1-row-1">
                  <input onChange={this.handleChange} className="name-field" type="text" placeholder="Name" />
                  <input onChange={this.handleChange} className="email-field" type="text" placeholder="Email" />
                </div>
                <div className="contact-form-col-1-row-2">
                  <div className="meeting-room">
                    <div className="meeting-details-title">Meeting Room:</div>
                    <div className="meeting-details-value">Beaumont Lab 207</div>
                  </div>
                  <div className="meeting-time">
                    <span className="meeting-details-title">Time:</span>
                    <span className="meeting-details-value">7:00 - 8:00 pm</span>
                  </div>
                  <div className="meeting-day">
                    <span className="meeting-details-title">Day:</span>
                    <span className="meeting-details-value">Monday</span>
                  </div>
                </div>
              </div>
              <div className="contact-form-col-2">
                <textarea
                  onChange={this.handleChange}
                  className="comment-field"
                  id="message-input"
                  type="text"
                  placeholder="Your message here..."
                />
              </div>
            </div>
            <div className="button">
                <button><i className="fas fa-envelope"/>SEND MAIL</button>
            </div>

          </form>
        );
  }
}

export default Form;
