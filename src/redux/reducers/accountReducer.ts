import { accountTypes } from '../actionTypes/accountTypes';

const initialState = 0;

const accountReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case accountTypes.DEPOSIT:
      return state + action.payload;
    case accountTypes.WITHDRAW:
      return state - action.payload;
    default:
      return state;
  }
};

export default accountReducer;

interface ActionDeposit {
  type: accountTypes.DEPOSIT;
  payload: number;
}

interface ActionWithdraw {
  type: accountTypes.WITHDRAW;
  payload: number;
}

interface ActionBankrupt {
  type: accountTypes.BANKRUPT;
}

type Action = ActionDeposit | ActionWithdraw | ActionBankrupt;
