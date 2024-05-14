import style from './Questions.module.scss';
import QuestionList from './QuestionList';

const DUMMU_QA = [
  {
    id: 'qa1',
    initialState: 'ЯК ЗРОБИТИ ЗАМОВЛЕННЯ?',
    item: (
      <li>
        Оберіть білизну, що Вам сподобалась і натисніть - оформити замовлення
        або напишіть нам в інстаграмі і ми допоможемо оформити
      </li>
    ),
  },
  {
    id: 'qa2',
    initialState: 'ЩО З ДОСТАВКОЮ?',
    item: (
      <li>
        Доставка здійснюється за тарифами Нової пошти на відділення чи поштомат
        ередплата 100грн або Повна оплата Відправка відбувається о 17:00-19:00
      </li>
    ),
  },
  {
    id: 'qa3',
    initialState: 'ЯК ШВИДКО ПРИЙДЕ ТОВАР?',
    item: (
      <li>
        Відправлення протягом 1-3 робочих днів Термін доставки орієнтовано 1-3
        дні
      </li>
    ),
  },
  {
    id: 'qa4',
    initialState: 'МОЖУ ОБМІНЯТИ ЗАМОВЛЕННЯ?',
    item: (
      <li>
        Відповідно до Закону України про захист прав споживача натільна білизна
        і панчішно-шкарпетні вироби не підлягають поверненню та обміну
        Будь-ласка, уважно перевіряйте товар на пошті та ретельно підбирайте
        розмір і в разі обміну - одразу оформлюйте зворотню доставку
      </li>
    ),
  },
  {
    id: 'qa5',
    initialState: 'ЕФЕКТ ОЧІКУВАННЯ/РЕАЛЬНІСТЬ',
    item: (
      <li>
        Абсолютно всі фотографії, відео з рілсів, актуальних, усі ці фото
        зроблені нашим фотографом, тому можете не перейматись щодо відповідності
        товару на фото та в житті, адже наші моделі спеціально для вас
        перевіряють якість одягу на собі, більшість обирають комплекти і для
        себе :{')'}
      </li>
    ),
  },
  {
    id: 'qa6',
    initialState: 'ЯК ПІДІБРАТИ РОЗМІР?',
    item: (
      <ul>
        <li>1.Вдягаємо зручний топ чи бюстгальтер без пуш-ап</li>
        <li>2.Заміряємо обхват під грудьми</li>
        <li>3.Заміряємо обхват грудей по найвипуклішій лінії</li>
        <li>
          <p>Важливо: мірну стрічку тримати паралельно до підлоги</p>
        </li>
        <li>1.Обхват під грудьми це і є Ваш розмір - 70/75/80/85</li>
        <li>2.Далі визначимо повноту чашки А/В/С</li>
        <li>3.Обхват грудей - Обхват під грудьми = Повнота чашки</li>
        <li>Наприклад: 89-73 = 16, тобто повнота C</li>
        <li>
          <p>Повна таблиця розмірів в інстаграмі в актуальних історіях</p>
        </li>
      </ul>
    ),
  },
];

const Questions = () => {
  return (
    <div className={style.questions} id='question'>
      <div className={style['questions__background']}></div>
      <div className='container'>
        <div className={style['questions__content']}>
          <div className={style['questions__content--left']}>Q&A</div>
          <div className={style['questions__content--right']}>
            <ul>
              {DUMMU_QA.map((item) => {
                return (
                  <QuestionList
                    dotStyle={style['questions__content--dot']}
                    className={style['questions__content--ul']}
                    dotOpened={style['dot']}
                    animateDropdown={style['animated__dropdown']}
                    key={item.id}
                    id={item.id}
                    item={item.item}
                  >
                    {item.initialState}
                  </QuestionList>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
