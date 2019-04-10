import React from "react";
import "./ContactSection.css";
import Form from "../../components/Form/Form";
import Title from "../../components/Title/Title";

const ContactSection = () => {
	return (
		<div className={"contact-section"}>
			<Title title="Let's get in touch" />
			<p>
				Please feel free to drop a message if you want to talk about business
				opportunities or if you would like to use any of our service (portfolio
				websites, websites clubs, resumes, mock interviews, etc.) . If you would
				like to become a member join our weekly meetings.
			</p>
			<Form />
		</div>
	);
};

export default ContactSection;
