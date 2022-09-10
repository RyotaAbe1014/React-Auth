import React, { FC, useEffect } from 'react'

import { Routes, Route, BrowserRouter } from "react-router-dom";
// ログイン
import { Login } from "../components/auth/Login";
import { Home } from '../components/home/Home';

import { login, logout, selectUser } from '../features/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../firebase';
import { SignUp } from '../components/auth/SignUp';
import { useNavigate } from "react-router";
import { AuthUserRoute } from '../providers/AuthUserRoute';

export const Router: FC = () => {
  // ユーザーの状態を取得
  // const user = useSelector(selectUser);
  // const dispatch = useDispatch();
  // // firebaseのonAuthStateChangedで変化があった場合にuseEffectで変化を検知
  // useEffect(() => {
  //   const unSub = auth.onAuthStateChanged((authUser) => {
  //     console.log(authUser);
  //     if (authUser) {
  //       dispatch(login({
  //         uid: authUser.uid,
  //         photoUrl: authUser.photoURL,
  //         displayName: authUser.displayName,
  //       }));
  //     } else {
  //       dispatch(logout());
  //     }
  //   });
  // }, [dispatch]);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
        <AuthUserRoute>
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </AuthUserRoute>
      </BrowserRouter>
    </>
  )
};
