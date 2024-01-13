import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import Products from './pages/products/Products';
import Product from './components/Product/Product';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
function App() {
  const { id } = useParams();

  return (
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/products' element={<Products />} />
        <Route path='/product/:id' element={<Product id={id} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
