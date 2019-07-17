import React from 'react'
import {
  BrowserRouter as Router,
  Route, Link, Redirect
} from 'react-router-dom'
import CreateNew from './CreateNew'
import About from './About'
import AnecdoteList from './AnecdoteList'
import Anecdote from './Anecdote'
import Notification from './Notification'

const Menu = ({ anecdotes, setAnecdotes, notification, setNotification }) => {
  console.log('anecdotes', anecdotes)

  const padding = {
    paddingRight: 5
  }

  const anecdoteById = (id) =>
    anecdotes.find(a => a.id === id)

  return (
    <div>
      <Router>
        <div>
          <div>
            <Link style={padding} to="/">anecdotes</Link>
            <Link style={padding} to="/create">create new</Link>
            <Link style={padding} to="/about">about</Link>
          </div>

          <Route exact path="/" render={() =>
            <div>
              <Notification notification={notification}/>
              <AnecdoteList anecdotes={anecdotes} />
            </div>
          } />

          <Route exact path="/anecdotes/:id" render={({ match }) =>
            <Anecdote
              anecdote={anecdoteById(match.params.id)}
              anecdotes={anecdotes}
              setAnecdotes={setAnecdotes} />
          } />

          <Route path="/create" render={() =>
            notification === ''
              ? <CreateNew anecdotes={anecdotes}
                setAnecdotes={setAnecdotes}
                setNotification={setNotification}/>
              : <Redirect to="/" />
          } />

          <Route path="/about" render={() =>
            <About />
          } />
        </div>
      </Router>
    </div>
  )
}

export default Menu