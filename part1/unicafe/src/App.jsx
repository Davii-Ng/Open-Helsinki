import { useState } from 'react'

const StatisticsLine = ({text, value}) => {
  return(
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Button = ({onClick, name}) => {
  return(
  <button onClick = {onClick}>{name}</button>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad

  if (all === 0) {
    return <p>No feedback given</p>
  }

  const average = (good - bad) / all
  const positive = (good / all) * 100


  return (
    <div>
      <table>
        <tbody>
        <StatisticsLine text = 'good' value = {good}/>
        <StatisticsLine text = 'neutral' value = {neutral}/>
        <StatisticsLine text = 'bad' value = {bad}/>
        <StatisticsLine text = 'all' value = {all}/>
        <StatisticsLine text = 'average' value = {average}/>
        <StatisticsLine text = 'positive' value = {positive}/>
        </tbody>
      </table>
    </div>
  )
}



const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick = {() => {setGood(good + 1)}} name = "good"/>
      <Button onClick = {() => {setNeutral(neutral + 1)}} name = "neutral"/>
      <Button onClick = {() => {setBad(bad + 1)}} name = "bad"/>
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}


export default App