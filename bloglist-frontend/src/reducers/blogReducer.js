import blogService from '../services/blogs'
import { setNotification } from './notificationReducer'

const blogReducer = (state = [], action) => {
  //console.log('blogReducer state: ', state)
  //console.log('blogReducer action', action)

  switch (action.type) {
    case 'LIKE_BLOG': {
      const changedBlog = action.data
      return state.map(b => b.id === changedBlog.id ? changedBlog : b)
    }
    case 'NEW_BLOG': {
      const newBlog = action.data
      return [...state, newBlog]
    }
    case 'REMOVE_BLOG':
      return state.filter(b => b.id !== action.data)
    case 'INIT_BLOG':
      return action.data
    default:
      return state
  }
}

export const createNewBlog = (content) => {
  return async dispatch => {
    const newBlog = await blogService.create(content)
    dispatch({
      type: 'NEW_BLOG',
      data: newBlog
    })
    // dispatch(setNotification(`a new blog ${newBlog.title} by ${newBlog.author} added`, 3))
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
  return async dispatch => {
    const blog = await blogService.replace(changedBlog.id, changedBlog)
    dispatch({
      type: 'LIKE_BLOG',
      data: blog
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


export default blogReducer
