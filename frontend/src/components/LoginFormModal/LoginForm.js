import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import "./LoginForm.css";
import {login} from "../../store/session";

function LoginForm( {setSignup, greeting}) {
	const dispatch = useDispatch();
	const [credential, setCredential] = useState("");
	const [password, setPassword] = useState("");
	const [errors, setErrors] = useState([]);

	const demoLogin = () => {
		const email = 'demo@user.com';
		const password = "Password123!";
		return dispatch(login({credential: email, password}))
			.catch((res) => {
				if (res.data && res.data.errors) setErrors(res.data.errors);
			});
	  }

	const handleSubmit = (e) => {
		e.preventDefault();
		setErrors([]);
		return dispatch(sessionActions.login({ credential, password })).catch(
			(res) => {
				if (res.data && res.data.errors) setErrors(res.data.errors);
			}
		);
	};

	return (
		<>
		<div className="login-form-container">
			<h1 className="form-header">{greeting}</h1>
			<form className="login-form" onSubmit={handleSubmit}>
				<p className="login-errors">
					{errors[0]}
				</p>
				<div>
					<input
						className="auth-form-field"
						type="text"
						placeholder="email"
						value={credential}
						onChange={(e) => setCredential(e.target.value)}
						required
					/>
				</div>
				<div>
					<input
						className="auth-form-field"
						type="password"
						placeholder="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</div>
				<button className="auth-submit-button" type="submit">Log In</button>
				<p className="form-account-prompt">No account? <span onClick={() => setSignup(true)} className="login-link"> Create one</span></p>
				<Link className="demoLogin" onClick={demoLogin}>Demo Login</Link>
			</form>
		</div>
		</>
	);
}

export default LoginForm;
