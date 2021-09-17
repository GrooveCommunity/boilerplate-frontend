import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, AppState } from 'src/store';
import { TesteActionTypes } from 'src/store/teste/types';

type StateSelector = {
  teste: Array<any>;
};

function Exemplo() {
  const dispatch = useDispatch<AppDispatch>();

  const {
    teste,
  } = useSelector<AppState, StateSelector>(
    (state) => ({
      teste: state.get('teste').teste,
    }),
  );

  useEffect(() => {
    dispatch({ type: TesteActionTypes.CallGetTeste });
  }, [dispatch]);

  console.log('teste =>', teste);

  return (
    <h1>Hello World</h1>
  );
}

export default Exemplo;
