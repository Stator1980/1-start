import { forwardRef } from 'react';
import styles from './Input.module.css';
import cn from 'classnames';

const Input = forwardRef(function Input(
  { className, isIcon = false, isValid = true, appearence, ...props },
  ref
) {
  return (
    <>
      <input
        {...props}
        ref={ref}
        className={cn(className, styles['search-form'], styles['is-icon'], {
          [styles['is-not-icon']]: !isIcon,
          [styles['invalid']]: !isValid,
        })}
      />
      <img
        className={cn(className, styles['icon'], {
          [styles['not-icon']]: !isIcon,
        })}
        src="/search-icon.svg"
        alt="Иконка лупы"
      />
    </>
  );
});

export default Input;
