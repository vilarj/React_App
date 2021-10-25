import React from 'react';

function Contact() {
	return (
		<div className="contact-form">
			<form>
				<br />
				<label>
					Name:
					<input type="text" name="name" />
				</label>
				<br />
				<br />
				<label>Email:</label>
				<input type="email" name="email" />
				<br />
				<br />
				<input type="submit" value="Submit" />
			</form>
		</div>
	);
}

export default Contact;
