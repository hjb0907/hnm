function login (email,password) {
  return (dispatch, getState) => {
    console.log('login')
    dispatch({type:'LOGIN_SUCCESS',payload:{email,password}})
  }
}


export const authenticateAction = {login} ;