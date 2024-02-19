import style from './Assortment.module.scss';
import basket from '../../../assets/basket2.svg';
//import image1 from '../../../assets/imagefull.jpeg';
//import image2 from '../../../assets/imagefull2.jpeg';
import image1 from '../../../assets/assortment1.jpg';
import image2 from '../../../assets/assortment2.jpg';
import image3 from '../../../assets/assortment3.jpg';
import image4 from '../../../assets/assortment4.jpg';
import image5 from '../../../assets/assortment5.jpg';
import image6 from '../../../assets/assortment6.jpg';
import image7 from '../../../assets/assortment7.jpg';
import image8 from '../../../assets/assortment8.jpg';
import image9 from '../../../assets/assortment9.jpg';

const Assortment = (props) => {
  return (
    <div className={style.assortment} id='assortment'>
      <div className={style.assortment__background}></div>
      <div className='container'>
        <div className={style['assortment__desc']}>
          <div className={style['assortment__desc-first']}>
            Обирайте, що подобається і натискай
            <img src={basket} alt='30' />
          </div>
          <div className={style['assortment__desc-second']}>
            <ul>
              <li>підвищь рівень інтимності</li>
              <li>відкрий поєднання комфорту і привабливості</li>
              <li>на кожен день чи особливий випадок</li>
              <li>акцент на комплекти</li>
              <li>від бюстгальтерів до стрінгів</li>
              <li>періодичні розпродажі для більшої доступності</li>
            </ul>
          </div>
        </div>
        <div className={style['assortment__photos']}>
          <div className={style['assortment__photos--small']}>
            <div className={style['assortment__heading']}>
              <h2>асортимент</h2>
            </div>
            <ul>
              <li>
                <p className='jc-fe'>01</p>
                <img src={image1} alt='295x244' />
                <p>СОРОЧКА-ПОРТУПЕЯ В ЧОРНОМУ КОЛЬОРІ</p>
              </li>
              <li>
                <p className='jc-fe'>02</p>
                <img src={image2} alt='295x244' />
                <p>СЕТ СПІДНИЦЯ-СПОКУСНИЦЯ WHITE</p>
              </li>
              <li>
                <p className='jc-fe'>03</p>
                <img src={image3} alt='295x244' />
                <p>СОРОЧКА-ПОРТУПЕЯ В БОРДОВОМУ КОЛЬОРІ</p>
              </li>
              <li>
                <p className='jc-fe'>04</p>
                <img src={image4} alt='295x244' />
                <p>СЕТ СПОКУСА ІЗ ЦЕПОЧКОЮ НА ШИЮ</p>
              </li>
              <li>
                <p className='jc-fe'>05</p>
                <img src={image5} alt='295x244' />
                <p>СЕТ СПІДНИЦЯ-СПОКУСНИЦЯ BLACK</p>
              </li>
              <li>
                <p className='jc-fe'>06</p>
                <img src={image6} alt='295x244' />
                <p>БОДІ В ЧОРНОМУ КОЛЬОРІ</p>
              </li>
            </ul>
          </div>
          <div className={style['assortment__photos--big']}>
            <ul>
              <li>
                <p className='jc-fe'>07</p>
                <img src={image7} alt='400x331' />
                <p className='jc-c'>INTRIGUE</p>
              </li>
              <li>
                <p className='jc-fe'>08</p>
                <img src={image8} alt='400x331' />
                <p className='jc-c'>IN EVERY</p>
              </li>
              <li>
                <p className='jc-fe'>09</p>
                <img src={image9} alt='400x331' />
                <p className='jc-c'>DETAIL</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Assortment;
