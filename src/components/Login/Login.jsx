import React, { useEffect, useMemo, useRef, useState } from 'react';
import Modal from '../UI/Modal';
import style from './Login.module.scss';

const registeredUsers = [
  { name: 'daria', password: 'babenko' },
  { name: '123', password: '123' },
  { name: 'admin', password: 'admin' },
  { name: 'admin', password: 'password' },
  { name: 'user', password: 'password' },
];

const Login = (props) => {
  const [userLogin, setUserLogin] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const [isUser, setIsUser] = useState(false);
  const [focused, setFocused] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const userPasswordRef = useRef(null);
  const userLoginRef = useRef(null);

  const handleFocus = () => setFocused(true);
  const handleBlur = () => {
    setFocused(false);
  };

  const handleInput = () => {
    setUserLogin(userLoginRef.current.value);
    setUserPassword(userPasswordRef.current.value);
    setIsTyping(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userLogin.length > 0 && userPassword.length > 0) {
      const user = registeredUsers.find((user) => {
        return user.name === userLogin && user.password === userPassword;
      });

      if (user) {
        setIsUser(Boolean(user));
        setIsTyping(false);

        return;
      }

      //....
      // setError('sadfasdfas')
    }

    //...
  };

  useEffect(() => {
    props.handleLogin(isUser);
    console.log(isUser);
  }, [isUser, props]);

  const inputStyle = useMemo(
    () => (!isUser ? (focused ? '' : isTyping ? '' : style.red) : ''),
    [focused, isTyping, isUser]
  );

  return (
    <Modal title='Login' onClose={props.onClose}>
      <form onSubmit={handleSubmit} className={style.profile}>
        <div className={style['profile__label']}>
          <label htmlFor='username'>
            Username
            <input
              className={inputStyle}
              onFocus={handleFocus}
              onBlur={handleBlur}
              type='username'
              onChange={handleInput}
              value={userLogin}
              ref={userLoginRef}
            />
            {/* {error ? <div>go nahui</div> : null} */}
          </label>
        </div>
        <div className={style['profile__label']}>
          <label htmlFor='password'>
            Password
            <input
              className={inputStyle}
              onFocus={handleFocus}
              onBlur={handleBlur}
              type='password'
              onChange={handleInput}
              value={userPassword}
              ref={userPasswordRef}
            />
          </label>
        </div>
        <button type='submit' className={style['profile__btn']}>
          login
        </button>
      </form>
    </Modal>
  );
};

export default Login;
