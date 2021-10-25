import React from 'react';

function Contact() {
	return (
		<div className="contact-form">
			<form>
				<label>Name</label>
				<input type="text" name="name" />
				<br />
				<label>Email</label>
				<input type="email" name="email" />
				<br />
				<input type="submit" value="Submit" />
			</form>
		</div>
	);
}

export default Contact;
