import React, { Component } from "react";
import "./Form.css";
import Button3 from "../Button3/Button3";

class Form extends Component {
  render() {
    return (
      <div>
        <form action="">
          <div className="contact-form">
            <div className="contact-form-col-1">
              <div className="contact-form-col-1-row-1">
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Email" />
              </div>
              <div className="contact-form-col-1-row-2">
                <div className="meeting-room">
                  <span className="meeting-details-title">Meeting Room:</span>
                  <span className="meeting-details-value">
                    Beaumont Lab 207
                  </span>
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
                id="message-input"
                type="text"
                placeholder="Your message here..."
              />
            </div>
          </div>
          <div className="button">
            <Button3 fontAwesomeIcon="fas fa-envelope" text="SEND MAIL" />
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
