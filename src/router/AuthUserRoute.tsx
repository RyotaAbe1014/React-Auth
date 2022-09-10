import React, { FC, memo, ReactNode, useEffect, useState } from "react";
import { User } from "../types/user";
import { login, logout, selectUser } from '../features/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../firebase';
import { Navigate } from "react-router";



type Props = {
  children: ReactNode
}

export const AuthUserRoute: FC<Props> = memo((props) => {
  const { children } = props;
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const unSub = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(login({
          uid: authUser.uid,
          photoUrl: authUser.photoURL,
          displayName: authUser.displayName,
        }));
        setIsLoading(false);
      } else {
        dispatch(logout());
        setIsLoading(false);
      }
    });
  }, [dispatch]);
  return (
    <>
      {!isLoading && (
        <>{user.uid ? (
          <>
            {children}
          </>
        ) : (
          <>
            <Navigate to="/login" />
          </>
        )}
        </>
      )}
    </>
  );
});