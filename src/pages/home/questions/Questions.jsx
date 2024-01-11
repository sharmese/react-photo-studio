import React from 'react';
import style from './Questions.module.scss';
import Footer from '../../../layout/footer/Footer';

const Questions = () => {
  return (
    <div className={style.questions} id='question'>
      <div className={style['questions__background']}></div>
      <div className='container'>
        <div className={style['questions__content']}>
          <div className={style['questions__content--left']}>Q&A</div>
          <div className={style['questions__content--right']}>
            <ul>
              <li>
                ЯК ЗРОБИТИ ЗАМОВЛЕННЯ?<p>.</p>
              </li>
              <hr />
              <li>
                ЩО З ДОСТАВКОЮ?<p>.</p>
              </li>
              <hr />
              <li>
                ЯК ШВИДКО ПРИЙДЕ ТОВАР? <p>.</p>
              </li>
              <hr />
              <li>
                МОЖУ ОБМІНЯТИ ЗАМОВЛЕННЯ?<p>.</p>
              </li>
              <hr />
              <li>
                ЕФЕКТ ОЧІКУВАННЯ/РЕАЛЬНІСТЬ<p>.</p>
              </li>
              <hr />
              <li>
                ЯК ПІДІБРАТИ РОЗМІР?<p>.</p>
              </li>
              <hr />
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Questions;
