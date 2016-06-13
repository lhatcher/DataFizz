
const userReducer = (state = [], action) => {
  if ( action.type === 'LOGIN' ) {
    console.log(action.payload.data.authToken);
    return state;
  }

  return state;
};

export default userReducer;