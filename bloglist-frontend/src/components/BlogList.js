import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const BlogList = (props) => {

  return (
    <div>
      <ul>
        {props.blogs.map(b =>
          <li key={b.id}>
            <Link to={`/blogs/${b.id}`}>{b.title} {b.user.name}</Link>
          </li>
        )}
      </ul>
    </div>
  )
}


const sortedBlogs = ({ blogs }) => {
  return blogs.sort((b1, b2) => b2.likes - b1.likes)
}

const mapStateToProps = (state) => {
  console.log('mapStateToProps', state)
  return {
    blogs: sortedBlogs(state)
  }
}

export default connect(
  mapStateToProps
)(BlogList)