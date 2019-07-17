import React from 'react'
//import PropTypes from 'prop-types'
import  { useField } from '../hooks/index'
import { connect } from 'react-redux'
import { loginUser } from '../reducers/userReducer'
import { setNotification } from '../reducers/notificationReducer'

const LoginForm = (props) => {
  const username = useField('text')
  const password = useField('text')

  const handleLogin = (event) => {
    event.preventDefault()
    props.loginUser(username.value, password.value)
    username.reset()
    password.reset()
  }

  return (
    <div>
      <form onSubmit={handleLogin}>
        <div>
          username:
          <input {...username} reset={null} />
        </div>
        <div>
          password:
          <input {...password} reset={null} />
        </div>
        <button type="submit">login</button>
      </form>
    </div>
  )
}

const mapDispatchToProps = {
  loginUser,
  setNotification
}

export default connect(
  null,
  mapDispatchToProps
)(LoginForm)