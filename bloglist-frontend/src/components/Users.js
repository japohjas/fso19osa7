import React from 'react'
import { Link } from 'react-router-dom'

const Users = (props) => {

  const blogs = props.blogs
  console.log('Users blogs', blogs)

  const userName = blogs.map(b => b.user.name)
  console.log('userName', userName)

  return (
    <div>
      <h3>{userName[0]}</h3>
      <h3>added blogs</h3>
      <ul>
        {blogs.map(b =>
          <li key={b.id}>
            <Link to={`/blogs/${b.id}`}>{b.title}</Link>
          </li>
        )}
      </ul>
    </div>
  )
}

export default Users