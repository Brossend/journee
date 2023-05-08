import { Link } from 'react-router-dom';

import styles from './Header.module.css';

import logo from '../img/header/logo.svg';
import notification from '../img/header/notification.svg';
import profile from '../img/header/profile.svg';
import miniProfile from '../img/header/miniProfile.svg';

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.navigation}>
        <div className={styles.logo}>
          <Link to={'/journee/'}>
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className={styles.navigationElements}>
          <Link to={'/journee/dev/'} className={styles.buttonNavigation}>
            Избранное
          </Link>
          <Link to={'/journee/map'} className={styles.buttonNavigation}>
            Создать маршрут
          </Link>
          <Link to={'/journee/dev/'} className={styles.buttonNavigation}>
            Мои покупки
          </Link>
        </div>
        <div className={styles.profile}>
          <Link to={'/journee/dev/'} className={styles.profileNotificaton}>
            <img src={notification} alt="notifications" />
          </Link>
          <Link to={'/journee/dev/'} className={styles.profileButton}>
            <img src={profile} alt="profile" />
          </Link>
          <button className={styles.profileMiniProfile}>
            <img src={miniProfile} alt="profile" />
          </button>
        </div>
      </div>

      <div className={styles.find}>
        <div className={styles.findNavigation}>
          <button className={styles.findButton}>Маршруты</button>
          <button className={styles.findButton}>Города</button>
          <button className={styles.findButton}>Места</button>
          <button className={styles.findButton}>Авторы</button>
        </div>
        <div>
          <form>
            <input
              className={styles.findField}
              type="text"
              name="main"
              placeholder="Поиск"
            />
            <div className={styles.miniFindFields}>
              <input
                className={styles.whereOut}
                type="text"
                name="where-out"
                placeholder="Откуда"
              />
              <input
                className={styles.whereIn}
                type="text"
                name="where-in"
                placeholder="Куда"
              />
              <label>
                Заезд
                <input
                  className={styles.checkIn}
                  type="date"
                  name="check-in"
                  placeholder="Заезд"
                />
              </label>
              <label>
                Выезд
                <input
                  className={styles.checkOut}
                  type="date"
                  name="check-out"
                  placeholder="Выезд"
                />
              </label>
              <label>
                Чел.
                <input
                  className={styles.peopleCount}
                  type="number"
                  name="count-people"
                  placeholder="1"
                />
              </label>
              <button className={styles.submitButton} type="submit">
                Найти
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export { Header };
