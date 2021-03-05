import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import SignupForm from "./SignupForm";
import LoginForm from "../LoginFormModal/LoginForm";

function LoginFormModal() {
	const [showModal, setShowModal] = useState(false);
	const [signup, setSignup] = useState(true);

	return (
		<>
			<button className="login-modal-button" onClick={() => setShowModal(true)}>
				Sign Up
			</button>
			{showModal && (
				<Modal onClose={() => setShowModal(false)}>
					{signup ? (
						<SignupForm setSignup={setSignup} />
					) : (
						<LoginForm setSignup={setSignup} />
					)}
				</Modal>
			)}
		</>
	);
}

export default LoginFormModal;
