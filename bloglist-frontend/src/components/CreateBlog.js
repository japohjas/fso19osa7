import React, { useState } from 'react'
import { connect } from 'react-redux'
import { createNewBlog } from '../reducers/blogReducer'
import { Form, Button } from 'semantic-ui-react'

const CreateBlog = (props) => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')

  const addBlog = () => {
    const blog = {
      title: title,
      author: author,
      url: url,
      user: {
        name: props.user.name,
        id: props.user.token
      }
    }
    if (!window.confirm(`add blog ${blog.title}?`)) {
      return
    }
    props.createNewBlog(blog)
    setTitle('')
    setAuthor('')
    setUrl('')
  }

  return (
    <div>
      <h2>create new</h2>
      <Form onSubmit={addBlog}>
        <Form.Field>
          title:
          <input
            type="text"
            value={title}
            name="title"
            onChange={({ target }) => setTitle(target.value)}
          />
        </Form.Field>
        <Form.Field>
          author:
          <input
            type="text"
            value={author}
            name="author"
            onChange={({ target }) => setAuthor(target.value)}
          />
        </Form.Field>
        <Form.Field>
          url:
          <input
            type="text"
            value={url}
            name="url"
            onChange={({ target }) => setUrl(target.value)}
          />
        </Form.Field>
        <Button type="submit">create</Button>
      </Form>
    </div>
  )
}

const mapStateToProps = (state) => {
  // console.log('stateMenu', state.user)
  return {
    user: state.user,
  }
}

const mapDispatchToProps = {
  createNewBlog,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateBlog)