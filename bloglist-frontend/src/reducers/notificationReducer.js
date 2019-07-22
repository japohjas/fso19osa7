

const notificationReducer = (state = '', action) => {
  //console.log('notiReducer state: ', state)
  //console.log('notiReducer action', action)
  switch (action.type) {
    case 'NOTIFICATION':
      return action.data
    default:
      return state
  }
}

const showNotification = (content) => {
  console.log('show notification' , content)
  return {
    type: 'NOTIFICATION',
    data: content
  }
}

const hideNotification = () => {
  return {
    type: 'NOTIFICATION',
    data: ''
  }
}

export const setNotification = (content, timeout) => {
  return async dispatch => {
    dispatch(showNotification(content))
    setTimeout(() => {
      dispatch(hideNotification())
    }, timeout * 1000)
  }
}

export default notificationReducer