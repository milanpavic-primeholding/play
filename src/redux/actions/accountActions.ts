import { Dispatch } from 'redux';
import { accountTypes } from '../actionTypes/accountTypes';

export const depositMoney = (amount: number) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: accountTypes.DEPOSIT,
      payload: amount
    });
  };
};

export const withdrawMoney = (amount: number) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: accountTypes.WITHDRAW,
      payload: amount
    });
  };
};
