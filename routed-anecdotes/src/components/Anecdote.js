import React from 'react'

const Anecdote = ({ anecdote, anecdotes, setAnecdotes }) => {
  console.log('anecdote', anecdote)

  const vote = (id) => {
    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1
    }

    setAnecdotes(anecdotes.map(a => a.id === id ? voted : a))
  }

  return (
    <div>
      <h2>{anecdote.content} by {anecdote.author}</h2>
      <p>has {anecdote.votes} votes
        <button onClick={() => vote(anecdote.id)}>vote</button>
      </p>
      <p>for more info see <a href={anecdote.info}>{anecdote.info}</a></p>
    </div>
  )
}

export default Anecdote