import { useAtom } from 'jotai';
import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userAuthAtom } from '../../../jotai-store/atoms/authAtom';
const [theme, setTheme] = useAtom(themeToggleAtom);

// PrivateRoute component to handle protected routes
export const PrivateRoute = ({ component: Component, ...rest }) => {
  const [isAuth, setIsAuth] = useAtom(userAuthAtom);
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};