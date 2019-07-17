import React, { useState } from 'react'
import { connect } from 'react-redux'
import { createNewBlog } from '../reducers/blogReducer'


const CreateBlog = (props) => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')

  const addBlog = () => {
    const blog = {
      title: title,
      author: author,
      url: url
    }
    if (!window.confirm(`add blog ${blog.title}?`)) {
      return
    }
    props.createNewBlog(blog)
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addBlog}>
        <div>
          title:
          <input
            type="text"
            value={title}
            name="title"
            onChange={({ target }) => setTitle(target.value)}
          />
        </div>
        <div>
          author:
          <input
            type="text"
            value={author}
            name="author"
            onChange={({ target }) => setAuthor(target.value)}
          />
        </div>
        <div>
          url:
          <input
            type="text"
            value={url}
            name="url"
            onChange={({ target }) => setUrl(target.value)}
          />
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

const mapDispatchToProps = {
  createNewBlog,
}

export default connect(
  null,
  mapDispatchToProps
)(CreateBlog)