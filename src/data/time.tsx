import React, { useState, useEffect} from 'react'

var dayDict: { [key : number]: string}  = {
  1 : "Monday",
  2 : "Tuesday",
  3 : "Wednesday",
  4 : "Thursday",
  5 : "Friday",
  6 : "Saturday",
  7 : "Sunday",
}

export const Time = () => {
  const [time, setTime] = useState(new Date());

  useEffect(
    () => {
      const intervalId = setInterval(() => {
        setTime(new Date())
      }, 60000)
      return () => {
        clearInterval(intervalId)
      }
    } 
  )

  return(
    <div>
      {/* <h1> {dayDict[time.getDay()]} {time.getHours().toString().padStart(2,'0')}:{time.getMinutes().toString().padStart(2,'0')}</h1> */}

      <h1>{time.getHours().toString().padStart(2,'0')}:{time.getMinutes().toString().padStart(2,'0')}</h1>
    </div>
  )
}