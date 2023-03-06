import { type } from 'os'
import React from 'react'

type TimerProps = {
  time: number
}

const Timer = ({ time }: TimerProps): JSX.Element => {
  const formatTime = (miliseconds: number) => {
    const totalSeconds: number = Math.floor(miliseconds / 1000)
    const hours: number = Math.floor(totalSeconds / 3600)
    const minutes: number = Math.floor((totalSeconds % 3600) / 60)
    const seconds: number = totalSeconds % 60
    const ms: number = miliseconds % 1000

    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${ms
      .toString()
      .padStart(3, '0')}`

    return formattedTime
  }
  return <div>{formatTime(time)}</div>
}

export default Timer
