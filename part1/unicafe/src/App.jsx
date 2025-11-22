import { useState } from 'react'

const Button = ({onClick, text})=> <button onClick = {onClick}>{text}</button>

let clicks = 0

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const[all, setAll] = useState(0)




  const handleGoodClick = () =>{
    setGood(good + 1)
    setAll(all + 1)
    clicks += 1
  }
  
  const handleBadClick = () =>{
    setBad(bad + 1)
    setAll(all - 1)
    clicks += 1
  }
  
  const handleNeutralClick = () =>{
    setNeutral(neutral + 1)
    clicks += 1
  }
  

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleGoodClick} text = "good"/>
      <Button onClick={handleNeutralClick} text = "neutral"/>
      <Button onClick={handleBadClick} text = "bad"/>

      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {all/clicks}</p>
      <p>positive {good/clicks}%</p>
    </div>
  )
}

export default App