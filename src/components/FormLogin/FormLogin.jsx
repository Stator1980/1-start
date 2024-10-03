import { useContext, useEffect, useReducer, useRef } from 'react';
import styles from './FormLogin.module.css';
import Button from '../Button/Button';
import Header from '../Header/Header';
import Input from '../Input/Input';
import { formReducer, INITIAL_STATE } from './FormLogin.state';
import { UserContex } from '../../contex/user.contex';

function FormLogin() {
  let { profileContex, setProfileContex } = useContext(UserContex);
  const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
  const { isValid, isFormReadyToSubmit, values } = formState;
  const login_nameRef = useRef();

  const focusError = isValid => {
    switch (true) {
      case !isValid:
        login_nameRef.current.focus();
        break;
    }
  };

  const onSubmit = profileContex => {
    setProfileContex(profileContex);
  };

  useEffect(() => {
    let timerId;
    if (!isValid) {
      focusError(isValid);
      timerId = setTimeout(() => {
        //console.log('Очистка состояния');
        dispatchForm({ type: 'RESET_VALIDITY' });
      }, 2000);
    }
    return () => {
      clearTimeout(timerId);
    };
  }, [isValid]);

  useEffect(() => {
    if (isFormReadyToSubmit) {
      profileContex = values;
      setProfileContex(profileContex);
      values.isLogined = true;
      onSubmit(values);
      dispatchForm({ type: 'CLEAR' });
    }
  }, [isFormReadyToSubmit, values, onSubmit]);

  const onChange = e => {
    //console.log(e.target.value);
    dispatchForm({
      type: 'SET_VALUE',
      payload: { [e.target.name]: e.target.value },
    });
  };

  const addProfile = e => {
    //console.log('EE - ' + e);
    e.preventDefault();
    dispatchForm({ type: 'SUBMIT' });
  };

  return (
    <form
      className={styles['form-Login']}
      name="form-Login"
      onSubmit={addProfile}
    >
      <div className={styles['log-in']}>
        <Header>Вход</Header>

        <Input
          name="login_name"
          placeholder="Ваше имя"
          ref={login_nameRef}
          isValid={isValid}
          onChange={onChange}
          value={values.login_name}
        />
        <Button appearence="middle">Войти в профиль</Button>
      </div>
    </form>
  );
}

export default FormLogin;
