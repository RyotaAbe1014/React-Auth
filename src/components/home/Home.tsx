import { Button } from '@mui/material';
import React, { FC, memo } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';

export const Home: FC = memo(() => {
  const navigate = useNavigate();

  const onClickSignOut = async () => {
    console.log("click!")
    await auth.signOut();
    navigate("/login");
  };

  return (
    <>
      <div>Home</div>
      <Button onClick={() => onClickSignOut()}>サインアウト</Button>
    </>
  )
});
