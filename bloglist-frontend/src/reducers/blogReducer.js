import blogService from '../services/blogs'

const blogReducer = (state = [], action) => {
  //console.log('blogReducer state: ', state)
  //console.log('blogReducer action', action)
  switch (action.type) {
    case 'UPDATE_BLOG': {
      const changedBlog = action.data
      return state.map(b => b.id === changedBlog.id ? changedBlog : b)
    }
    case 'NEW_BLOG':
      return [...state, action.data]
    case 'REMOVE_BLOG':
      return state.filter(b => b.id !== action.data)
    case 'INIT_BLOG':
      return action.data
    default:
      return state
  }
}

export const createNewBlog = (blog) => {
  console.log('create new blog', blog)
  return async dispatch => {
    const newBlog = await blogService.create(blog)
    dispatch({
      type: 'NEW_BLOG',
      data: {
        ...newBlog,
        user: blog.user
      }
    })
  }
}

export const initializeBlog = () => {
  return async dispatch => {
    const blogs = await blogService.getAll()
    dispatch({
      type: 'INIT_BLOG',
      data: blogs
    })
  }
}

export const addLike = (blog) => {
  const changedBlog = {
    ...blog,
    likes: blog.likes + 1
  }
  // paluuarvona user === user.id, korvataan user === blog.user
  return async dispatch => {
    const responseBlog = await blogService.update(changedBlog.id, changedBlog)
    dispatch({
      type: 'UPDATE_BLOG',
      data: {
        ...responseBlog,
        user: blog.user,
        comments: blog.comments
      }
    })
  }
}

export const removeBlog = (id) => {
  return async dispatch => {
    await blogService.remove(id)
    dispatch({
      type: 'REMOVE_BLOG',
      data: id
    })
  }
}

export const addComment = (blog, objComment) => {
  return async dispatch => {
    const response = await blogService.addComment(blog.id, objComment)
    dispatch({
      type: 'UPDATE_BLOG',
      data: {
        ...blog,
        comments: [...blog.comments, response]
      }
    })
  }
}

export default blogReducer
