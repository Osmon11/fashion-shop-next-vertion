import React, { useCallback, useState, useRef } from "react";
import { Alert, AlertTitle } from "@material-ui/lab";
import IconButton from "@material-ui/core/IconButton";
import Collapse from "@material-ui/core/Collapse";
import CloseIcon from "@material-ui/icons/Close";
import { loginUser } from "../lib/store/reducers";
import { useDispatch } from "react-redux";

const Login = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  let message = useRef({ message: "All right!" });
  let colorStrong = { color: "#ce1126" };
  const checkUserLogin = useCallback(
    (e) => {
      e.preventDefault();
      const { email, password } = e.target.elements;
      dispatch(loginUser(email.value, password.value));
    },
    [dispatch]
  );
  return (
    <>
      <Collapse in={open}>
        <Alert
          severity='error'
          action={
            <IconButton
              aria-label='close'
              color='inherit'
              size='small'
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize='inherit' />
            </IconButton>
          }
        >
          <AlertTitle>Error</AlertTitle>
          <strong style={colorStrong}>{message.current.message}</strong>
        </Alert>
      </Collapse>
      <form
        className='boxL'
        onSubmit={checkUserLogin}
        action='index.html'
        method='post'
      >
        <h1>Login</h1>
        <input type='email' name='email' placeholder='UserEmail' />
        <input type='password' name='password' placeholder='Password' />
        <input type='submit' value='Login' />
      </form>
      <div className='loginFormBg' />
    </>
  );
};

export default Login;
