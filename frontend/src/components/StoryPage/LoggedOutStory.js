import React, { useState } from "react";

import LoginForm from "../LoginFormModal/LoginForm";
import SignupForm from "../SignupFormModal/SignupForm";

const LoggedOutStory = ({ content }) => {
    const [signup, setSignup] = useState(false)
	return (
		<>
			<p className="logged-out-story-page-content">{content}</p>
			<div className="logged-out-story-login-prompt">
				{signup ? (
					<SignupForm setSignup={setSignup} />
				) : (
					<LoginForm setSignup={setSignup} greeting={"Sign in to keep reading."} />
				)}
			</div>
		</>
	);
};

export default LoggedOutStory;
