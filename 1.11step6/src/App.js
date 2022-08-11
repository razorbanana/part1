import { useState } from 'react'

const StatisticLine = ({text, quantity, postfix}) => {
  return(
    <tr><td>{text}:</td> <td>{quantity} {postfix}</td></tr>
  )
}

const Statistics = ({good,neutral,bad}) => {
  if (bad+neutral+good === 0){
    return(
      <p>No feedback given</p>
    )
  }else{
    return(
      <table>
        <StatisticLine text = "good" quantity={good}/>
        <StatisticLine text = "neutral" quantity={neutral}/>
        <StatisticLine text = "bad" quantity={bad}/>
        <StatisticLine text = "all" quantity={bad+neutral+good}/>
        <StatisticLine text = "average" quantity={(bad+neutral+good)/3}/>
        <StatisticLine text = "positive" quantity={good*100/(bad+neutral+good)} postfix = "%"/>
      </table>
    )
  } 
}

const Button = ({text, onclick}) => {
  return(
    <button onClick = {onclick}>{text}</button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button text = "good" onclick={() => setGood(good + 1)}/>
      <Button text = "neutral" onclick={() => setNeutral(neutral + 1)}/>
      <Button text = "bad" onclick={() => setBad(bad + 1)}/>
      <h1>statistics</h1>
      <Statistics good = {good} neutral = {neutral} bad ={bad}/>
    </div>
  )
}

export default App
