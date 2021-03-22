// Packages
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";

// Components
import ProtectedRoute from "./components/ProtectedRoute";
import SignupFormPage from "./components/SignupFormModal/SignupForm";
import Navigation from "./components/Navigation";
import StoryPage from "./components/StoryPage"
import HomePage from "./components/HomePage";
import SearchPage from "./components/Search/SearchPage";

// Redux
import * as sessionActions from "./store/session";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/story/:id">
            <StoryPage />
          </Route>
          <ProtectedRoute exact path="user/:id">
            <p>Profile Page</p>
          </ProtectedRoute>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/search">
            <SearchPage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
