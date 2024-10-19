import { useSelector } from 'react-redux';

export const useAuth = () => {
  return useSelector((state) => state.login.isAuth);
};

