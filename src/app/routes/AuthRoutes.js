// src/routes/AuthRoutes.js
import React from "react";
import { Route } from "react-router-dom";
import SingUpScreen from "../pages/AuthScreens/SignUpScreen";
import LoginScreen from "../pages/AuthScreens/LoginScreen";

const AuthRoutes = () => (
  <>
    <Route path="/signupscreen" element={<SingUpScreen />} />
    <Route path="/loginscreen" element={<LoginScreen />} />
  </>
);

export default AuthRoutes;
