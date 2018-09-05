import { GET_USER } from '../actions/index';
// define reducer
const initState = {
  id: '',
  name: '',
  email: '',
  entries: 0,
  joined: new Date()
};

export default function (state = initState, action) {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}
