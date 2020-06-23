import React, { FC, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import routes from './app.routing';

export const App: FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div />}>
        <Switch>
          {routes.map((route) => (
            <Route {...route} key={route.path as string} />
          ))}
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};
