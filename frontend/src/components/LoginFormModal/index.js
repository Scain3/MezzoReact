import React, { useState } from 'react';
import { Modal, NavLink } from '../../context/Modal';
import LoginForm from './LoginForm';
import SignupForm from '../SignupFormModal/SignupForm'

function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);
  const [signup, setSignup] = useState(false);
  const closeModal = () => {
    setShowModal(false);
    setSignup(false);
  }

  return (
    <>
      <button className="login-fake-button"onClick={() => setShowModal(true)}>Sign In</button>
      {showModal && (
        <Modal onClose={closeModal}>
          {signup ? <SignupForm setSignup={setSignup} /> : <LoginForm greeting={"Welcome Back."} setSignup={setSignup}/>}
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;
