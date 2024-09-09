import NavTopLink from '../NavTopLink/NavTopLink';
import styles from './NavBar.module.css';

function NavBar() {
  return (
    <div className={styles['navbar']}>
      <img className={styles['logo']} src="/logo.png" alt="Логотип" />
      <div className={styles['rigth-menu']}>
        <NavTopLink active="true">Поиск фильмов</NavTopLink>
        <NavTopLink count={2}>Мои фильмы</NavTopLink>
        <NavTopLink icon={'log-out.svg'}>Выйти</NavTopLink>
      </div>
    </div>
  );
}

export default NavBar;
