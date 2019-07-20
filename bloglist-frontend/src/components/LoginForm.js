import React from 'react'
//import PropTypes from 'prop-types'
import  { useField } from '../hooks/index'
import { connect } from 'react-redux'
import { loginUser } from '../reducers/userReducer'
import { setNotification } from '../reducers/notificationReducer'
import { Form, Button } from 'semantic-ui-react'

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
    <Form onSubmit={handleLogin}>
      <Form.Field>
        <label>username </label>
        <input {...username} reset={null} />
      </Form.Field>
      <Form.Field>
        <label>password </label>
        <input {...password} reset={null} />
      </Form.Field>
      <Button type="submit">login</Button>
    </Form>
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