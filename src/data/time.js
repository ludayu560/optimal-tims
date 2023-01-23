import React, { useState, useEffect} from 'react'
import { Typography } from '@mui/material';

var dayDict = {
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
    <>
      {(((time.getHours()>12)?(time.getHours()-12).toString():time.getHours()).concat(":"+time.getMinutes().toString().padStart(2,'0')))}
    </>
  )
}