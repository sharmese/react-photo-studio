import React, { Fragment, useState, useRef, useEffect } from 'react';
import style from './Profile.module.scss';
import Header from '../../layout/header/Header';
import Footer from '../../layout/footer/Footer';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userActions } from '../../store/profile-slice';
import { getAuth, signOut, updateProfile } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase-init';

const Profile = () => {
  //Вихід з профілю за допомогою колбеку useDispatch та метода exitUser в profile-slice
  const dispatch = useDispatch();
  const auth = getAuth();
  const user = auth.currentUser;

  const [userInfo, setUserInfo] = useState({
    name: '',
    surname: '',
    date: '',
    phone: '',
  });

  useEffect(() => {
    const getUserInfo = async () => {
      const docSnap = await getDoc(doc(db, 'user-info', user.uid));
      if (!docSnap.exists()) {
        return;
      } else {
        if (docSnap.data() !== null) {
          setUserInfo(docSnap.data());
        }
      }
    };
    getUserInfo();
  }, [user.uid]);
  const nameRef = useRef(null);
  const surnameRef = useRef(null);
  const dateRef = useRef(null);
  const phoneRef = useRef(null);

  const handleInput = () => {
    setUserInfo({
      name: nameRef.current.value,
      surname: surnameRef.current.value,
      date: dateRef.current.value,
      phone: phoneRef.current.value,
    });
  };
  const setProfile = async (items) => {
    if (user) {
      await setDoc(doc(db, 'user-info', user.uid), {
        name: items.name,
        surname: items.surname,
        date: items.date,
        phone: items.phone,
      });
    }
  };
  const handleExitUser = () => {
    dispatch(userActions.exitUser());
    signOut(auth);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setProfile(userInfo);
  };
  return (
    <Fragment>
      <Header />
      <div className={style.wrapper}>
        <div className={style.profile}>
          <div className={style['profile__background']}></div>
          <div className={style['profile__wrapper']}>
            <h1>Мій Аккаунт</h1>
            <div className={style['profile__content']}>
              <form className={style['profile__info']}>
                <input
                  type='text'
                  placeholder='ІМ’Я'
                  ref={nameRef}
                  onChange={handleInput}
                  value={userInfo.name}
                />
                <input
                  type='text'
                  placeholder='ПРІЗВИЩЕ'
                  ref={surnameRef}
                  onChange={handleInput}
                  value={userInfo.surname}
                />
                <input
                  type='date'
                  placeholder='ДАТА НАРОДЖЕННЯ'
                  ref={dateRef}
                  onChange={handleInput}
                  value={userInfo.date}
                />
                <input
                  type='tel'
                  placeholder='ТЕЛЕФОН'
                  ref={phoneRef}
                  onChange={handleInput}
                  value={userInfo.phone}
                />
                <input
                  type='email'
                  placeholder='ЕЛЕКТРОНА ПОШТА'
                  defaultValue={user.email}
                />
                <button onClick={handleSubmit} type='submit'>
                  ЗБЕРЕГТИ
                </button>
              </form>
              <div className={style['profile__nav']}>
                <p className={style['profile__nav--link']}>ПРО АКАУНТ</p>
                <Link
                  className={style['profile__nav--link']}
                  to={'/reset'}
                  style={{ cursor: 'pointer' }}
                >
                  ЗМІНИТИ ПАРОЛЬ
                </Link>
                <p className={style['profile__nav--link']}>ІСТОРІЯ ЗАМОВЛЕНЬ</p>
                <Link
                  className={style['profile__nav--link']}
                  to={'/'}
                  style={{ cursor: 'pointer' }}
                  onClick={handleExitUser}
                >
                  ВИХІД
                </Link>
              </div>
            </div>
          </div>
          x
          {/* <Link onClick={handleExitUser} to='/'>
          Exit
        </Link> */}
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Profile;
