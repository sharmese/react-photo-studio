import React, { useEffect, useMemo, useRef, useState } from 'react';
import Modal from '../UI/Modal';
import style from './Login.module.scss';
import { app } from '../../firebase-init';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { useSelector, useDispatch } from 'react-redux';
import { userActions } from '../../store/profile-slice';

const Login = (props) => {
  const [userLogin, setUserLogin] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const [focused, setFocused] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [formSignupSignin, setFormSingupSignin] = useState('signin');

  const dispatch = useDispatch();

  const toggleUser = useSelector((state) => state.user.userIsLogged);

  const userPasswordRef = useRef(null);
  const userLoginRef = useRef(null);

  const handleFocus = () => setFocused(true);
  const handleBlur = () => {
    setFocused(false);
  };
  const handleSignUp = () => {
    setFormSingupSignin('signup');
  };
  const handleSignIn = () => {
    setFormSingupSignin('signin');
  };

  const handleInput = () => {
    setUserLogin(userLoginRef.current.value);
    setUserPassword(userPasswordRef.current.value);
    setIsTyping(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formSignupSignin === 'signin') {
      loginEmailPassword();
    }
    if (formSignupSignin === 'signup') {
      createAccount();
    }
  };
  const auth = getAuth(app);
  const loginEmailPassword = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        userLogin,
        userPassword
      );
      if (userCredential.user) {
        dispatch(userActions.toggleUser(true));
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
      setIsTyping(false);
    }
  };
  const createAccount = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        userLogin,
        userPassword
      );
      if (userCredential.user) {
        dispatch(userActions.toggleUser(true));
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
      setIsTyping(false);
    }
  };
  const inputStyle = useMemo(
    () => (!toggleUser ? (focused ? '' : isTyping ? '' : style.red) : ''),
    [focused, isTyping, toggleUser]
  );

  return (
    <div>
      {formSignupSignin === 'signin' && (
        <SignIn
          onClose={props.onClose}
          handleSubmit={handleSubmit}
          handleInput={handleInput}
          handleBlur={handleBlur}
          handleFocus={handleFocus}
          userPasswordRef={userPasswordRef}
          userLoginRef={userLoginRef}
          inputStyle={inputStyle}
          handleSignUp={handleSignUp}
        />
      )}
      {formSignupSignin === 'signup' && (
        <SignUp
          onClose={props.onClose}
          handleSubmit={handleSubmit}
          handleInput={handleInput}
          handleBlur={handleBlur}
          handleFocus={handleFocus}
          userPasswordRef={userPasswordRef}
          userLoginRef={userLoginRef}
          inputStyle={inputStyle}
          handleSignIn={handleSignIn}
        />
      )}
    </div>
  );
};

export const SignIn = (props) => {
  return (
    <Modal title='Login' onClose={props.onClose}>
      <form onSubmit={props.handleSubmit} className={style.profile}>
        <div className={style['profile__label']}>
          <label htmlFor='email'>
            Email
            <input
              className={props.inputStyle}
              onFocus={props.handleFocus}
              onBlur={props.handleBlur}
              type='email'
              onChange={props.handleInput}
              value={props.userLogin}
              ref={props.userLoginRef}
            />
          </label>
        </div>
        <div className={style['profile__label']}>
          <label htmlFor='password'>
            Password
            <input
              className={props.inputStyle}
              onFocus={props.handleFocus}
              onBlur={props.handleBlur}
              type='password'
              onChange={props.handleInput}
              value={props.userPassword}
              ref={props.userPasswordRef}
            />
          </label>
        </div>
        <button type='submit' className={style['profile__btn']}>
          Login
        </button>
        <button onClick={props.handleSignUp} className={style['profile__btn']}>
          Sign up
        </button>
      </form>
    </Modal>
  );
};
export const SignUp = (props) => {
  return (
    <Modal title='SignUp' onClose={props.onClose}>
      <form onSubmit={props.handleSubmit} className={style.profile}>
        <div className={style['profile__label']}>
          <label htmlFor='email'>
            Email
            <input
              className={props.inputStyle}
              onFocus={props.handleFocus}
              onBlur={props.handleBlur}
              type='email'
              onChange={props.handleInput}
              value={props.userLogin}
              ref={props.userLoginRef}
            />
          </label>
        </div>
        <div className={style['profile__label']}>
          <label htmlFor='password'>
            Password
            <input
              className={props.inputStyle}
              onFocus={props.handleFocus}
              onBlur={props.handleBlur}
              type='password'
              onChange={props.handleInput}
              value={props.userPassword}
              ref={props.userPasswordRef}
            />
          </label>
        </div>
        <button type='submit' className={style['profile__btn']}>
          Sign up
        </button>
        <button onClick={props.handleSignIn} className={style['profile__btn']}>
          Sign in
        </button>
      </form>
    </Modal>
  );
};

export default Login;
