import styles from './NavTopLink.module.css';
import cn from 'classnames';

import classNames from 'classnames';
import { act } from 'react';

function NavTopLink({ children, count, icon, active }) {
  return (
    <div className={styles['nav-top']}>
      <a
        href="/"
        className={cn(styles['nav-top-link'], {
          [styles['active']]: active,
        })}
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
