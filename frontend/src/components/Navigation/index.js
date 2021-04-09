import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import './Navigation.css';
import SearchBar from '../Search/SearchBar';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);


  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <div className="authenticated-links">
        <div className="search-bar-div">
          <SearchBar />
        </div>
        <div className="profile-button-div">
          <ProfileButton user={sessionUser} />
        </div>
      </div>
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
        {/* <div className="signup-link">
          <NavLink to="/signup">Sign Up</NavLink>
        </div> */}
      </div>
    );
  }

  return (
    <ul className="nav-container">
      <li>
        <NavLink className="home-link" exact to="/"><img src="../" alt="mezzo-logo"/></NavLink>

      </li>
      <li>
        {isLoaded && sessionLinks}
      </li>
    </ul>
  );
}

export default Navigation;
