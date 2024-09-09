import styles from './NavTopLink.module.css';

function NavTopLink({ children, count, icon, active }) {
  return (
    <div className={styles['nav-top']}>
      <a
        href="/"
        className={
          active ? styles['nav-top-link-active'] : styles['nav-top-link']
        }
      >
        {children}
      </a>
      {count > 0 && <span className={styles['count']}>{count}</span>}
      {icon ? (
        <img src={icon} alt="Выход" className={styles['nav-top-icon']}></img>
      ) : (
        ''
      )}
    </div>
  );
}

export default NavTopLink;
