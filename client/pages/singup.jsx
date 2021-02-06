import React, { useCallback } from "react";
import Router from "next/router";
import { useDispatch } from "react-redux";
import { createUser } from "../lib/store/actionCreators";

const AdminSingup = () => {
  const dispatch = useDispatch();
  const handleSingup = useCallback(
    (e) => {
      e.preventDefault();
      const { email, password, username } = e.target.elements;
      dispatch(createUser({ email, password, username }));
    },
    [dispatch]
  );

  return (
    <>
      <img
        className='bg_space'
        src={require("../../../assets/img/image1.webp")}
        alt='space'
      />
      <form
        className='box'
        onSubmit={handleSingup}
        action='index.html'
        method='post'
      >
        <h1>Singup</h1>
        <input type='email' name='email' placeholder='UserEmail' />
        <input type='password' name='password' placeholder='Password' />
        <input type='text' name='username' placeholder='Username' />
        <input type='submit' value='Singup' />
      </form>
    </>
  );
};

export default AdminSingup;
