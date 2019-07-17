import React from 'react'
import { connect } from 'react-redux'

const Notification = (props) => {
  console.log('notification')

  if (props.notification === '') {
    return null
  }

  return (
    <div className="error">
      {props.notification}
    </div>
  )
}

const mapStateToProps = (state) => ({
  notification: state.notification
})

export default connect(
  mapStateToProps
)(Notification)