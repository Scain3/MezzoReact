import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import "./SignupForm.css";

function SignupFormPage({ setSignup }) {
	const dispatch = useDispatch();
	const sessionUser = useSelector((state) => state.session.user);
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [errors, setErrors] = useState([]);

	if (sessionUser) return <Redirect to="/" />;

	const handleSubmit = (e) => {
		e.preventDefault();
		if (password === confirmPassword) {
			setErrors([]);
			return dispatch(
				sessionActions.signup({ email, firstName, lastName, password })
			).catch((res) => {
				if (res.data && res.data.errors) setErrors(res.data.errors);
			});
		}
		return setErrors(["Passwords do not match!"]);
	};

	return (
		<>
			<div className="signup-form-container">
				<h1 className="form-header">Join Mezzo.</h1>
				<form className="signup-form" onSubmit={handleSubmit}>
					<p className="login-errors">{errors[0]}</p>
					<div>
						<input
							className="auth-form-field"
							placeholder="first name"
							type="text"
							value={firstName}
							onChange={(e) => setFirstName(e.target.value)}
							required
						/>
					</div>
					<div>
						<input
							className="auth-form-field"
							placeholder="last name"
							type="text"
							value={lastName}
							onChange={(e) => setLastName(e.target.value)}
							required
						/>
					</div>
					<div>
						<input
							className="auth-form-field"
							placeholder="email"
							type="text"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
					</div>
					<div>
						<input
							className="auth-form-field"
							placeholder="password"
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
					</div>
					<div>
						<input
							className="auth-form-field"
							placeholder="confirm password"
							type="password"
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
							required
						/>
					</div>
					<button className="auth-submit-button" type="submit">Sign Up</button>
					<p className="form-account-prompt">
						Already have an account?{" "}
						<span className="login-link" onClick={() => setSignup(false)}>
							Click here
						</span>
					</p>
				</form>
			</div>
		</>
	);
}

export default SignupFormPage;
