import React, { FC, memo, ReactNode, useEffect, useState } from "react";
import { User } from "../types/user";
import { login, logout, selectUser } from '../features/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../firebase';
import { Navigate } from "react-router";
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
