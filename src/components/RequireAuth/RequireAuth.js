import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Spinner from "../Spinner/Spinner";
const RequireAuth = ({ children }) => {
  let location = useLocation();

  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <Spinner />;
  }
  if (!user) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
