import { useState } from 'react'

const votes = {0:1, 1:2, 2:3, 3:4, 4:5, 5:6, 6:7, 7:7}


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  
  const [selected, setSelected] = useState(0)
  const copy = {...votes}


  const  mostSelectedPhrase = () =>{
    let mostSelected = 0
    let selectedPhrase = ''
    for (let i = 0; i < 8; i ++){
      if (votes[i] > mostSelected){
        mostSelected = votes[i]
        selectedPhrase = anecdotes[i]
      }else if (votes[i] == mostSelected){
        selectedPhrase += ' '+ anecdotes[i]
      } 
    }
    return [selectedPhrase, mostSelected]
}

  const [a, b] = mostSelectedPhrase()



  return (
    <div>
      {anecdotes[selected]}
      <p>has {copy[selected]} votes</p>
      <button onClick = {()=> {copy[selected] += 1}}>vote</button>
      <button onClick={()=> setSelected(Math.floor(Math.random() *(anecdotes.length)))}>next anecdotes</button>
      <h1>Anecdotes with most votes</h1>
      {a}
      <p>has {b} votes</p>
    </div>
  )
}

export default App