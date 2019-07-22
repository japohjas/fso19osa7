import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Notification from './components/Notification'
import LoginForm from './components/LoginForm'
//import Footer from './components/Footer'
import blogService from './services/blogs'
import { setNotification } from './reducers/notificationReducer'  // 7.7.2019
import { initializeBlog } from './reducers/blogReducer'
import { setUser } from './reducers/userReducer'
import BlogMenu from './components/Menu'
import { Container } from 'semantic-ui-react'

const App = (props) => {
  useEffect(() => {
    props.initializeBlog()
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      props.setUser(user)
      blogService.setToken(user.token)
      //console.log('user:', user)
    }
  }, [])

  if (props.user === null) {
    return (
      <Container>
        <div>
          <h2>Log in to application</h2>
          <Notification />
          <LoginForm />
        </div>
      </Container>
    )
  }

  return (
    <Container>
      <div>
        <Notification />
        <BlogMenu />
      </div>
    </Container>
  )
}

const mapStateToProps = (state) => {
  console.log('stateApp', state.user)
  return {
    user: state.user
  }
}

export default connect(
  mapStateToProps,
  { initializeBlog, setNotification, setUser }
)(App)
