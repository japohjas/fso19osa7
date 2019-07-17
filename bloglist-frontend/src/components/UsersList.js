import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


const UsersList = (props) => {
  const blogs = props.blogs

  console.log('userList blogs', blogs)
  const filteredBlogs = blogs.filter(b => b.user.id !== undefined)
  const userIds = filteredBlogs.map(b => b.user.id)

  console.log('userIds', userIds)

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
  // laskee userId:n mukaan blogien määrän
  // esim {5d0ab412e6f99e2395c483d9: 11, 5d284784f2eca913b688a468: 4}
  const counteUserIds = userIds.reduce((allIds, userId) => {
    if (userId in allIds) {
      allIds[userId]++
    }
    else {
      allIds[userId] = 1
    }
    return allIds
  }, {})

  console.log('userId: blogs', counteUserIds)

  // vain uniikit userrId:t
  const unikIds = new Set()

  for(var id of userIds ) {
    unikIds.add(id)
  }

  let arrayIds = [...unikIds]

  const userById = (id) => {
    const blog = blogs.find(b => b.user.id === id)
    return (
      blog.user.name
    )
  }

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {arrayIds.map(id =>
          <li key={id} >
            <Link to={`/users/${id}`}>{userById(id)}</Link>  {counteUserIds[id]}
          </li>
        )}
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log('stateUserList', state)
  return {
    blogs: state.blogs
  }
}

export default connect(
  mapStateToProps
)(UsersList)
