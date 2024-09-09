import { Link } from 'react-router-dom';
import styles from './CartFilm.module.css';
function CartFilm({ children, ...props }) {
  return (
    <div>
      <div
        className={styles['cart']}
        style={{ backgroundImage: `url('${props.image}')` }}
      >
        {' '}
      </div>
      <div className={styles['footer']}>
        <div className={styles['name-film']}>{props.nameFilm}</div>
        <img
          className={styles['favourite']}
          src="/favourite.png"
          alt="В избранное"
        />
      </div>
    </div>
  );
}

export default CartFilm;
