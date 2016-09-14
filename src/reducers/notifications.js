const notifications = (state = {}, action) => {
  if (action.type === 'SET_NOTIFICATIONS')
    state = {...action.payload};
  return state;
};

export default notifications;
