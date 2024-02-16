import { useSelector } from 'react-redux';
import Header from '../../layout/header/Header';
import Footer from '../../layout/footer/Footer';

const Error = () => {
  //Отримання коду помилки для відображення на сайті за допомогою колбеку useSelector
  const errState = useSelector((state) => state.error.errorCode);
  return (
    <div>
      <Header />
      {errState}
      <Footer />
    </div>
  );
};

export default Error;
