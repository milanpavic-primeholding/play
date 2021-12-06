import accountTypes from '../actionTypes/accountTypes';

const initialState = 0;

const accountReducer = (state = initialState, action: { payload: any; type: string }) => {
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
