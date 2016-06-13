
const userReducer = (state = [], action) => {
  if ( action.type === 'LOGIN' ) {
    return action.payload.data;
  }

  return state;
};

export default userReducer;