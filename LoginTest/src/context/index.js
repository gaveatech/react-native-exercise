import {createContext} from 'react';

const LoginContext = createContext({
  email: '',
  setEmail: () => {},
});

export {LoginContext};
