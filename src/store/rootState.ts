import { RouterState } from 'connected-react-router/immutable';
import { Record } from 'immutable';
import { TesteState } from 'src/store/teste/types';

export type RootState = Record<{
  teste: TesteState;
  router: RouterState;
}>;
