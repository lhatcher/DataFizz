
const userInfo = (state = [], action) => {

  if ( action.type === 'LOGIN' ) {
    return action.payload.data;
  }

  if ( action.type === 'SIGNUP' ) {
    return action.payload.data;
  }

  if ( action.type === 'LOGOUT') {
    return {success: !action.payload.data.success};
  }

  return state;
};

export default userInfo;