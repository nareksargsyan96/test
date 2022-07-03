import React from 'react';
import { Route, Switch } from 'react-router-dom';
import mainRoutes from './mainRoutes';

const PageRoutes = () => {
  return (
    <Switch>
      {mainRoutes.map((item) => (
        <Route key={item.path} exact={item.exact} path={item.path} component={item.component} />
      ))}
    </Switch>
  );
};

export default PageRoutes;
