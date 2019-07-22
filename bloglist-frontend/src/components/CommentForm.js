import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addComment } from '../reducers/blogReducer'
import { Form, Button } from 'semantic-ui-react'

const CommentForm = (props) => {
  const blog = props.blog
  console.log('comment form', blog)

  const [comment, setComment] = useState('')

  const handleComment = (event) => {
    event.preventDefault()
    if (comment === '') {
      return
    }

    if (!window.confirm(`add comment: ${comment}?`)) {
      return
    }

    const newComment = {
      comment: comment
    }

    console.log('handle comment')
    props.addComment(blog, newComment)
    setComment('')
  }

  return (
    <div>
      <Form onSubmit={handleComment}>
        <Form.Field>
            comment:
          <input
            type="text"
            value={comment}
            name="comment"
            onChange={({ target }) => setComment(target.value)}
          />
        </Form.Field>
        <Button type="submit">add comment</Button>
      </Form>
    </div>
  )
}

const mapDispatchToProps = {
  addComment
}

export default connect(
  null,
  mapDispatchToProps
)(CommentForm)