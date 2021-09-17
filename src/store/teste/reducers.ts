import { Reducer } from 'redux';

import defaultState from 'src/store/teste/state';
import {
  TesteActions,
  TesteState,
  TesteActionTypes,
} from 'src/store/teste/types';

const reducerFlight: Reducer<TesteState, TesteActions> = (state = defaultState, action) => {
  switch (action.type) {
    case TesteActionTypes.StartLoad:
      return {
        ...state, loading: true,
      };
    case TesteActionTypes.EndLoad:
      return {
        ...state, loading: true, error: action.error,
      };
    case TesteActionTypes.SetTeste:
      return {
        ...state, teste: action.teste,
      };
    default:
      return state;
  }
};

export default reducerFlight;
