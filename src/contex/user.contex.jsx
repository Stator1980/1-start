import { createContext } from 'react';
import { useState } from 'react';

export const UserContex = createContext({
  profileContex: { login_name: '', isLogined: false },
});

export const UserContexProvider = ({ children }) => {
  const [profileContex, setProfileContex] = useState('');

  return (
    <UserContex.Provider value={{ profileContex, setProfileContex }}>
      {children}
    </UserContex.Provider>
  );
};
