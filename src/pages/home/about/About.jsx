import style from './About.module.scss';

const About = () => {
  return (
    <div className={style.about} id='about'>
      <div className={style['about__background']}></div>
      <div className='container'>
        <div className={style['about__wrapper']}>
          <div className={style['about__first']}>
            <div className={style['about__first--top']}>
              <p>наша маленька історія</p>
            </div>
            <div className={style['about__first--bot']}>
              <p>про магазин</p>
              <p className={style['about__italic']}>
                перетвори кожну мить в особливу...
              </p>
            </div>
          </div>
          <div className={style['about__second']}>
            <ul>
              <li>
                <p className={style.mg}>Народжений із стійкості</p>
                Створення онлайн-магазину нижньої білизни Asuna у зиму 2022 року
                було історією натхнення та рішучості, народженою в найважчі
                часи.
              </li>
              <li>
                Заснування було далекоглядним і непохитним рішенням, адже ми
                побачили можливість створити щось унікальне українське, те, що
                не лише скрасить дні, а й додасть сили кожній жінці. Таким
                чином, ASUNA була задумана серед темряви - маяк світла,
                елегантності та доступної розкоші.
              </li>
              <li>
                Інтернет-магазин був не просто ринком нижньої білизни; це було
                свідченням розширення можливостей, надії та непохитної віри в
                красу кожної української жінки.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
