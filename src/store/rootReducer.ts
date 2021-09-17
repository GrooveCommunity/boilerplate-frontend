import { History } from 'history';
import { combineReducers } from 'redux-immutable';
import { connectRouter } from 'connected-react-router/immutable';

import reducerTeste from 'src/store/teste/reducers';
import { TesteActions } from 'src/store/teste/types';

export type RootActions = TesteActions;

const rootReducer = (history: History) => combineReducers({
  teste: reducerTeste,
  router: connectRouter(history),
} as any);

export default rootReducer;
