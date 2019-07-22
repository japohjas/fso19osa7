import React from 'react'
import {
  BrowserRouter as Router,
  Route, Link
} from 'react-router-dom'
import BlogList from './BlogList'
import { connect } from 'react-redux'
import { setUser } from '../reducers/userReducer'
import CreateBlog from './CreateBlog'
import Togglable from './Togglable'
import UsersList from './UsersList'
import Users from './Users'
import User from './User'
import { Menu, Button } from 'semantic-ui-react'

const BlogMenu = (props) => {
  const blogs = props.blogs
  const newBlogRef = React.createRef()
  const padding = { padding: 5 }

  const handleLogout = () => {
    window.localStorage.removeItem(
      'loggedBlogAppUser', JSON.stringify(props.user)
    )
    props.setUser(null)
  }

  const blogsById = (id) =>
    blogs.filter(b => b.user.id === id)

  const blogById = (id) =>
    blogs.find(b => b.id === id)

  return (
    <div>
      <Router>
        <div>
          <Menu inverted>
            <Menu.Item link>
              <Link style={padding} to="/">blogs</Link>
            </Menu.Item>
            <Menu.Item link>
              <Link style={padding} to="/users">users</Link>
            </Menu.Item>
            <Menu.Item >
              {props.user.name} logged in
            </Menu.Item>
            <Menu.Item >
              <Button onClick={handleLogout}>logout</Button>
            </Menu.Item>
          </Menu>
          <Route exact path="/" render={() =>
            <div>
              <Togglable buttonLabel="new blog" ref={newBlogRef}>
                <CreateBlog />
              </Togglable >
              <BlogList />
            </div>
          } />
          <Route path="/users" render={() =>
            <div>
              <UsersList />
            </div>
          } />
          <Route exact path="/users/:id" render={({ match }) =>
            <Users blogs={blogsById(match.params.id)} />
          } />
          <Route exact path="/blogs/:id" render={({ match }) =>
            <div>
              <User blog={blogById(match.params.id)}/>
            </div>
          } />
        </div>
      </Router>
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log('stateMenu', state.user)
  return {
    user: state.user,
    blogs: state.blogs
  }
}

export default connect(
  mapStateToProps,
  { setUser }
)(BlogMenu)