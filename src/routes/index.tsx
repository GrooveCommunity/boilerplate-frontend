import React from 'react';
import { ConnectedRouter } from 'connected-react-router/immutable';
import { Switch, Route, Redirect } from 'react-router-dom';

import history from 'src/routes/history';

import Exemplo from 'src/views/exemplo/Exemplo';

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route path="/exemplo" component={Exemplo} exact />
      <Route
        path="*"
        render={() => <Redirect to="/exemplo" />}
      />
    </Switch>
  </ConnectedRouter>
);

export default Routes;
