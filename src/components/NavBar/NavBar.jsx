import NavTopLink from '../NavTopLink/NavTopLink';
import styles from './NavBar.module.css';

function NavBar({ profile, logOut }) {
  // if (profile != undefined) {
  //   console.log('NavBar - ' + profile.isLogined);
  // }
  return (
    <div className={styles['navbar']}>
      <img className={styles['logo']} src="/logo.png" alt="Логотип" />
      <div className={styles['rigth-menu']}>
        <NavTopLink active="true">Поиск фильмов</NavTopLink>
        <NavTopLink count={2}>Мои фильмы</NavTopLink>
        {profile && profile.isLogined === true ? (
          <NavTopLink icon={'userpic.svg'}>{profile.login_name}</NavTopLink>
        ) : (
          ''
        )}
        {profile && profile.isLogined === true ? (
          <NavTopLink onClick={logOut}>Выйти</NavTopLink>
        ) : (
          <NavTopLink icon={'log-in.svg'}>Войти</NavTopLink>
        )}
      </div>
    </div>
  );
}

export default NavBar;
