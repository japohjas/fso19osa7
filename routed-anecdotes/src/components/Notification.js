import React from 'react'

const Notification = (props) => {
  console.log('notification', props.notification)

  if (props.notification === '') {
    return null
  }

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  return (
    <div style={style} >
      a new anecdote {props.notification}
    </div>
  )
}

export default Notification