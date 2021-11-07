import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home, LogInPage, PrivateRoute, PrivateRouteLogin } from "./Pages";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Firebase/init-firebase";
import { useDispatch } from "react-redux";
import { signInUser, signOutUser } from "./features/userSlice";

function App() {
  const dispatch = useDispatch();

  //  get movies
  useEffect(() => {}, []);

  // get user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const userInfo = {
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        };

        dispatch(signInUser(userInfo));
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <PrivateRouteLogin exact path="/">
          <LogInPage />
        </PrivateRouteLogin>
        <PrivateRoute exact path="/home">
          <Home />
        </PrivateRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
