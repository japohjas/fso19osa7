import React from 'react'
import { connect } from 'react-redux'
import { addLike } from '../reducers/blogReducer'
import { removeBlog } from '../reducers/blogReducer'


const User = (props) => {
  console.log('User props', props.blog)

  if ( props.blog === undefined) {
    return null
  }

  const blog = props.blog
  console.log('User blog', blog)

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

  return (
    <div>
      <h2>blog app</h2>
      <h2>{blog.title} {blog.author}</h2>
      <p><a href={blog.url}>{blog.url}</a></p>
      <div>
        {blog.likes} likes <button onClick={() => handleLikes(blog)}>like</button>
      </div>
      <div> added by {blog.user.name}</div>
      <div><button onClick={() => handleRemove(blog)}>remove</button></div>
    </div>
  )
}

const mapDispatchToProps = {
  addLike,
  removeBlog
}

export default connect(
  null,
  mapDispatchToProps
)(User)