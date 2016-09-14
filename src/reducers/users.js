const users = (state = {}, action) => {
  if (action.type === 'CLEAR_CURRENT_USER')
    state = {...state, current: null};
  else if (action.type === 'SET_USERS')
    state = {...action.payload};
  return state;
};

export default users;
