import styles from './ListCartFilm.module.css';

function ListCartFilm({ children }) {
  return <div className={styles['list-cart']}>{children}</div>;
}

export default ListCartFilm;
