import { useEffect, useState } from 'react'
import Timer from './components/Timer/Timer'

const App = (): JSX.Element => {
  const [time, setTime] = useState<number>(0)
  const [timer, setTimer] = useState<any>(null)

  useEffect(() => {
    return () => {
      if (timer) clearInterval(timer)
    }
  }, [timer])

  const handleStart = () => {
    setTimer(
      setInterval(() => {
        setTime((prevValue) => prevValue + 100)
      }, 100)
    )
  }

  const handleStop = () => {
    clearInterval(timer)
  }

  const handleReset = () => {
    clearInterval(timer)
    setTime(0)
  }

  return (
    <div className="container">
      <Timer time={time} />
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default App
