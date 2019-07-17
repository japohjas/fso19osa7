import React from 'react'
import { Link } from 'react-router-dom'

const AnecdoteList = (props) => (
  <div>
    <h2>Anecdotes</h2>
    <ul>
      {props.anecdotes.map(anecdote =>
        <li key={anecdote.id} >
          <Link to={`/anecdotes/${anecdote.id}`}>{anecdote.content}</Link>
        </li>
      )}
    </ul>
  </div>
)

export default AnecdoteList