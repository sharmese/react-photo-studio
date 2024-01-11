import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import style from './Modal.module.scss';

const Backdrop = (props) => {
  return <div className={style.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={style.modal}>
      <div className={style['modal__top']}>
        <h1>{props.title}</h1>
        <div className={style['modal__top--cross']} onClick={props.onClose}>
          <div className={style['line-1']}></div>
          <div className={style['line-2']}></div>
        </div>
      </div>

      <hr />
      <div className={style.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onClose={props.onClose} title={props.title}>
          {props.children}
        </ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
