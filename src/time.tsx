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
        
          setTime(new Date());
        }, 60);
        return () => {
          clearInterval(intervalId)
        }
      } 
    )
  
    return(
      <div>
        <p> {dayDict[time.getDay()]} {time.getHours()}:{time.getMinutes()}</p>
      </div>
    )
  
  }