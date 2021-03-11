import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <div className="nav-links">
        <div className="login-modal-link">
          <LoginFormModal />
        </div>
        <div className="signup-modal-link">
          <SignupFormModal />
        </div>
        <div className="signup-link">
          <NavLink to="/signup">Sign Up</NavLink>
        </div>
      </div>
    );
  }

  return (
    <ul className="nav-container">
      <li>
        <NavLink className="home-link" exact to="/">Mezzo</NavLink>

      </li>
      <li>
        {isLoaded && sessionLinks}
      </li>
    </ul>
  );
}

export default Navigation;
