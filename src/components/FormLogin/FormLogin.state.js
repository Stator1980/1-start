export const INITIAL_STATE = {
  isValid: true,
  values: {
    login_name: '',
    isLogined: false,
  },
  isFormReadyToSubmit: false,
};

export function formReducer(state, action) {
  switch (action.type) {
    case 'SET_VALUE':
      return { ...state, values: { ...state.values, ...action.payload } };
    case 'CLEAR':
      return {
        ...state,
        values: INITIAL_STATE.values,
        isFormReadyToSubmit: false,
      };
    case 'RESET_VALIDITY':
      return { ...state, isValid: INITIAL_STATE.isValid };
    case 'SUBMIT': {
      const flValid = state.values.login_name?.trim().length > 0 ? true : false;
      // console.log('STATE - ' + flValid);
      return {
        ...state,
        isValid: flValid,
        isFormReadyToSubmit: flValid,
      };
    }
  }
}
