import React, { useEffect } from "react";
import { User } from "../types/user";
import { login, logout, selectUser } from '../features/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../firebase';
import { useNavigate } from "react-router";



type Props = {
  children: React.ReactNode
}

export const AuthUserRoute = (props: Props) => {
  const { children } = props;
  // const user = useSelector(selectUser);
  // const dispatch = useDispatch();
  // const unSub = auth.onAuthStateChanged((authUser) => {
  //   console.log(authUser);
  //   if (authUser) {
  //     dispatch(login({
  //       uid: authUser.uid,
  //       photoUrl: authUser.photoURL,
  //       displayName: authUser.displayName,
  //     }));
  //   } else {
  //     dispatch(logout());
  //   }
  // });

  return (
    <AuthUserRoute>
      {children}
    </AuthUserRoute>
  );
}