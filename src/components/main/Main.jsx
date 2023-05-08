import styles from './Main.module.css';

import brat from '../../img/main/brat.png';
import tumen from '../../img/main/tumen.png';
import omsk from '../../img/main/Omsk.png';
import gotica from '../../img/main/Gotica.png';
import sochi from '../../img/main/Sochi.png';
import cats from '../../img/main/cats.png';
import pushkin from '../../img/main/pushkin.png';
import second from '../../img/main/second.png';

import city1 from '../../img/main/1.png';
import city2 from '../../img/main/2.png';
import city3 from '../../img/main/3.png';
import city4 from '../../img/main/4.png';

import footer from '../../img/main/footer.png';

import photo from '../../img/main/photo.svg';

function Main() {
  return (
    <div className={styles.popularImage}>
      <div>
        <div className={styles.popular}>
          <h1>Популярные маршруты</h1>
          <p>Если не знаете что выбрать</p>
        </div>
        <div className={styles.imageRow}>
          <div className={styles.imageCard}>
            <img className={styles.image} src={brat} alt="ph" />
            <img className={styles.photo} src={photo} alt="ph" />
            <p className={styles.imageTitle}>По местам съемки фильма "Брат"</p>
            <p className={styles.imagePrice}>от 150₽</p>
          </div>
          <div className={styles.imageCard}>
            <img className={styles.image} src={tumen} alt="ph" />
            <img className={styles.photo} src={photo} alt="ph" />
            <p className={styles.imageTitle}>Лучшие арт-пространства Тюмени</p>
            <p className={styles.imagePrice}>от 500₽</p>
          </div>
          <div className={styles.imageCard}>
            <img className={styles.image} src={omsk} alt="ph" />
            <img className={styles.photo} src={photo} alt="ph" />
            <p className={styles.imageTitle}>Живописный Омскㅤㅤㅤㅤ</p>
            <p className={styles.imagePrice}>Бесплатно</p>
          </div>
          <div className={styles.imageCard}>
            <img className={styles.image} src={gotica} alt="ph" />
            <img className={styles.photo} src={photo} alt="ph" />
            <p className={styles.imageTitle}>
              Модерн и готика в Московской области
            </p>
            <p className={styles.imagePrice}>Бесплатно</p>
          </div>
        </div>
        <div className={styles.imageRow}>
          <div className={styles.imageCard}>
            <img className={styles.image} src={sochi} alt="ph" />
            <img className={styles.photo} src={photo} alt="ph" />
            <p className={styles.imageTitle}>Сочи путешествия по Роза Хутор</p>
            <p className={styles.imagePrice}>от 250₽</p>
          </div>
          <div className={styles.imageCard}>
            <img className={styles.image} src={cats} alt="ph" />
            <img className={styles.photo} src={photo} alt="ph" />
            <p className={styles.imageTitle}>Необычные сувениры из Иркутска</p>
            <p className={styles.imagePrice}>от 300₽</p>
          </div>
          <div className={styles.imageCard}>
            <img className={styles.image} src={pushkin} alt="ph" />
            <img className={styles.photo} src={photo} alt="ph" />
            <p className={styles.imageTitle}>
              Санкт-Петербург с Пушкинской картой
            </p>
            <p className={styles.imagePrice}>Бесплатно</p>
          </div>
          <div className={styles.imageCard}>
            <img className={styles.image} src={second} alt="ph" />
            <img className={styles.photo} src={photo} alt="ph" />
            <p className={styles.imageTitle}>
              По локальным брендам Новосибирска
            </p>
            <p className={styles.imagePrice}>от 550₽</p>
          </div>
        </div>
      </div>

      <div></div>

      <div>
        <div className={styles.popular}>
          <h1>Инетресное рядом</h1>
          <p>Что понравится Вам</p>
        </div>
        <div className={styles.intrestingeElements}>
          <div className={styles.intrestingCard}>
            <img className={styles.intrestingPhoto} src={city2} alt="ph" />
            <div className={styles.intresting}>
              <h1 className={styles.intrestingTitle}>Заголовок</h1>
              <p className={styles.intrestingDiscr}>
                Равным образом новая модель организационной деятельности играет
                важную роль в формировании позиций, занимаемых участниками в...
              </p>
            </div>
          </div>
          <div className={styles.intrestingCard}>
            <img className={styles.intrestingPhoto} src={city3} alt="ph" />
            <div className={styles.intresting}>
              <h1 className={styles.intrestingTitle}>Заголовок</h1>
              <p className={styles.intrestingDiscr}>
                Равным образом новая модель организационной деятельности играет
                важную роль в формировании позиций, занимаемых участниками в...
              </p>
            </div>
          </div>
        </div>
        <div className={styles.intrestingeElements}>
          <div className={styles.intrestingCard}>
            <img className={styles.intrestingPhoto} src={city4} alt="ph" />
            <div className={styles.intresting}>
              <h1 className={styles.intrestingTitle}>Заголовок</h1>
              <p className={styles.intrestingDiscr}>
                Равным образом новая модель организационной деятельности играет
                важную роль в формировании позиций, занимаемых участниками в...
              </p>
            </div>
          </div>
          <div className={styles.intrestingCard}>
            <img className={styles.intrestingPhoto} src={city1} alt="ph" />
            <div className={styles.intresting}>
              <h1 className={styles.intrestingTitle}>Заголовок</h1>
              <p className={styles.intrestingDiscr}>
                Равным образом новая модель организационной деятельности играет
                важную роль в формировании позиций, занимаемых участниками в...
              </p>
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <img src={footer} alt="footer" />
        </div>
      </div>
    </div>
  );
}

export { Main };
