import { forwardRef } from 'react';
import styles from './Button.module.css';
import cn from 'classnames';

const Button = forwardRef(function Button(
  { children, appearence = 'small', onClick },
  ref
) {
  return (
    <button
      className={cn(styles['button'], {
        [styles['small']]: appearence === 'small',
        [styles['middle']]: appearence === 'middle',
      })}
      onClick={onClick}
      ref={ref}
    >
      {children}
    </button>
  );
});

export default Button;
