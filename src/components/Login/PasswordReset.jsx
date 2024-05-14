import React, { useRef, useState } from 'react';
import Footer from '../../layout/footer/Footer';
import Header from '../../layout/header/Header';
import style from './PasswordReset.module.scss';
import { getAuth, updatePassword } from 'firebase/auth';

const PasswordReset = () => {
  const [userPassword, setUserPassword] = useState({
    password: '',
    confirmPassword: '',
  });
  const userPasswordRef = useRef(null);
  const userConfirmPasswordRef = useRef(null);
  const auth = getAuth();

  const user = auth.currentUser;

  const handleInput = () => {
    setUserPassword({
      password: userPasswordRef.current.value,
      confirmPassword: userConfirmPasswordRef.current.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userPassword.password === userPassword.confirmPassword) {
      updatePassword(user, userPassword.password)
        .then(() => {
          console.log('yes');
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert('passwords are different');
    }
  };
  return (
    <div>
      <Header />
      <form className={style.reset} onSubmit={handleSubmit}>
        <input
          className={style.reset__input}
          type='password'
          placeholder='enter password'
          autoComplete='new-password'
          value={userPassword.password}
          onChange={handleInput}
          ref={userPasswordRef}
        />
        <input
          type='password'
          autoComplete='new-password'
          className={style.reset__input}
          placeholder='confirm password'
          value={userPassword.confirmPassword}
          onChange={handleInput}
          ref={userConfirmPasswordRef}
        />
        <button className={style.reset__button}> confirm </button>
      </form>
      <Footer />
    </div>
  );
};

export default PasswordReset;
