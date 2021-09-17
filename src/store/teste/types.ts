import { RouterAction } from 'connected-react-router';
import { Action } from 'redux';

export enum TesteActionTypes {
  CallGetTeste = '@@Teste/CallGetTeste',
  StartLoad = '@@Teste/StartLoad',
  SetTeste = '@@Teste/SetTeste',
  EndLoad = '@@Teste/EndLoad',
}

export type ActionsVoid =
  | Action<TesteActionTypes.StartLoad>
  | Action<TesteActionTypes.CallGetTeste>;

export type ActionEndLoad = Action<TesteActionTypes.EndLoad> & {
  error?: any;
};

export type ActionSetTeste = Action<TesteActionTypes.SetTeste> & {
  teste: Array<any>;
};

export type TesteActions =
  | ActionsVoid
  | RouterAction
  | ActionEndLoad
  | ActionSetTeste;

export type TesteState = {
  teste: Array<any>;
  loading: boolean;
  error: boolean;
};
