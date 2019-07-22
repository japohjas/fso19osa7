import React from 'react'
import { connect } from 'react-redux'
import { addLike } from '../reducers/blogReducer'
import { removeBlog } from '../reducers/blogReducer'
import { Table, Button } from 'semantic-ui-react'
import CommentForm from './CommentForm'

const User = (props) => {
  console.log('User props', props.blog)

  if ( props.blog === undefined) {
    return null
  }

  const blog = props.blog
  console.log('User blog', blog)
  const comments = blog.comments
  console.log('User comments', comments)

  const handleLikes = (blog) => {
    console.log('like clik')
    props.addLike(blog)
  }

  const handleRemove = (blog) => {
    if (!window.confirm(`remove blog ${blog.title}?`)) {
      return
    }
    props.removeBlog(blog.id)
  }

  const loginUser = props.user.name === blog.user.name ? true : false
  const showWhenLoginUser = { display: loginUser ? '' : 'none' }

  return (
    <div>
      <h2>blog app</h2>
      <Table striped celled>
        <Table.Body>
          <Table.Row>
            <Table.Cell>
              <h2>{blog.title}</h2>
            </Table.Cell>
            <Table.Cell>
              <h2>{blog.author}</h2>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <a href={blog.url}>{blog.url}</a>
            </Table.Cell>
            <Table.Cell>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              {blog.likes} likes
            </Table.Cell>
            <Table.Cell>
              <Button onClick={() => handleLikes(blog)}>like</Button>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              added by
            </Table.Cell>
            <Table.Cell>
              {blog.user.name}
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <div style={showWhenLoginUser} >
        <Button onClick={() => handleRemove(blog)}>remove</Button>
      </div>
      <div>
        <CommentForm blog={blog}/>
      </div>
      <div>
        <h3>Comments</h3>
        <ul>
          {comments.map(c =>
            <li key={c.id} >
              {c.comment}
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log('User state', state)
  return {
    user: state.user
  }
}

const mapDispatchToProps = {
  addLike,
  removeBlog
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User)