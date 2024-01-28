import { useSelector } from 'react-redux';
import Header from '../../layout/header/Header';
import Footer from '../../layout/footer/Footer';

const Error = () => {
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
