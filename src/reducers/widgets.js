import * as types from '../constants/actionTypes';

const widgets = (state = [], action) => {
	let newState;
  switch(action.type) {
    case types.GET_DATA_FROM_LOCALSTORAGE:
			if (action.data && action.data.widgets) {
				newState = state.concat(action.data.widgets);
			}
			return newState || state;
		case types.NEW_WIDGET:
      return [...state, action.data];
    default:
      return state;
    }
};

export default widgets;
