import { Fragment } from 'react';
import Modal from '../UI/Modal';
import Card from './Card';
import style from './Cart.module.scss';
import { useSelector } from 'react-redux';

const Cart = (props) => {
  const cartData = useSelector((state) => state.cart.items);
  const cartTotal = useSelector((state) => state.cart.totalAmount);
  return (
    <Modal title='Cart' onClose={props.onClose}>
      {cartData.length > 0 ? (
        <Fragment>
          <ul>
            {cartData.map((item) => {
              return (
                <Card
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  quantity={item.quantity}
                  total={item.totalPrice}
                  price={item.price}
                />
              );
            })}
          </ul>
          <div className={style.total}>Total amount: {cartTotal}</div>
        </Fragment>
      ) : (
        <div className={style.error}> No items was found </div>
      )}
    </Modal>
  );
};

export default Cart;
