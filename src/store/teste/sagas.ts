import {
  all,
  put,
  call,
  takeLatest,
  SimpleEffect,
} from 'redux-saga/effects';

import * as apiTeste from 'src/services/teste';

import {
  TesteActionTypes,
  ActionEndLoad,
} from 'src/store/teste/types';

export function* GetTeste(): Generator<SimpleEffect<any>, void, any> {
  yield put({ type: TesteActionTypes.StartLoad });

  const endAction: ActionEndLoad = { type: TesteActionTypes.EndLoad };
  try {
    const response = yield call(apiTeste.GetTeste);
    yield put({ type: TesteActionTypes.SetTeste, teste: response });
  } catch (err) {
    endAction.error = err;
  }

  yield put(endAction);
}

function* rootSaga() {
  yield all([
    takeLatest(TesteActionTypes.CallGetTeste, GetTeste),
  ]);
}

export default rootSaga;
