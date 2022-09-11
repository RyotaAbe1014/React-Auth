import React, { FC, memo, } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
// ログイン
import { Login } from "../components/auth/Login";
import { Home } from '../components/home/Home';
import { SignUp } from '../components/auth/SignUp';
import { AuthUserRoute } from './AuthUserRoute';
export const Router: FC = memo(() => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="" element={<AuthUserRoute><Home /></AuthUserRoute>} />
          <Route path="home" element={<AuthUserRoute><Home /></AuthUserRoute>} />
        </Routes>
      </BrowserRouter>
    </>
  )
});
