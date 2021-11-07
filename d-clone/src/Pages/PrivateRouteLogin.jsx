import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

function PrivateRouteLogin({ children, ...rest }) {
  const user = useSelector((state) => state);

  return (
    <Route
      {...rest}
      render={() => {
        return user.user.photo === null ? children : <Redirect to="/home" />;
      }}
    ></Route>
  );
}

export default PrivateRouteLogin;
