import { useState } from 'react'

const Anecdote = ({header,anecdotes,vote,selected}) => {
  return(
    <>
    <h1>{header}</h1>
    <div>{anecdotes[selected]}</div>
    <div>has {vote[selected]} votes</div>
    </>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
  
  const nextAnecdote = () => {
    let number = Math.floor(Math.random() * 7)
    if (selected !== number){
      return number
    }else{
      return nextAnecdote(selected)
    }
  }

  const Vote = () => {
    const copy = { ...vote}
    copy[selected] += 1
    if (copy[selected] > copy[best]){
      setBest(selected)
    }
    setVote(copy)
  }

  const [best, setBest] = useState(0)
  const [vote, setVote] = useState({ 0: 0, 1: 0, 2: 0, 3: 0, 4:0, 5:0, 6:0 })
  const [selected, setSelected] = useState(0)

  return (
    <div>
      <Anecdote header = "Anecdote of the day" anecdotes={anecdotes} vote = {vote} selected = {selected}/>
      <button onClick = {() => Vote()}>vote</button>
      <button onClick = {() => setSelected(nextAnecdote())}>next anecdote</button>
      <Anecdote header = "Anecdote with most votes" anecdotes={anecdotes} vote = {vote} selected = {best}/>
    </div>
    
  )
}

export default App
