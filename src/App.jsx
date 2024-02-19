import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import Products from './pages/products/Products';
import Product from './components/Product/Product';
import Login from './components/Login/Login';
import Error from './pages/error/Error';
import { useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from './store/profile-slice';
import { errorActions } from './store/error-slice';

function App() {
  //Зареєстрований чи ні
  const auth = getAuth();
  const dispatch = useDispatch();
  const isUser = useSelector((state) => state.user.userIsLogged);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(userActions.toggleUser(true));
      } else {
        dispatch(errorActions.changeErrorState(3));
      }
    });
  }, [auth, dispatch]);
  return (
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='/' element={<Home />} />
        {isUser && <Route path='/profile' element={<Profile />} />}
        <Route path='/products' element={<Products />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
