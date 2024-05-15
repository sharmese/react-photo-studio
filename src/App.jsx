import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import Products from './pages/products/Products';
import Product from './components/Product/Product';
import Error from './pages/error/Error';
import { Fragment, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { userActions } from './store/profile-slice';
import { errorActions } from './store/error-slice';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { db } from './firebase-init';
import { cartActions } from './store/cart-slice';
import PasswordReset from './components/Login/PasswordReset';

function App() {
  //Зареєстрований чи ні
  const [isLoading, setIsLoading] = useState(true);
  const auth = getAuth();

  const dispatch = useDispatch();

  useEffect(() => {
    setInterval(() => {
      setIsLoading(false);
    }, 1000);

    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(userActions.toggleUser(true));
        const getUserData = async () => {
          let cartData = [];
          const docRef = doc(db, 'user-cart', user.uid);
          const docSnap = await getDoc(docRef);
          if (!docSnap.exists()) {
            await setDoc(doc(db, 'user-cart', user.uid), {
              cart: JSON.parse(localStorage.getItem('cart')),
            });
          } else {
            if (docSnap.data().cart !== null) {
              cartData.push(...docSnap.data().cart);
            }
            if (localStorage.length > 0) {
              cartData.push(...JSON.parse(localStorage.getItem('cart')));
              localStorage.clear();

              const mergedArray = cartData.reduce((acc, curr) => {
                const foundIndex = acc.findIndex((item) => item.id === curr.id);
                if (foundIndex !== -1) {
                  acc[foundIndex].quantity += curr.quantity;
                  acc[foundIndex].totalPrice += curr.totalPrice;
                } else {
                  acc.push(curr);
                }
                return acc;
              }, []);
              await setDoc(doc(db, 'user-cart', user.uid), {
                cart: mergedArray,
              });
              cartData = mergedArray;
            } else if (localStorage === 0) {
              return;
            }
          }
          dispatch(cartActions.getItemsFromUserData(cartData));
        };
        getUserData();
      } else {
        dispatch(
          cartActions.getItemsFromUserData(
            JSON.parse(localStorage.getItem('cart'))
          )
        );
        dispatch(errorActions.changeErrorState(3));
      }
    });
  }, [auth, dispatch]);
  return (
    <Fragment>
      {isLoading ? (
        <div className='lds-dual-ring'></div>
      ) : (
        <BrowserRouter basename='/'>
          <Routes>
            <Route path='/' element={<Home />} />
            {auth.currentUser && (
              <Route path='/profile' element={<Profile />} />
            )}
            <Route path='/reset' element={<PasswordReset />} />
            <Route path='/products' element={<Products />} />
            <Route path='/product/:id' element={<Product />} />
            <Route path='*' element={<Error />} />
          </Routes>
        </BrowserRouter>
      )}
    </Fragment>
  );
}

export default App;
