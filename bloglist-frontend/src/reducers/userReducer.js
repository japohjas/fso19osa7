import loginService from '../services/login'
import blogService from '../services/blogs'
import { setNotification } from './notificationReducer'

const userReducer = (state = null, action) => {
  console.log('userReduse state:', state)
  console.log('userReduse action:', action)
  switch (action.type) {
    case 'SET_USER':
      return action.data
    default:
      return state
  }
}

export const loginUser = (name, password) => {
  return async dispatch => {
    try {
      const user = await loginService.login({
        username: name,
        password: password
      })

      window.localStorage.setItem(
        'loggedBlogAppUser', JSON.stringify(user)
      )

      blogService.setToken(user.token)

      dispatch({
        type: 'SET_USER',
        data: user
      })
    } catch (exception) {
      console.log('wrong username or password, login error')
      dispatch(setNotification('wrong username or password, login error', 3))
    }
  }
}

export const setUser = (user) => {
  //blogService.setToken(user.token)
  return async dispatch => {
    return dispatch({
      type: 'SET_USER',
      data: user
    })
  }
}

export default userReducer