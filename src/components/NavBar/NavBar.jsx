import { useContext, useEffect } from 'react';
import { UserContex } from '../../contex/user.contex';
import NavTopLink from '../NavTopLink/NavTopLink';
import styles from './NavBar.module.css';
import { useLocalStorage } from '../../hooks/use-localstorage.hook';

function NavBar() {
  let [profile, setProfile] = useLocalStorage('profile');
  let { profileContex, setProfileContex } = useContext(UserContex);

  useEffect(() => {
    profileContex = profile;
    setProfileContex(profileContex);
  }, [profile]);

  useEffect(() => {
    if (profileContex) {
      profile = profileContex;
      setProfile(profile);
    }
  }, [profileContex]);

  const logOut = () => {
    profile.isLogined = false;
    setProfile(profile);
  };

  return (
    <div className={styles['navbar']}>
      <img className={styles['logo']} src="/logo.png" alt="Логотип" />
      <div className={styles['rigth-menu']}>
        <NavTopLink active="true">Поиск фильмов</NavTopLink>
        <NavTopLink count={2}>Мои фильмы</NavTopLink>
        {profileContex && profileContex.isLogined === true ? (
          <NavTopLink icon={'userpic.svg'}>
            {profileContex.login_name}
          </NavTopLink>
        ) : (
          ''
        )}
        {profileContex && profileContex.isLogined === true ? (
          <NavTopLink onClick={logOut}>Выйти</NavTopLink>
        ) : (
          <NavTopLink icon={'log-in.svg'}>Войти</NavTopLink>
        )}
      </div>
    </div>
  );
}

export default NavBar;
